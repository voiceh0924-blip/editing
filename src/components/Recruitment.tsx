import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Rocket, Heart, Users, Lightbulb, ArrowRight } from 'lucide-react';

export function Recruitment() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const values = [
    {
      icon: Rocket,
      title: '成長機会',
      description: '最新の技術とマーケティング手法を学び、実践できる環境',
      color: '#00D4FF',
    },
    {
      icon: Heart,
      title: '働きやすさ',
      description: 'ワークライフバランスを重視した柔軟な働き方',
      color: '#0066FF',
    },
    {
      icon: Users,
      title: 'チームワーク',
      description: '互いに高め合える、プロフェッショナルなチーム',
      color: '#6B00FF',
    },
    {
      icon: Lightbulb,
      title: '挑戦する文化',
      description: '新しいアイデアを歓迎し、挑戦を後押しする企業文化',
      color: '#FF006E',
    },
  ];

  const positions = [
    {
      title: 'WEBマーケター',
      description: 'オンラインスクールの集客戦略立案・実行を担当',
      requirements: ['デジタルマーケティング経験○年以上', 'SEO/SEM知識', 'データ分析スキル'],
      color: ['#00D4FF', '#0066FF'],
    },
    {
      title: 'WEBデザイナー',
      description: 'UI/UXデザイン、サイト設計を担当',
      requirements: ['デザインツール使用経験', 'HTML/CSS知識', 'ユーザー視点のデザイン力'],
      color: ['#0066FF', '#6B00FF'],
    },
    {
      title: 'システムエンジニア',
      description: 'LMS開発、システム構築を担当',
      requirements: ['プログラミング経験○年以上', 'フレームワーク使用経験', 'チーム開発経験'],
      color: ['#6B00FF', '#B800FF'],
    },
    {
      title: 'カスタマーサポート',
      description: '顧客対応、運営サポートを担当',
      requirements: ['コミュニケーション能力', '顧客対応経験', 'PCスキル'],
      color: ['#B800FF', '#FF006E'],
    },
  ];

  return (
    <section id="recruitment" ref={ref} className="py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, #0066cc 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
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
              Recruitment
            </motion.span>
          </h2>
          <motion.p
            className="text-2xl text-gray-600 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            共に成長し、社会に価値を提供する
            <br />
            <span className="text-[#0066cc]">仲間を募集しています</span>
          </motion.p>
        </motion.div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
            >
              <motion.div
                className="absolute inset-0 rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity"
                style={{ backgroundColor: value.color }}
              />
              
              <motion.div
                className="relative bg-white border-2 border-gray-100 rounded-3xl p-8 h-full"
                whileHover={{ 
                  y: -10,
                  borderColor: value.color,
                  boxShadow: `0 20px 40px ${value.color}20`,
                }}
              >
                <motion.div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${value.color}20` }}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <value.icon className="w-8 h-8" style={{ color: value.color }} />
                </motion.div>
                <h3 className="text-2xl text-[#003366] mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Positions */}
        <div className="mb-20">
          <motion.h3
            className="text-4xl text-[#003366] mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            募集職種
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {positions.map((position, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.9 + index * 0.1 }}
              >
                <motion.div
                  className="relative bg-white border-2 border-gray-100 rounded-3xl p-8 overflow-hidden"
                  whileHover={{ 
                    y: -5,
                    borderColor: position.color[0],
                  }}
                >
                  {/* Background Gradient */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity"
                    style={{
                      background: `linear-gradient(135deg, ${position.color[0]}, ${position.color[1]})`,
                    }}
                  />
                  
                  <div className="relative z-10">
                    <h4 className="text-3xl text-[#003366] mb-3">{position.title}</h4>
                    <p className="text-lg text-gray-600 mb-6">{position.description}</p>
                    
                    <div className="space-y-3">
                      <p className="text-sm" style={{ color: position.color[0] }}>応募要件：</p>
                      <ul className="space-y-2">
                        {position.requirements.map((req, reqIndex) => (
                          <motion.li
                            key={reqIndex}
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 1 + index * 0.1 + reqIndex * 0.05 }}
                          >
                            <motion.div
                              className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                              style={{ backgroundColor: position.color[0] }}
                              whileHover={{ scale: 2 }}
                            />
                            <span className="text-gray-700">{req}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Hover Arrow */}
                  <motion.div
                    className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 45 }}
                  >
                    <ArrowRight className="w-6 h-6" style={{ color: position.color[0] }} />
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
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
              <h3 className="text-5xl text-white mb-6">エントリー受付中</h3>
              <p className="text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                ご興味をお持ちの方は、お気軽にお問い合わせください。
                <br />
                まずはカジュアルな面談からでも歓迎いたします。
              </p>
              <motion.a
                href="#contact"
                className="group inline-flex items-center gap-3 bg-white text-[#003366] px-10 py-5 rounded-full text-xl overflow-hidden relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">採用に関するお問い合わせ</span>
                <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}