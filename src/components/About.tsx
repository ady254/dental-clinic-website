import React from 'react';
import { GraduationCap, Award, Stethoscope, Smile, Users, BookOpen } from 'lucide-react';

const About = () => {
  const qualifications = [
    {
      icon: GraduationCap,
      title: 'DDS - Doctor of Dental Surgery',
      institution: 'University of California, San Francisco',
      year: '2012'
    },
    {
      icon: Award,
      title: 'Cosmetic Dentistry Certification',
      institution: 'American Academy of Cosmetic Dentistry',
      year: '2015'
    },
    {
      icon: Stethoscope,
      title: 'Advanced Implant Training',
      institution: 'International Congress of Oral Implantologists',
      year: '2018'
    }
  ];

  const achievements = [
    'Top 10 Dentists in Healthcare City (2023)',
    'Excellence in Patient Care Award (2022)',
    'Featured in Dental Excellence Magazine',
    'Speaker at International Dental Conference',
    '99.5% Patient Satisfaction Rate',
    'Certified in Latest Digital Dentistry Techniques'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Dr. Michael Chen</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated to providing exceptional dental care with compassion, expertise, and cutting-edge dental technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Story */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-8">
              <Smile className="w-8 h-8 text-blue-500" />
              <h3 className="text-2xl font-bold text-gray-900">My Mission</h3>
            </div>
            
            <p className="text-gray-700 leading-relaxed text-lg">
              For over 12 years, I have been dedicated to providing comprehensive dental care 
              to patients of all ages. My approach combines the latest dental technology with gentle, 
              personalized attention to ensure each patient receives the best possible care.
            </p>

            <p className="text-gray-700 leading-relaxed text-lg">
              I believe in preventive dentistry and work closely with patients to develop sustainable 
              oral health habits. My goal is not just to treat dental issues, 
              but to empower patients with knowledge and tools for lifelong oral health.
            </p>

            <div className="bg-blue-50 p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Areas of Expertise</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Preventive Dentistry</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Cosmetic Dentistry</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Dental Implants</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Root Canal Therapy</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Teeth Whitening</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Orthodontics</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Qualifications & Achievements */}
          <div className="space-y-8">
            {/* Education & Certifications */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <BookOpen className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">Education & Certifications</h3>
              </div>
              
              <div className="space-y-4">
                {qualifications.map((qual, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-xl">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <qual.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">{qual.title}</h4>
                        <p className="text-gray-600">{qual.institution}</p>
                        <p className="text-sm text-blue-600 font-medium">{qual.year}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Award className="w-8 h-8 text-yellow-500" />
                <h3 className="text-2xl font-bold text-gray-900">Achievements & Recognition</h3>
              </div>
              
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-800">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;