import { useState, useEffect } from 'react'
import { usePageContext } from 'vike-react/usePageContext'
import { Icon } from './Icon'

function ThemeIcon() {
  const [theme, setTheme] = useState(() => {
    if (typeof document === 'undefined') return 'light'
    return document.documentElement.getAttribute('data-theme') || 'light'
  })
  useEffect(() => {
    const obs = new MutationObserver(() =>
      setTheme(document.documentElement.getAttribute('data-theme') || 'light')
    )
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
    return () => obs.disconnect()
  }, [])
  return <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={16} />
}

export function NavBar() {
  const { urlPathname } = usePageContext()
  const isHome = urlPathname === '/'
  const isWhiskies = urlPathname.startsWith('/whisk')
  const isUsers = urlPathname.startsWith('/user')

  const toggleTheme = () => {
    const root = document.documentElement
    const cur = root.getAttribute('data-theme') || 'light'
    const next = cur === 'light' ? 'dark' : 'light'
    root.setAttribute('data-theme', next)
    try { localStorage.setItem('wp.theme', next) } catch {}
  }

  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a className="nav-logo" href="/">
          Whisky<em>Pick</em><span className="dot">◆</span>
        </a>
        <div className="nav-links">
          <a className={'nav-link' + (isHome ? ' active' : '')} href="/">
            <Icon name="home" size={14} /> Home
          </a>
          <a className={'nav-link' + (isWhiskies ? ' active' : '')} href="/whiskies">
            <Icon name="grid" size={14} /> Directory
          </a>
          <a className={'nav-link' + (isUsers ? ' active' : '')} href="/users">
            <Icon name="users" size={14} /> Tasters
          </a>
          <button className="nav-icon-btn" onClick={toggleTheme} aria-label="Toggle theme" style={{ marginLeft: 8 }}>
            <ThemeIcon />
          </button>
        </div>
      </div>
    </nav>
  )
}
