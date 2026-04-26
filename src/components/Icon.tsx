type IconName = 'home' | 'grid' | 'users' | 'sun' | 'moon' | 'arrow' | 'search'

export function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  const common = {
    width: size, height: size, viewBox: '0 0 24 24', fill: 'none',
    stroke: 'currentColor', strokeWidth: 1.5,
    strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const,
  }
  if (name === 'home')   return <svg {...common}><path d="M3 11.5 12 4l9 7.5"/><path d="M5 10v10h14V10"/></svg>
  if (name === 'grid')   return <svg {...common}><rect x="3.5" y="3.5" width="7" height="7"/><rect x="13.5" y="3.5" width="7" height="7"/><rect x="3.5" y="13.5" width="7" height="7"/><rect x="13.5" y="13.5" width="7" height="7"/></svg>
  if (name === 'users')  return <svg {...common}><circle cx="9" cy="8" r="3.5"/><path d="M3 20c0-3.5 2.7-6 6-6s6 2.5 6 6"/><circle cx="17" cy="9" r="2.5"/><path d="M15 14.5c3 0 6 2 6 5.5"/></svg>
  if (name === 'sun')    return <svg {...common}><circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4"/></svg>
  if (name === 'moon')   return <svg {...common}><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z"/></svg>
  if (name === 'arrow')  return <svg {...common}><path d="M5 12h14M13 6l6 6-6 6"/></svg>
  if (name === 'search') return <svg {...common}><circle cx="11" cy="11" r="6.5"/><path d="m20 20-4.2-4.2"/></svg>
  return null
}
