export default function Head() {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>WhiskyPick</title>
      <meta name="description" content="Community whisky ratings and reviews" />
      {/* Set dark mode class before first paint to avoid flash */}
      <script dangerouslySetInnerHTML={{
        __html: `(function(){var t=localStorage.getItem('theme');if(t==='dark'||(t===null&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}})()`,
      }} />
    </>
  )
}
