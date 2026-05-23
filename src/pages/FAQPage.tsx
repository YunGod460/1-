import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: '这些工具国内能用吗？',
    a: '大部分工具国内可以直接使用。部分需要配置国内 API 中转（如 Claude Code），我在每个工具的安装指南里都写了针对国内的配置方法。',
  },
  {
    q: '需要科学上网吗？',
    a: '不需要。所有工具的安装和配置都不需要科学上网，我会用国内可用的 API 中转方案。',
  },
  {
    q: '工具收费吗？',
    a: '工具本身大部分是免费的（如 Ollama、Dify、Coze）。部分工具需要 API 费用（如 DeepSeek API）或订阅费（如 Copilot）。我的服务只收安装配置费。',
  },
  {
    q: '装这些工具需要什么基础？',
    a: '会基本的电脑操作就行。我会提供详细的图文教程，遇到问题可以找我远程协助。',
  },
  {
    q: '你们提供哪些安装服务？',
    a: '提供 Claude Code 完整安装配置服务，包括环境安装、API 配置、VS Code 集成。其他工具的安装指导包含在免费教程中。',
  },
  {
    q: 'API 月付是什么？',
    a: '如果你不想自己注册 DeepSeek 账号和充值，我提供 DeepSeek API 月付服务，每月 19.9 元，日常编程完全够用。',
  },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-text-heading mb-4">常见问题</h1>
          <p className="text-text">关于工具和服务的常见疑问</p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-surface-2 border border-white/5 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left text-text-heading font-medium hover:bg-white/[0.02] transition-colors"
              >
                {faq.q}
                <svg
                  className={`w-4 h-4 shrink-0 ml-4 text-text transition-transform duration-200 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-text text-sm leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
