import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Building2, MapPin, Phone, Mail, Calendar, Briefcase } from 'lucide-react';

export function Company() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const companyInfo = [
    {
      icon: Building2,
      label: '会社名',
      value: '株式会社（仮）',
    },
    {
      icon: MapPin,
      label: '所在地',
      value: '〒000-0000 東京都○○区○○○○○',
    },
    {
      icon: Phone,
      label: '電話番号',
      value: '03-XXXX-XXXX',
      highlight: true,
    },
    {
      icon: Mail,
      label: 'メールアドレス',
      value: 'info@company.example.com',
    },
    {
      icon: Briefcase,
      label: '代表者',
      value: '代表取締役 ○○ ○○',
    },
    {
      icon: Calendar,
      label: '設立年月日',
      value: '20XX年XX月XX日',
    },
    {
      icon: Briefcase,
      label: '資本金',
      value: 'XX,XXX,XXX円',
    },
  ];

  const history = [
    { year: '20XX', month: 'XX', event: '会社設立' },
    { year: '20XX', month: 'XX', event: 'オンラインスクール支援事業開始' },
    { year: '20XX', month: 'XX', event: 'WEBマーケティング事業拡大' },
    { year: '20XX', month: 'XX', event: '累計支援実績○○件達成' },
  ];

  return (
    <section id="company" ref={ref} className="py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#003366 1px, transparent 1px),
                           linear-gradient(90deg, #003366 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
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
              className="h-px flex-1 bg-gradient-to-r from-transparent via-[#0066cc] to-transparent"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
            />
          </motion.div>
          
          <h2 className="text-[#003366] mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Company
            </motion.span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">
          {/* Company Information */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="space-y-1">
              {companyInfo.map((item, index) => (
                <motion.div
                  key={index}
                  className={`group relative overflow-hidden ${
                    item.highlight
                      ? 'bg-gradient-to-r from-[#003366] to-[#0066cc] text-white'
                      : 'bg-gray-50 hover:bg-gray-100'
                  } transition-all duration-300`}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <div className="flex items-center gap-6 p-6">
                    <motion.div
                      className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                        item.highlight
                          ? 'bg-white/20'
                          : 'bg-white'
                      }`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <item.icon
                        className={`w-6 h-6 ${
                          item.highlight ? 'text-white' : 'text-[#0066cc]'
                        }`}
                      />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <p
                        className={`text-sm mb-1 ${
                          item.highlight ? 'text-white/70' : 'text-gray-500'
                        }`}
                      >
                        {item.label}
                      </p>
                      <p
                        className={`text-xl truncate ${
                          item.highlight ? 'text-white' : 'text-[#003366]'
                        }`}
                      >
                        {item.value}
                      </p>
                    </div>
                  </div>
                  
                  {/* Hover Effect */}
                  {!item.highlight && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* History Timeline */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl text-[#003366] mb-8">沿革</h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#0066cc] via-cyan-400 to-[#0066cc]" />
              
              <div className="space-y-8">
                {history.map((item, index) => (
                  <motion.div
                    key={index}
                    className="relative pl-20"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  >
                    {/* Timeline Dot */}
                    <motion.div
                      className="absolute left-0 w-16 h-16 bg-gradient-to-br from-[#0066cc] to-cyan-400 rounded-full flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.2, rotate: 180 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-white text-center">
                        <div className="text-xs opacity-70">{item.month}</div>
                        <div className="text-sm">{item.year}</div>
                      </div>
                    </motion.div>
                    
                    <motion.div
                      className="bg-white border-2 border-gray-100 rounded-xl p-4 shadow-sm"
                      whileHover={{ 
                        scale: 1.05, 
                        borderColor: '#0066cc',
                        boxShadow: '0 10px 30px rgba(0, 102, 204, 0.2)'
                      }}
                    >
                      <p className="text-lg text-[#003366]">{item.event}</p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mission Statement */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="relative overflow-hidden rounded-3xl">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#003366] via-[#0066cc] to-[#003366]"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: '200% 200%',
              }}
            />
            
            <div className="relative px-12 py-20 text-center">
              <motion.h3
                className="text-5xl text-white mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
              >
                企業理念
              </motion.h3>
              <motion.p
                className="text-2xl text-blue-100 leading-relaxed max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                WEBマーケティングデザインとオンラインスクール運営の専門知識を活かし、
                お客様のビジネスの成長を支援します。
                企画から運営まで一貫したサポートにより、
                確実な成果と持続的な価値を創造し、
                社会に貢献することを使命としています。
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}