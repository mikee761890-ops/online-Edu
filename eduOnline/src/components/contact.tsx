import React, { useRef, useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_phone: '',
    message: ''
  });

  const form = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.user_name || !formData.user_email || !formData.user_phone || !formData.message) {
      toast.error('❌ Iltimos, barcha maydonlarni to‘ldiring!');
      return;
    }

    emailjs
      .sendForm('service_d36lzv4', 'template_bayn3or', form.current, {
        publicKey: 'g_aq-uDeSczFuOdtD',
      })
      .then(
        () => {
          toast.success('✅ Xabar muvaffaqiyatli yuborildi!');
          setFormData({ user_name: '', user_email: '', user_phone: '', message: '' });
        },
        (error) => {
          toast.error(`❌ Xabar yuborilmadi: ${error.text}`);
        }
      );
  };

  return (
    <section className="bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700 text-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">
          Biz bilan <span className="text-yellow-300">bog‘laning</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-yellow-300 text-2xl" />
              <p>+998 94 174 03 30</p>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-yellow-300 text-2xl" />
              <p>info@eduonline.uz</p>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-yellow-300 text-2xl" />
              <p>Andijon viloyati, Baliqchi tumani, Startum School</p>
            </div>

            <p className="mt-8 text-gray-200">
              Har qanday savol, taklif yoki muammolar bo‘yicha biz bilan bemalol bog‘lanishingiz mumkin.  
              Jamoamiz sizga imkon qadar tezroq javob beradi!
            </p>

            <div className="mt-8 rounded-2xl overflow-hidden shadow-lg border border-white/20">
              <iframe
                title="Startum School Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d481.32134233137626!2d71.0849482237679!3d40.87375667969427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bbec0df2292291%3A0x9e041154c6e0c177!2sWR3X%2BRV2%2C%20Palvan-Kul',%20Andijon%20Viloyati%2C%20O'zbekiston!5e0!3m2!1sen!2suz!4v1730232500000!5m2!1sen!2suz"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="flex-1 bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg">
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
              <input
                type="text"
                name="user_name"
                placeholder="Ismingiz"
                value={formData.user_name}
                onChange={handleChange}
                className="p-3 rounded-md bg-white/20 placeholder-gray-200 text-white focus:outline-none focus:ring-2 focus:ring-yellow-300 transition"
                required
              />
              <input
                type="email"
                name="user_email"
                placeholder="Email manzilingiz"
                value={formData.user_email}
                onChange={handleChange}
                className="p-3 rounded-md bg-white/20 placeholder-gray-200 text-white focus:outline-none focus:ring-2 focus:ring-yellow-300 transition"
                required
              />
              <input
                type="tel"
                name="user_phone"
                placeholder="Telefon raqamingiz"
                value={formData.user_phone}
                onChange={handleChange}
                className="p-3 rounded-md bg-white/20 placeholder-gray-200 text-white focus:outline-none focus:ring-2 focus:ring-yellow-300 transition"
                required
              />
              <textarea
                rows={4}
                name="message"
                placeholder="Xabaringiz"
                value={formData.message}
                onChange={handleChange}
                className="p-3 rounded-md bg-white/20 placeholder-gray-200 text-white focus:outline-none focus:ring-2 focus:ring-yellow-300 transition resize-none"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-yellow-400 text-gray-900 py-3 rounded-md hover:bg-yellow-300 transition-transform duration-300"
              >
                Yuborish
              </button>
            </form>
          </div>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </section>
  );
};

export default Contact;
