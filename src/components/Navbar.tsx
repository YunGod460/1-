import { useState, useEffect } from 'react'

const navItems = [
  { label: '服务介绍', href: '#intro' },
  { label: '价格方案', href: '#pricing' },
  { label: '购买方式', href: '#payment' },
  { label: '服务流程', href: '#how-it-works' },
  { label: '常见问题', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-surface/80 backdrop-blur-lg border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="text-text-heading font-bold text-lg tracking-tight">
          Claude<span className="text-primary-light">Code</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-text hover:text-text-heading transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
