import { motion } from 'framer-motion'

const paymentMethods = [
  {
    name: '微信支付',
    id: 'wechat',
    color: 'bg-[#07c160]',
    qrText: '微信扫一扫付款',
  },
  {
    name: '支付宝',
    id: 'alipay',
    color: 'bg-[#1677ff]',
    qrText: '支付宝扫一扫付款',
  },
]

export default function Payment() {
  return (
    <section id="payment" className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-4">购买方式</h2>
          <p className="text-text">扫码付款后，截图发给我，立即发货</p>
        </motion.div>

        {/* QR Code Placeholders */}
        <div className="grid sm:grid-cols-2 gap-6 mb-8">
          {paymentMethods.map((method, i) => (
            <motion.div
              key={method.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-surface-2 border border-white/5 rounded-2xl p-8 text-center"
            >
              <div className={`inline-flex items-center gap-2 ${method.color} text-white text-sm font-medium px-3 py-1 rounded-full mb-6`}>
                {method.name}
              </div>
              <div className="w-48 h-48 mx-auto bg-surface-3 rounded-xl flex items-center justify-center mb-4 border border-white/5">
                <div className="text-center text-text">
                  <svg className="w-12 h-12 mx-auto mb-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                  </svg>
                  <span className="text-xs">此处放收款码</span>
                </div>
              </div>
              <p className="text-text text-sm">{method.qrText}</p>
            </motion.div>
          ))}
        </div>

        {/* Payment Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-surface-2 border border-white/5 rounded-xl p-6"
        >
          <h3 className="text-text-heading font-medium mb-3">付款后流程：</h3>
          <ol className="space-y-2 text-sm text-text">
            <li className="flex items-start gap-2">
              <span className="text-primary-light font-medium shrink-0">1.</span>
              选择上方任意方式付款（备注闲鱼号）
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-light font-medium shrink-0">2.</span>
              截图付款凭证
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-light font-medium shrink-0">3.</span>
              在闲鱼上发截图给我，或通过下方联系方式发送
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-light font-medium shrink-0">4.</span>
              确认收款后立即发货 / 安排远程
            </li>
          </ol>
        </motion.div>
      </div>
    </section>
  )
}
