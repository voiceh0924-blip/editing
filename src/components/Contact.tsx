import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('お問い合わせありがとうございます。追って担当者よりご連絡させていただきます。');
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: '電話番号',
      value: '03-XXXX-XXXX',
      subtext: '平日 9:00〜18:00',
      color: '#00D4FF',
    },
    {
      icon: Mail,
      label: 'メールアドレス',
      value: 'info@company.example.com',
      subtext: '24時間受付',
      color: '#0066FF',
    },
    {
      icon: MapPin,
      label: '所在地',
      value: '〒000-0000 東京都○○区○○○○○',
      subtext: '',
      color: '#6B00FF',
    },
    {
      icon: Clock,
      label: '営業時間',
      value: '平日 9:00〜18:00',
      subtext: '土日祝日休業',
      color: '#FF006E',
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-32 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#001a33] via-black to-[#001a33]" />
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(0, 102, 204, 0.05) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0, 102, 204, 0.05) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div className="flex items-center gap-4 mb-6">
            <motion.div 
              className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
            />
          </motion.div>
          
          <h2 className="text-white mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Contact
            </motion.span>
          </h2>
          <motion.p
            className="text-2xl text-gray-400 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            サービスに関するご質問やご相談は
            <br />
            <span className="text-cyan-400">お気軽にお問い合わせください</span>
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity"
                    style={{ backgroundColor: info.color }}
                  />
                  
                  <motion.div
                    className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6"
                    whileHover={{ 
                      x: 10,
                      borderColor: info.color,
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <motion.div
                        className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${info.color}20` }}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <info.icon className="w-7 h-7" style={{ color: info.color }} />
                      </motion.div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-400 mb-1">{info.label}</p>
                        <p className="text-xl text-white mb-1">{info.value}</p>
                        {info.subtext && (
                          <p className="text-sm text-gray-500">{info.subtext}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Map Placeholder */}
            <motion.div
              className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              whileHover={{ borderColor: 'rgba(0, 212, 255, 0.5)' }}
            >
              <h4 className="text-xl text-white mb-4">アクセス</h4>
              <div className="aspect-video bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-cyan-400/50 mx-auto mb-3" />
                  <p className="text-gray-400">Google Mapなどの地図をここに表示</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10">
              <h3 className="text-3xl text-white mb-8">お問い合わせフォーム</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <label htmlFor="name" className="block text-gray-300 mb-2">
                    お名前 <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                    placeholder="山田 太郎"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <label htmlFor="email" className="block text-gray-300 mb-2">
                    メールアドレス <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                    placeholder="example@example.com"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  <label htmlFor="phone" className="block text-gray-300 mb-2">
                    電話番号
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                    placeholder="03-XXXX-XXXX"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  <label htmlFor="company" className="block text-gray-300 mb-2">
                    会社名
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                    placeholder="株式会社○○"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.1 }}
                >
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    お問い合わせ内容 <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all resize-none"
                    placeholder="お問い合わせ内容をご記入ください"
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  className="group relative w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-8 py-5 rounded-xl overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400"
                    initial={{ x: '100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10 flex items-center justify-center gap-3 text-xl">
                    送信する
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}