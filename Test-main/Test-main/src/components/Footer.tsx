import { motion } from 'motion/react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'サービス',
      links: [
        { label: 'ヒアリング＆企画考案', href: '#services' },
        { label: 'コンテンツ提案', href: '#services' },
        { label: 'システム構築', href: '#services' },
        { label: '集客', href: '#services' },
        { label: 'サポート', href: '#services' },
      ],
    },
    {
      title: '会社情報',
      links: [
        { label: '会社概要', href: '#company' },
        { label: '実績・導入事例', href: '#case-studies' },
        { label: '採用情報', href: '#recruitment' },
        { label: 'お問い合わせ', href: '#contact' },
      ],
    },
    {
      title: '法務',
      links: [
        { label: 'プライバシーポリシー', href: '#' },
        { label: '利用規約', href: '#' },
        { label: '特定商取引法に基づく表記', href: '#' },
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', color: '#1877F2' },
    { icon: Twitter, href: '#', color: '#1DA1F2' },
    { icon: Linkedin, href: '#', color: '#0A66C2' },
    { icon: Instagram, href: '#', color: '#E4405F' },
  ];

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(0, 212, 255, 0.5) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0, 212, 255, 0.5) 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.h3
              className="text-3xl mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              株式会社（仮）
            </motion.h3>
            <motion.p
              className="text-gray-400 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              WEBマーケティングデザインとオンラインスクールの企画・制作・運営を通じて、
              お客様のビジネスの成長を支援します。
            </motion.p>
            <motion.div
              className="flex gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:border-white/30 transition-all group"
                  whileHover={{ 
                    y: -5,
                    borderColor: social.color,
                    backgroundColor: `${social.color}20`,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={20} className="group-hover:scale-110 transition-transform" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * (sectionIndex + 1) }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg mb-4 text-cyan-400">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors inline-block"
                      whileHover={{ x: 5 }}
                    >
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        />

        {/* Bottom Bar */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500">
            © {currentYear} 株式会社（仮）. All rights reserved.
          </p>
          <div className="flex gap-6 text-gray-500">
            <motion.a 
              href="#" 
              className="hover:text-white transition-colors"
              whileHover={{ y: -2 }}
            >
              サイトマップ
            </motion.a>
            <motion.a 
              href="#" 
              className="hover:text-white transition-colors"
              whileHover={{ y: -2 }}
            >
              お知らせ
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}