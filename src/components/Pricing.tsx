import { motion } from 'framer-motion'

const plans = [
  {
    name: '基础安装包',
    price: '¥9.9',
    period: '一次付',
    desc: '适合动手能力强的用户',
    features: [
      'Claude Code 安装包下载',
      'Node.js + Git 安装包',
      '图文安装教程',
      'DeepSeek API 配置指南',
    ],
    highlight: false,
  },
  {
    name: '配置版',
    price: '¥39.9',
    period: '一次付',
    desc: '适合想省事的用户',
    features: [
      '安装包 + 自动配置脚本',
      '已调通的 DeepSeek API',
      'VS Code 扩展配置',
      '微信远程指导',
    ],
    highlight: true,
  },
  {
    name: '远程协助',
    price: '¥88',
    period: '一次付',
    desc: '适合完全不想动手的用户',
    features: [
      'TeamViewer/AnyDesk 远程',
      '全自动安装配置',
      'API 调通 + 测试',
      '基础使用教学',
      '7 天售后答疑',
    ],
    highlight: false,
  },
  {
    name: 'API 月付',
    price: '¥19.9',
    period: '/月',
    desc: '长期使用的最佳选择',
    features: [
      'DeepSeek API 持续可用',
      '每月自动续期',
      '用量充足',
      '到期提醒',
      '随时可停',
    ],
    highlight: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-4">价格方案</h2>
          <p className="text-text">选择一个适合你的方案，付款后联系我即可开始</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl p-6 flex flex-col border transition-all hover:scale-[1.02] ${
                plan.highlight
                  ? 'bg-primary/10 border-primary/40 shadow-lg shadow-primary/10'
                  : 'bg-surface-2 border-white/5 hover:border-white/20'
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-medium px-3 py-1 rounded-full">
                  推荐
                </span>
              )}
              <h3 className="text-text-heading font-semibold text-lg mb-1">{plan.name}</h3>
              <p className="text-text text-sm mb-4">{plan.desc}</p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-text-heading">{plan.price}</span>
                <span className="text-text ml-1">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-text">
                    <svg className="w-4 h-4 mt-0.5 text-primary-light shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#payment"
                className={`block text-center py-3 rounded-xl font-medium transition-all ${
                  plan.highlight
                    ? 'bg-primary hover:bg-primary-dark text-white'
                    : 'bg-surface-3 hover:bg-surface-3/80 text-text-heading border border-white/10'
                }`}
              >
                选择方案
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
