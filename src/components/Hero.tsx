import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-[#001a33] via-[#003366] to-black"
          style={{ opacity }}
        />
        
        {/* Animated Grid */}
        <motion.div 
          className="absolute inset-0"
          style={{ y }}
        >
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(0, 102, 204, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(0, 102, 204, 0.1) 1px, transparent 1px)`,
            backgroundSize: '100px 100px',
          }} />
        </motion.div>

        {/* Floating Elements */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div 
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32"
        style={{ scale, opacity }}
      >
        <div className="text-center">
          {/* Large Number Display */}
          <motion.div
            className="mb-8 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.div
              className="text-[#0066cc] opacity-20 pointer-events-none select-none"
              style={{ fontSize: 'clamp(100px, 20vw, 300px)', lineHeight: 0.8 }}
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              01
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <motion.h1
              className="text-white mb-8"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 7rem)', lineHeight: 1.1 }}
            >
              オンラインスクールで
              <br />
              <motion.span 
                className="inline-block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: '200% 200%',
                }}
              >
                成果を創造する
              </motion.span>
            </motion.h1>
          </motion.div>

          <motion.p
            className="text-2xl md:text-3xl text-gray-300 mb-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            企画・制作・運営・集客・サポート
            <br />
            <span className="text-cyan-400">全てを統合した総合支援</span>
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <motion.a
              href="#contact"
              className="group relative inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 text-xl">お問い合わせ</span>
              <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            
            <motion.a
              href="#services"
              className="inline-flex items-center gap-3 border-2 border-white text-white px-10 py-5 rounded-full text-xl"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              whileTap={{ scale: 0.95 }}
            >
              サービスを見る
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            {[
              { number: '○○+', label: '支援実績' },
              { number: '○○%', label: '顧客満足度' },
              { number: '365', label: '日サポート' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="relative group"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                />
                <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
                  <motion.p 
                    className="text-5xl text-cyan-400 mb-2"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  >
                    {stat.number}
                  </motion.p>
                  <p className="text-gray-400">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ opacity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-gray-400 text-sm tracking-widest">SCROLL</span>
          <div className="w-px h-16 bg-gradient-to-b from-gray-400 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}