const WHISKY_IMAGE_OVERRIDES: Record<string, string> = {
  'green-spot-chteau-loville-barton': 'whisky_green-spot-chateau-leoville-barton.jpg',
  'sagamore-spirit-rye-whiskey-cognac-finish': 'whisky_sagamore-spirit-cognac-finish.png',
}

const WHISKY_IMAGE_EXTS: Record<string, 'jpg' | 'png'> = {
  'akashi-single-malt-whisky': 'png',
  'amrut-indian-single-malt-whisky-cask-strength': 'png',
  'angels-envy-rye': 'jpg',
  'balcones-1-texas-single-malt': 'png',
  'balcones-blue-corn-bourbon': 'jpg',
  'balvenie-portwood-21-year-old-single-malt': 'png',
  'belle-meade-bourbon-sherry-cask-finish': 'jpg',
  'belle-meade-sour-mash-whiskey': 'jpg',
  'blantons-original-single-barrel': 'jpg',
  'blood-oath-pact-no-2': 'png',
  'bookers-true-barrel-bourbon': 'jpg',
  'buffalo-trace-single-oak-project': 'jpg',
  'bushmills-16-year-old-single-malt': 'png',
  'caol-ila-islay-single-malt': 'png',
  'colonel-eh-taylor-single-barrel': 'png',
  'colonel-eh-taylor-straight-rye': 'jpg',
  'cooley-13-year-old-single-malt': 'jpg',
  'crown-royal-xr-extra-rare': 'jpg',
  'dalmore-the-15': 'jpg',
  'glendronach-allardice-aged-18-years': 'jpg',
  'glenfiddich-18-years-old': 'png',
  'glenlivet-18-year-old': 'jpg',
  'grangestone-21-year-old-single-malt': 'jpg',
  'hibiki-17-years-old': 'png',
  'high-west-rendezvous-rye': 'jpg',
  'hudson-maple-cask-rye-whiskey': 'png',
  'jameson-18-year-old-limited-reserve': 'png',
  'jeffersons-reserve-groth-cask-finish': 'png',
  'jeffersons-reserve-very-old': 'jpg',
  'joseph-magnus-straight-bourbon': 'jpg',
  'jura-16-year-old-diurachs-own': 'jpg',
  'kavalan-solist-single-cask-strength': 'jpg',
  'kilchoman-loch-gorm': 'jpg',
  'knappogue-castle-14-year-old-single-malt': 'png',
  'knappogue-castle-17-year-old-single-malt': 'jpg',
  'knob-creek-2001-limited-release': 'png',
  'lagavulin-16-years-old': 'png',
  'laphroaig-18-year-old': 'jpg',
  'linkwood-distillery-single-malt': 'jpg',
  'lock-stock-barrel-13-year-straight-rye-whiskey': 'png',
  'macallan-18-years-old': 'png',
  'mars-whisky-komagatake-nature-of-shinshu-rindo': 'png',
  'michters-us-1-single-barrel-straight-rye': 'png',
  'nikka-coffey-grain-whisky': 'png',
  'nikka-miyagikyo-single-malt': 'png',
  'oban-14-single-malt-scotch': 'jpg',
  'old-potrero-single-malt-straight-rye-whiskey': 'png',
  'pendelton-directors-reserve': 'jpg',
  'pikesville-straight-rye-whiskey': 'jpg',
  'powers-johns-lane': 'jpg',
  'prichards-single-malt-whiskey': 'jpg',
  'ranger-creek-rimfire-texas-single-malt': 'png',
  'red-breast-single-pot-still-irish-whiskey': 'jpg',
  'redemption-7-year-old-barrel-proof-straight-rye-whiskey': 'jpg',
  'redemption-rye-rum-cask-finish': 'jpg',
  'rogue-oregon-single-malt-whiskey': 'jpg',
  'springbank-15-year-old': 'png',
  'springbank-vintage-single-cask': 'png',
  'talisker-18-year-old': 'jpg',
  'teeling-single-malt': 'jpg',
  'the-irishman-cask-strength-limited-release': 'jpg',
  'tipperary-knockmealdowns': 'jpg',
  'tullamore-dew-18-year-old-single-malt': 'jpg',
  'tyrconnell-single-malt-irish-whiskey': 'jpg',
  'walking-stick-bourbon': 'jpg',
  'whistlepig-100-100': 'jpg',
  'wild-turkey-diamond-anniversary': 'jpg',
  'wild-turkey-masters-keep-decades': 'jpg',
  'willet-family-estate-bottled-rye': 'jpg',
  'willett-noahs-mill': 'jpg',
  'yellow-spot-single-pot-still-irish-whiskey': 'png',
}

export function getWhiskyImage(id: string): string {
  if (WHISKY_IMAGE_OVERRIDES[id]) {
    return `/images/whiskies/${WHISKY_IMAGE_OVERRIDES[id]}`
  }
  const ext = WHISKY_IMAGE_EXTS[id] ?? 'jpg'
  return `/images/whiskies/whisky_${id}.${ext}`
}

export function getUserImage(id: string): string {
  return `/images/users/${id}.jpg`
}

export const NO_AVATAR = '/images/users/no-avatar.jpg'
