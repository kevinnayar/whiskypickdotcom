export type WhiskyType = 'Bourbon' | 'Irish' | 'Rye' | 'Scotch' | 'Whisky'

export type Whisky = {
  age: number
  brand: string
  date: number
  id: string
  name: string
  origin: string
  price: number
  type: WhiskyType
  url: string
  rating: number
  ratings: Record<string, number>
}

export type WhiskyMap = Record<string, Whisky>
export type UserMap = Record<string, string>

export type SortKey = 'score' | 'age' | 'name' | 'price'
