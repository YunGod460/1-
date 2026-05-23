import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: '什么是 Claude Code？',
    a: 'Claude Code 是 Anthropic（Claude 的公司）官方推出的 AI 编程工具，直接集成在 VS Code 里，可以帮你写代码、改 bug、重构、解释代码等。相当于在编辑器里请了一个 AI 程序员。',
  },
  {
    q: '买基础安装包后我需要自己做什么？',
    a: '你会收到安装包（Node.js + Git + Claude Code）和图文教程，按教程一步步操作即可。如果遇到问题可以微信问我。',
  },
  {
    q: '和网上免费教程有什么区别？',
    a: '网上教程最大的问题是：① 版本过时装不上 ② 遇到问题没人问 ③ API 配置步骤缺失。我给你的是一整套验证过的方案，遇到问题直接找我解决，省时间。',
  },
  {
    q: '配置版和远程版有什么区别？',
    a: '配置版发的是带自动配置脚本的安装包，你运行脚本就能自动配好；远程版是我直接远程到你的电脑帮你全装好，适合不想折腾的用户。',
  },
  {
    q: 'API 月付每月 19.9 能用多少？',
    a: '日常编程完全够用，写代码、改 bug、重构都没问题。如果用量特别大会提前通知。不做限制是因为大多数用户用不完。',
  },
  {
    q: '能先试用再付款吗？',
    a: '目前没有试用。但基础安装包只要 9.9 元，可以先试试，如果装不上或用不了我全额退款。',
  },
  {
    q: '售后支持多久？',
    a: '基础版和配置版提供终身安装指导（只要装不上随时找我）。远程版额外提供 7 天售后答疑。',
  },
  {
    q: '退款政策？',
    a: '如果因为我的原因导致无法正常使用（如 API 用不了、安装后无法运行），全额退款。如果是个人原因不需要了，发货前可退。',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-4">常见问题</h2>
          <p className="text-text">你想问的可能已经在这里了</p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
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
    </section>
  )
}
