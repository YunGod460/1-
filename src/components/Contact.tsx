import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <footer className="py-16 px-4 border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-text-heading mb-4">联系我</h2>
          <p className="text-text mb-8">
            付款后或遇到问题，通过以下方式联系我
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <a
              href="https://go.2shou.com/go/user-center?id=xxx"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-surface-2 border border-white/5 rounded-xl hover:border-primary/30 transition-all text-text hover:text-text-heading"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              闲鱼联系
            </a>
            <div className="flex items-center gap-3 px-6 py-3 bg-surface-2 border border-white/5 rounded-xl text-text">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
              微信: YunGod4601
            </div>
          </div>

          <div className="bg-surface-2 border border-primary/10 rounded-xl p-6 inline-block mx-auto">
            <p className="text-sm text-text">
              <span className="text-primary-light font-medium">售后承诺：</span>
              购买任意方案均享受终身安装指导，装不上全额退款
            </p>
          </div>

          <p className="text-xs text-text/50 mt-8">
            &copy; {new Date().getFullYear()} Claude Code 部署服务. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
