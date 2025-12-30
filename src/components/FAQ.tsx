import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How do I prepare for my first dental appointment?',
      answer: 'Please bring a list of current medications, any previous dental records, insurance information, and a list of concerns about your teeth or gums. Arrive 15 minutes early to complete any remaining paperwork. If you have dental anxiety, let us know so we can help you feel more comfortable.'
    },
    {
      question: 'Do you accept insurance plans?',
      answer: 'Yes, we accept most major dental insurance plans including Delta Dental, MetLife, Cigna, Aetna, and many others. We also offer flexible payment plans and financing options. Please contact our office to verify if your specific plan is accepted.'
    },
    {
      question: 'What should I expect during a dental cleaning?',
      answer: 'A professional dental cleaning involves removing plaque and tartar buildup, polishing your teeth, and a thorough examination. The process typically takes 45-60 minutes and is generally comfortable. We use modern techniques to ensure your comfort throughout the procedure.'
    },
    {
      question: 'How often should I visit the dentist?',
      answer: 'We recommend dental check-ups and cleanings every 6 months for most patients. However, if you have gum disease, a history of cavities, or other oral health issues, more frequent visits may be necessary - typically every 3-4 months.'
    },
    {
      question: 'What are the warning signs of dental problems?',
      answer: 'Key warning signs include tooth pain, sensitivity to hot or cold, bleeding gums, persistent bad breath, loose teeth, and swelling in your mouth or face. If you experience severe tooth pain or facial swelling, contact our office immediately for emergency care.'
    },
    {
      question: 'Do you offer telemedicine consultations?',
      answer: 'Yes, we offer virtual consultations for follow-up appointments, oral health questions, and treatment planning discussions. However, initial examinations and all dental procedures must be conducted in-person for proper diagnosis and treatment.'
    },
    {
      question: 'What can I do to maintain good oral health?',
      answer: 'Key habits include brushing twice daily with fluoride toothpaste, flossing daily, using mouthwash, eating a balanced diet low in sugar, avoiding tobacco, limiting alcohol, and visiting the dentist regularly for check-ups and cleanings.'
    },
    {
      question: 'How quickly can I get an appointment?',
      answer: 'We typically offer appointments within 1-2 weeks for routine check-ups. Urgent dental concerns can often be seen within 24-48 hours. Emergency cases are seen the same day when possible. We also reserve same-day slots for existing patients with dental pain.'
    },
    {
      question: 'What payment options do you accept?',
      answer: 'We accept cash, credit cards (Visa, MasterCard, American Express), debit cards, and most dental insurance plans. We also offer flexible payment plans and financing options for larger treatments like implants or cosmetic procedures.'
    },
    {
      question: 'Can family members accompany me to appointments?',
      answer: 'Yes, you\'re welcome to bring a family member or friend to your appointments. Having support can be helpful, especially if you have dental anxiety or are discussing treatment plans. We just ask that you inform us when scheduling if someone will be joining you.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about dental care, appointments, and our services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-50 rounded-xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Still have questions?</h3>
            <p className="text-gray-600 mb-4">
              Our friendly staff is here to help you with any additional questions or concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Contact Us
              </button>
              <button 
                onClick={() => window.open('https://wa.me/15551234567', '_blank')}
                className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-semibold"
              >
                WhatsApp Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;