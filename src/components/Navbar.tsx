import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isHome = location.pathname === '/'

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-surface/80 backdrop-blur-lg border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-text-heading font-bold text-lg tracking-tight">
          AI<span className="text-primary-light">Tools</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm">
          <Link to="/" className={`transition-colors ${isHome ? 'text-primary-light' : 'text-text hover:text-text-heading'}`}>
            首页
          </Link>
          {isHome ? (
            <a href="#service-promo" className="text-text hover:text-text-heading transition-colors">
              安装服务
            </a>
          ) : (
            <Link to="/#service-promo" className="text-text hover:text-text-heading transition-colors">
              安装服务
            </Link>
          )}
          <Link to="/faq" className="text-text hover:text-text-heading transition-colors">
            常见问题
          </Link>
        </div>
      </div>
    </nav>
  )
}
