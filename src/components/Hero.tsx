import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-surface pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative text-center max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-3 py-1 text-xs font-medium text-primary-light bg-primary/10 rounded-full border border-primary/20 mb-6">
            国内 Claude Code 一站式部署
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-heading leading-tight mb-6">
            Claude Code
            <br />
            <span className="bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">
              一键部署服务
            </span>
          </h1>
          <p className="text-lg md:text-xl text-text max-w-2xl mx-auto mb-10 leading-relaxed">
            无需科学上网，无需繁琐配置。从环境安装到 API 调通，全包服务，
            <br className="hidden md:block" />
            让你直接在 VS Code 里用上 Claude Code。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#pricing"
              className="px-8 py-3.5 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-all hover:scale-105 shadow-lg shadow-primary/25"
            >
              查看价格方案
            </a>
            <a
              href="#intro"
              className="px-8 py-3.5 text-text-heading border border-white/10 hover:border-white/20 rounded-xl transition-all"
            >
              了解更多
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg className="w-5 h-5 text-text" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  )
}
