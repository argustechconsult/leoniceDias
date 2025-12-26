import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import emailjs from '@emailjs/browser';
import { ContactFormData, SubmissionStatus } from '../types';

interface ContactFormProps {
  onStatusChange: (status: SubmissionStatus) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onStatusChange }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    onStatusChange(SubmissionStatus.SUBMITTING);

    try {
      // 1. Send Email via EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      console.log('Email sent successfully!');

      // 2. (Optional) Keep Gemini processing if API key exists, but don't let it fail the submission
      if (import.meta.env.VITE_GEMINI_API_KEY || process.env.API_KEY) {
        try {
          const ai = new GoogleGenAI({
            apiKey: import.meta.env.VITE_GEMINI_API_KEY || process.env.API_KEY,
          });

          const prompt = `
            Analise o seguinte relato de um cliente para uma advogada:
            Cliente: ${formData.name}
            E-mail: ${formData.email}
            Assunto: ${formData.subject}
            Mensagem/Dor: ${formData.message}
            
            Sua tarefa é gerar uma mensagem curta e empática (em português) confirmando o recebimento do caso e garantindo que ele será tratado com prioridade.
          `;

          const response = await ai.models.generateContent({
            model: 'gemini-1.5-flash',
            contents: prompt,
            config: {
              systemInstruction:
                'Você é uma secretária virtual de um escritório de advocacia de elite. Seja empático, sério e profissional.',
            },
          });

          console.log('Gemini processou o caso:', response.text);
        } catch (geminiError) {
          console.warn('Gemini processing skipped or failed:', geminiError);
        }
      }

      onStatusChange(SubmissionStatus.SUCCESS);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      onStatusChange(SubmissionStatus.ERROR);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
            Nome Completo
          </label>
          <input
            required
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none transition-all text-white"
            placeholder="Ex: João Silva"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
            Seu E-mail
          </label>
          <input
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none transition-all text-white"
            placeholder="exemplo@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
            Telefone/WhatsApp
          </label>
          <input
            required
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none transition-all text-white"
            placeholder="(21) 00000-0000"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
            Área de Interesse
          </label>
          <select
            required
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none transition-all text-white appearance-none"
          >
            <option value="">Selecione a área...</option>
            <option value="Cível">Direito Cível</option>
            <option value="Previdenciário">Direito Previdenciário</option>
            <option value="Trabalhista">Direito Trabalhista</option>
            <option value="Outros">Outros</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
          Conte seu caso (Seu desabafo)
        </label>
        <textarea
          required
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none transition-all text-white resize-none"
          placeholder="Descreva aqui o que está acontecendo. Quanto mais detalhes você der, melhor poderemos te ajudar..."
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 gold-gradient text-black font-bold rounded-lg uppercase tracking-[0.2em] hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#d4af37]/20"
      >
        {isSubmitting
          ? 'Enviando sua história...'
          : 'Enviar para Dra. Leonice Dias'}
      </button>

      <p className="text-[10px] text-gray-500 text-center uppercase tracking-widest">
        Sua privacidade é nossa prioridade. Todos os dados são tratados sob
        sigilo profissional.
      </p>
    </form>
  );
};

export default ContactForm;
