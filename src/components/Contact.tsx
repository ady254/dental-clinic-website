import React from 'react';
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Visit Our Practice</h2>
          <p className="text-xl text-gray-600">
            Conveniently located in the heart of Healthcare City with modern facilities and ample parking.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Address</h4>
                    <p className="text-gray-600">123 Medical Plaza, Suite 456<br />Healthcare City, HC 12345</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">
                      Main: <a href="tel:+15551234567" className="text-blue-600 hover:underline">(555) 123-4567</a><br />
                      Emergency: <a href="tel:+15559876543" className="text-blue-600 hover:underline">(555) 987-6543</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">
                      Appointments: <a href="mailto:appointments@drchen.com" className="text-blue-600 hover:underline">appointments@drchen.com</a><br />
                      General: <a href="mailto:info@drchen.com" className="text-blue-600 hover:underline">info@drchen.com</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Clinic Hours</h4>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Wednesday: 8:00 AM - 6:00 PM</p>
                      <p>Thursday - Friday: 8:00 AM - 8:00 PM</p>
                      <p>Saturday: 9:00 AM - 2:00 PM</p>
                      <p className="text-red-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Directions */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Navigation className="w-5 h-5 mr-2 text-blue-600" />
                Directions & Parking
              </h4>
              <div className="space-y-3 text-gray-700">
                <p><strong>By Car:</strong> Located on Medical Plaza, just off Highway 101. Take Exit 15 and follow signs to Dental District.</p>
                <p><strong>Public Transit:</strong> Take Metro Line 3 to Healthcare Station. We're a 3-minute walk from the station.</p>
                <p><strong>Parking:</strong> Free validated parking available in the Medical Plaza garage. Wheelchair accessible entrance available.</p>
              </div>
            </div>

            {/* Emergency Information */}
            <div className="bg-red-50 p-6 rounded-xl border border-red-200">
              <h4 className="text-lg font-semibold text-red-800 mb-4">Emergency Information</h4>
              <p className="text-red-700 mb-2">
                For life-threatening emergencies, call <strong>911</strong> immediately.
              </p>
              <p className="text-red-700">
                For urgent dental pain or emergencies after hours, call our emergency line: 
                <a href="tel:+15559876543" className="font-semibold text-red-800 hover:underline ml-1">(555) 987-6543</a>
              </p>
            </div>
          </div>

          {/* Map */}
          <div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="h-96 bg-gradient-to-br from-blue-100 to-teal-100 flex items-center justify-center relative">
                {/* Interactive Map Placeholder */}
                <div className="text-center text-gray-600">
                  <MapPin className="w-16 h-16 mx-auto mb-4 text-blue-600" />
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Interactive Map</h4>
                  <p className="mb-4">123 Medical Plaza, Healthcare City</p>
                  <button 
                    onClick={() => window.open('https://maps.google.com/?q=123+Medical+Plaza+Healthcare+City', '_blank')}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                  >
                    Get Directions
                  </button>
                </div>
                
                {/* Map overlay with location marker */}
                <div className="absolute inset-0 opacity-20">
                  <div className="w-full h-full bg-gradient-to-br from-blue-200 via-green-100 to-teal-200 flex items-center justify-center">
                    <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Modern Dental Practice</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Modern dental facility with state-of-the-art equipment and comfortable patient areas.
                </p>
                <div className="flex space-x-2">
                  <button 
                    onClick={() => window.open('https://maps.google.com/?q=123+Medical+Plaza+Healthcare+City', '_blank')}
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    View on Google Maps
                  </button>
                  <button 
                    onClick={() => window.open('https://maps.apple.com/?q=123+Medical+Plaza+Healthcare+City', '_blank')}
                    className="flex-1 border border-blue-600 text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors text-sm font-medium"
                  >
                    Apple Maps
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;