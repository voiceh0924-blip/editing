import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { useRef } from 'react';
import { MessageSquare, FileText, Code, Megaphone, Headphones } from 'lucide-react';

export function Services() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const services = [
    {
      icon: MessageSquare,
      number: '01',
      title: 'ヒアリング＆企画考案',
      description: 'お客様の想いとノウハウを徹底的にヒアリング',
      details: [
        '企画の明確化：目的、対象者、提供内容を明確化',
        '事業計画：収支計画、資金回収、集客戦略を具体的に策定',
        'コンセプト構築：市場に響く商品・サービスを共に作り上げる',
      ],
      color: ['#00D4FF', '#0066FF'],
    },
    {
      icon: FileText,
      number: '02',
      title: 'コンテンツ提案',
      description: 'ノウハウを最大限に活かせる効果的なカリキュラム構築',
      details: [
        'カリキュラム設計：専門性を活かした具体的なカリキュラム作成',
        'コンテンツ制作：見やすい、分かりやすい、操作しやすいサイト構成',
        'ワンストップ支援：制作から運営サポートまで一貫提供',
      ],
      color: ['#0066FF', '#6B00FF'],
    },
    {
      icon: Code,
      number: '03',
      title: 'システム構築',
      description: '独自のノウハウを持つ専門チームが柔軟かつ迅速に開発',
      details: [
        '全ページ作成：コンセプトに基づいた完全オーダーメイド',
        'デザイン：認知度とイメージを向上させる効果的なデザイン',
        'EdTechシステム：自社開発LMSで学習状況を完全可視化',
        '安心の環境：冗長化されたサーバーで安定稼働を実現',
      ],
      color: ['#6B00FF', '#B800FF'],
    },
    {
      icon: Megaphone,
      number: '04',
      title: '集客',
      description: '効果的な集客戦略を策定から実施運用まで一貫して実行',
      details: [
        '戦略立案：SEO、SNS広告、リスティング広告など多角的な戦略',
        'ターゲティング：データ分析で最もニーズの高い層へアプローチ',
        'PDCA：市場調査から解析、制作、運用まで最適な施策を継続',
        'イベント企画：年間数十件の実績を活かしたプロモーション',
      ],
      color: ['#B800FF', '#FF006E'],
    },
    {
      icon: Headphones,
      number: '05',
      title: 'サポート',
      description: 'プロの自社サポートチームによる365日の安心サポート',
      details: [
        'ワンストップサポート：専門チームが柔軟かつ安全に実施',
        'クレームリスク低減：迅速・丁寧な対応でリスクを最小化',
        'プロチーム：丁寧・迅速・的確な問題解決で企業価値向上',
      ],
      color: ['#FF006E', '#FF6B00'],
    },
  ];

  return (
    <section id="services" ref={containerRef} className="py-32 bg-black relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#001a33] to-black opacity-50" />
      
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
              Services
            </motion.span>
          </h2>
          <motion.p
            className="text-2xl md:text-3xl text-gray-400 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            オンラインスクール開発・運営支援
            <br />
            <span className="text-cyan-400">一貫したサポートで確実な成果を実現</span>
          </motion.p>
        </motion.div>

        <div className="space-y-32">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: any; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-200px' });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      className="relative"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 1 }}
    >
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
        {/* Content Side */}
        <motion.div
          className={`${!isEven ? 'lg:order-2' : ''} space-y-8`}
          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div>
            <motion.div
              className="flex items-center gap-6 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span 
                className="text-8xl opacity-20 bg-gradient-to-r bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${service.color[0]}, ${service.color[1]})`,
                }}
              >
                {service.number}
              </span>
            </motion.div>
            
            <motion.h3
              className="text-5xl text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {service.title}
            </motion.h3>
            
            <motion.p
              className="text-xl text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {service.description}
            </motion.p>
          </div>

          <div className="space-y-4">
            {service.details.map((detail: string, detailIndex: number) => (
              <motion.div
                key={detailIndex}
                className="flex items-start gap-4 group"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + detailIndex * 0.1 }}
              >
                <motion.div
                  className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${service.color[0]}, ${service.color[1]})`,
                  }}
                  whileHover={{ scale: 2 }}
                />
                <p className="text-lg text-gray-300 group-hover:text-white transition-colors">
                  {detail}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Visual Side */}
        <motion.div
          className={`${!isEven ? 'lg:order-1' : ''} relative`}
          style={{ y }}
        >
          <motion.div
            className="relative aspect-square rounded-3xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Gradient Background */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(135deg, ${service.color[0]}, ${service.color[1]})`,
              }}
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Icon */}
            <div className="relative z-10 h-full flex items-center justify-center">
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <service.icon className="w-48 h-48 text-white/20" strokeWidth={1} />
              </motion.div>
            </div>

            {/* Overlay Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                backgroundSize: '30px 30px',
              }} />
            </div>
          </motion.div>

          {/* Floating Number */}
          <motion.div
            className="absolute -top-8 -right-8 text-9xl text-white/5 pointer-events-none select-none"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {service.number}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}