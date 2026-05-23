import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <footer className="py-12 px-4 border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-lg font-bold text-text-heading mb-2">联系我</h2>
          <p className="text-text text-sm mb-6">安装遇到问题？随时联系</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <span className="flex items-center gap-2 px-4 py-2 bg-surface-2 border border-white/5 rounded-lg text-text text-sm">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              微信: YunGod4601
            </span>
          </div>
          <p className="text-xs text-text/50">
            &copy; {new Date().getFullYear()} AI Tools Guide. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
