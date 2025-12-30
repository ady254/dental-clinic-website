import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Martinez',
      age: 34,
      condition: 'Cosmetic Dentistry',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      text: 'Dr. Chen transformed my smile completely! I was always self-conscious about my teeth, but after the cosmetic treatment, I can\'t stop smiling. The entire process was comfortable and the results exceeded my expectations.',
      date: '2 weeks ago'
    },
    {
      name: 'David Wilson',
      age: 28,
      condition: 'Preventive Care',
      image: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      text: 'I used to be terrified of dentists, but Dr. Chen and his team made me feel completely at ease. Their gentle approach and clear explanations helped me overcome my dental anxiety. Now I actually look forward to my check-ups!',
      date: '1 month ago'
    },
    {
      name: 'Emily Rodriguez',
      age: 45,
      condition: 'Dental Implants',
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      text: 'After losing a tooth in an accident, I was worried about my smile. Dr. Chen recommended dental implants and the result is amazing - it looks and feels just like my natural tooth. The procedure was much easier than I expected.',
      date: '3 weeks ago'
    },
    {
      name: 'James Thompson',
      age: 52,
      condition: 'Root Canal Treatment',
      image: 'https://images.pexels.com/photos/1043475/pexels-photo-1043475.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      text: 'I needed a root canal and was dreading the pain, but Dr. Chen made it completely painless. His skill and modern techniques meant I felt no discomfort during or after the procedure. Highly recommend!',
      date: '1 month ago'
    }
  ];

  const stats = [
    { number: '99%', label: 'Patient Satisfaction' },
    { number: '3500+', label: 'Happy Patients' },
    { number: '12+', label: 'Years of Experience' },
    { number: '500+', label: 'Smile Makeovers' }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Patient Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from patients whose smiles have been transformed through comprehensive dental care.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 text-sm uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 relative">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-blue-200" />
              
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">Age {testimonial.age} • {testimonial.condition}</p>
                  <div className="flex items-center mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                    <span className="text-xs text-gray-500 ml-2">{testimonial.date}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-blue-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Smile?</h3>
            <p className="text-gray-600 mb-6">Join thousands of patients who have trusted Dr. Chen with their dental care.</p>
            <button 
              onClick={() => {
                const element = document.getElementById('appointment');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Schedule Your Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;