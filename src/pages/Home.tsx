import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { tools, categories } from '../data/tools'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-surface pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <span className="inline-block px-3 py-1 text-xs font-medium text-primary-light bg-primary/10 rounded-full border border-primary/20 mb-6">
            国内 AI 工具一站式指南
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-text-heading leading-tight mb-6">
            AI 工具
            <span className="bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent"> 整合导航</span>
          </h1>
          <p className="text-lg text-text max-w-2xl mx-auto mb-10">
            精选 AI 编程、模型、平台工具，提供国内安装配置指南。
            <br />
            不用科学上网，跟着教程一步步搞定。
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((cat) => (
              <a
                key={cat}
                href={`#cat-${cat}`}
                className="px-4 py-2 text-sm bg-surface-2 border border-white/5 rounded-full text-text hover:text-text-heading hover:border-primary/30 transition-all"
              >
                {cat}
              </a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Tool Grid */}
      <section className="pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          {categories.map((category) => (
            <div key={category} id={`cat-${category}`} className="mb-16">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-bold text-text-heading mb-6"
              >
                {category}
              </motion.h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {tools
                  .filter((t) => t.category === category)
                  .map((tool, i) => (
                    <motion.div
                      key={tool.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                    >
                      <Link
                        to={`/${tool.id}`}
                        className="block h-full bg-surface-2 border border-white/5 rounded-xl p-5 hover:border-primary/30 hover:scale-[1.02] transition-all group"
                      >
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center text-xl mb-3"
                          style={{ backgroundColor: `${tool.color}20` }}
                        >
                          {tool.icon}
                        </div>
                        <h3 className="text-text-heading font-semibold mb-1 group-hover:text-primary-light transition-colors">
                          {tool.name}
                        </h3>
                        <p className="text-text text-sm leading-relaxed">{tool.description}</p>
                        <span
                          className="inline-block mt-3 text-xs px-2 py-0.5 rounded-full"
                          style={{ color: tool.color, backgroundColor: `${tool.color}15` }}
                        >
                          {tool.category}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Service promo section */}
      <section id="service-promo" className="py-16 px-4 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-text-heading mb-4">
              装不好？我帮你搞定
            </h2>
            <p className="text-text mb-8">
              任何一个工具遇到安装问题，提供远程协助服务，帮你全装好调通
            </p>
            <Link
              to="/claude-code"
              className="inline-block px-8 py-3.5 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-all"
            >
              查看安装服务
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
