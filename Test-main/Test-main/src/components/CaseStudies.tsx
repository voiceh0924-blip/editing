import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { TrendingUp, Users, Award, BarChart, ArrowUpRight } from 'lucide-react';

export function CaseStudies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { icon: TrendingUp, value: '○○', suffix: '件', label: '累計支援実績', color: '#00D4FF' },
    { icon: Users, value: '○○', suffix: '社', label: 'クライアント数', color: '#0066FF' },
    { icon: Award, value: '○○', suffix: '%', label: '顧客満足度', color: '#6B00FF' },
    { icon: BarChart, value: '○○', suffix: '%', label: '売上向上率平均', color: '#FF006E' },
  ];

  const cases = [
    {
      title: '教育系オンラインスクール',
      category: '教育・研修',
      description: '企画立案から集客、運営サポートまで一貫して支援。',
      results: [
        { label: '受講者数', value: '○○', unit: '名達成' },
        { label: '継続率', value: '○○', unit: '%' },
        { label: '売上目標達成率', value: '○○', unit: '%' },
      ],
      gradient: ['#00D4FF', '#0066FF'],
    },
    {
      title: 'ビジネススキル向上スクール',
      category: 'ビジネス',
      description: '既存コンテンツの再構築とマーケティング戦略の立案。',
      results: [
        { label: '月間PV数', value: '○○', unit: '倍増' },
        { label: 'CVR', value: '○○', unit: '%向上' },
        { label: 'LTV', value: '○○', unit: '%改善' },
      ],
      gradient: ['#0066FF', '#6B00FF'],
    },
    {
      title: '専門技術習得プログラム',
      category: '技術・スキル',
      description: 'LMSシステムの独自開発により学習進捗を可視化。',
      results: [
        { label: '修了率', value: '○○', unit: '%達成' },
        { label: 'サポート問い合わせ', value: '○○', unit: '%削減' },
        { label: '受講満足度', value: '○○', unit: '%' },
      ],
      gradient: ['#6B00FF', '#FF006E'],
    },
  ];

  return (
    <section id="case-studies" ref={ref} className="py-32 bg-gradient-to-b from-black to-[#001a33] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 2, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
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
              Case Studies
            </motion.span>
          </h2>
          <motion.p
            className="text-2xl text-gray-400 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            豊富な実績と確かなノウハウで
            <br />
            <span className="text-cyan-400">お客様のビジネスを成功に導きます</span>
          </motion.p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
            >
              <motion.div
                className="absolute inset-0 rounded-3xl blur-xl opacity-50"
                style={{ backgroundColor: stat.color }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5,
                }}
              />
              
              <motion.div
                className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8"
                whileHover={{ 
                  y: -10,
                  borderColor: stat.color,
                }}
              >
                <stat.icon 
                  className="w-12 h-12 mb-6 opacity-50" 
                  style={{ color: stat.color }}
                />
                <div className="flex items-baseline gap-1 mb-2">
                  <motion.span
                    className="text-6xl"
                    style={{ color: stat.color }}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 1, delay: 0.7 + index * 0.1 }}
                  >
                    {stat.value}
                  </motion.span>
                  <span className="text-3xl text-white/50">{stat.suffix}</span>
                </div>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Case Studies */}
        <div className="space-y-8">
          {cases.map((caseItem, index) => (
            <CaseCard key={index} caseItem={caseItem} index={index} isInView={isInView} />
          ))}
        </div>

        {/* Note */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <p className="text-gray-500 leading-relaxed">
            ※ 具体的な社名や詳細情報については、守秘義務の関係上、掲載を控えさせていただいております。
            <br />
            詳細な事例については、お問い合わせいただいた際に個別にご説明させていただきます。
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function CaseCard({ caseItem, index, isInView }: any) {
  const ref = useRef(null);
  const cardInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      className="group relative"
      initial={{ opacity: 0, y: 50 }}
      animate={cardInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      <motion.div
        className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden"
        whileHover={{ y: -5, borderColor: 'rgba(255, 255, 255, 0.3)' }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {/* Info Section */}
          <div className="lg:col-span-1 p-12 relative overflow-hidden">
            <motion.div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(135deg, ${caseItem.gradient[0]}, ${caseItem.gradient[1]})`,
              }}
              animate={{
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
            />
            
            <div className="relative z-10">
              <motion.span
                className="inline-block px-4 py-2 rounded-full text-sm mb-6"
                style={{
                  background: `linear-gradient(135deg, ${caseItem.gradient[0]}30, ${caseItem.gradient[1]}30)`,
                  color: caseItem.gradient[0],
                  border: `1px solid ${caseItem.gradient[0]}50`,
                }}
              >
                {caseItem.category}
              </motion.span>
              
              <h3 className="text-3xl text-white mb-4">{caseItem.title}</h3>
              <p className="text-xl text-gray-400">{caseItem.description}</p>
            </div>
          </div>

          {/* Results Section */}
          <div className="lg:col-span-2 p-12">
            <h4 className="text-xl text-white/50 mb-8">導入効果</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseItem.results.map((result: any, resultIndex: number) => (
                <motion.div
                  key={resultIndex}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={cardInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + resultIndex * 0.1 }}
                >
                  <motion.div
                    className="bg-white/5 rounded-2xl p-6 border border-white/10"
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    <p className="text-sm text-gray-400 mb-3">{result.label}</p>
                    <div className="flex items-baseline gap-2">
                      <span 
                        className="text-5xl"
                        style={{
                          background: `linear-gradient(135deg, ${caseItem.gradient[0]}, ${caseItem.gradient[1]})`,
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }}
                      >
                        {result.value}
                      </span>
                      <span className="text-lg text-white/70">{result.unit}</span>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Hover Arrow */}
        <motion.div
          className="absolute top-8 right-8"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <ArrowUpRight className="w-8 h-8 text-white/30" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}