import { Font, Color } from './interfaces'

export const color: Color = {
  black: '#000000',
  white: '#ffffff',
  grey: {
    400: '#888',
    800: '#ebebeb',
  },
  text: '#333',
}

export const font: Font = {
  size: {
    xxs: '0.6875rem',
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    md: '1.25rem',
    xl: '1.375rem',
    xxl: '1.5rem',
    xxxl: '1.625rem',
  },
  weight: {
    light: 300,
    medium: 500,
  },
  family: {
    sans: 'Montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
  },
}

const mediaQ = (size: number): string =>
  `@media only screen and (min-width: ${size}px)`

type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

export const breakpoints: Record<Breakpoint, number> = {
  xs: 381,
  sm: 577,
  md: 769,
  lg: 993,
  xl: 1201,
  xxl: 1441,
}

export const media = Object.keys(breakpoints).reduce(
  (acc, breakpoint) => ({
    ...acc,
    [breakpoint]: mediaQ(breakpoints[breakpoint as Breakpoint]),
  }),
  {} as Record<Breakpoint, string>,
)
