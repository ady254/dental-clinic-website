import React from 'react';
import { Smile, Sparkles, Shield, Stethoscope, Clock, DollarSign } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Smile,
      title: 'Comprehensive Dental Exam',
      description: 'Complete oral health assessment including X-rays, cleaning, and personalized treatment planning.',
      price: '$180',
      duration: '60 minutes',
      features: ['Digital X-rays', 'Professional Cleaning', 'Oral Cancer Screening', 'Treatment Planning']
    },
    {
      icon: Sparkles,
      title: 'Teeth Whitening',
      description: 'Professional teeth whitening treatment for a brighter, more confident smile.',
      price: '$350',
      duration: '90 minutes',
      features: ['Professional Grade Whitening', 'Custom Trays', 'Take-home Kit', 'Follow-up Care']
    },
    {
      icon: Stethoscope,
      title: 'Dental Implants',
      description: 'Permanent tooth replacement solution using state-of-the-art implant technology.',
      price: '$2,500',
      duration: '2 hours',
      features: ['3D Imaging', 'Titanium Implant', 'Custom Crown', 'Lifetime Warranty']
    },
    {
      icon: Shield,
      title: 'Preventive Care Package',
      description: 'Comprehensive preventive care to maintain optimal oral health and prevent dental issues.',
      price: '$120',
      duration: '45 minutes',
      features: ['Fluoride Treatment', 'Dental Sealants', 'Oral Hygiene Education', 'Regular Check-ups']
    }
  ];

  const scrollToAppointment = () => {
    const element = document.getElementById('appointment');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive dental care tailored to your individual needs with transparent pricing and professional expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-between mb-6">
                <div className="bg-blue-100 p-4 rounded-xl">
                  <service.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-blue-600">{service.price}</div>
                  <div className="text-sm text-gray-500 flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {service.duration}
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-gray-700">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <button 
                onClick={scrollToAppointment}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Book This Service
              </button>
            </div>
          ))}
        </div>

        {/* Schedule & Timing */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Practice Hours & Schedule</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Regular Hours</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Monday - Wednesday</span>
                  <span className="font-semibold text-blue-600">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Thursday - Friday</span>
                  <span className="font-semibold text-blue-600">8:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Saturday</span>
                  <span className="font-semibold text-blue-600">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700">Sunday</span>
                  <span className="text-red-600 font-semibold">Closed</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Special Services</h4>
              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-red-800 mb-2">Emergency Dental Care</h5>
                  <p className="text-red-700 text-sm">For dental emergencies, we provide urgent care and pain relief services.</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-green-800 mb-2">Telemedicine Consultations</h5>
                  <p className="text-green-700 text-sm">Virtual consultations available for follow-ups and oral health questions.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-blue-800 mb-2">Same-Day Appointments</h5>
                  <p className="text-blue-700 text-sm">Same-day appointments available for urgent dental needs and existing patients.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;