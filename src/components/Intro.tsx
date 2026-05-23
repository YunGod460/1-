import { motion } from 'framer-motion'

export default function Intro() {
  return (
    <section id="intro" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-4">为什么要用这个服务？</h2>
          <p className="text-text max-w-2xl mx-auto">
            Claude Code 是 Anthropic 官方推出的 AI 编程助手，但在国内使用有一道道门槛
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: '环境安装繁琐',
              desc: 'Node.js、Git、VS Code 扩展… 普通用户光装环境就要折腾半天，还容易装错版本',
            },
            {
              title: 'API 配置复杂',
              desc: '要注册海外账号、绑定支付方式、配置代理… 每一步都可能卡住',
            },
            {
              title: '网络限制',
              desc: 'Claude Code 默认连接海外 API，国内直连不稳定，需要配置国内中转',
            },
            {
              title: '缺少售后指导',
              desc: '网上教程东拼西凑，遇到问题没人问，装好了也不会用',
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-surface-2 border border-white/5 rounded-xl p-6 hover:border-primary/30 transition-colors"
            >
              <h3 className="text-text-heading font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-text leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 bg-surface-2 border border-primary/20 rounded-xl p-8 text-center"
        >
          <p className="text-text-heading text-lg font-medium mb-2">
            而我只做一件事：<span className="text-primary-light">让你拿到手就能直接用</span>
          </p>
          <p className="text-text">
            从零开始，帮你装好环境、配好 API、调通模型。你只需要打开 VS Code 开始写代码。
          </p>
        </motion.div>
      </div>
    </section>
  )
}
