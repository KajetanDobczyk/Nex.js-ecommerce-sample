export type Color = {
  black: string
  white: string
  grey: Record<number, string>
  text: string
}

export type FontSize =
  | 'xxs'
  | 'xs'
  | 'sm'
  | 'base'
  | 'md'
  | 'xl'
  | 'xxl'
  | 'xxxl'

export type Font = {
  size: Record<FontSize, string>
  weight: {
    light: number
    medium: number
  }
  family: {
    sans: string
  }
}
