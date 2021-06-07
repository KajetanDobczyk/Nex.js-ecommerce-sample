import { setupServer } from 'msw/node'

import { handlers } from 'src/api/tests-handlers'

export const server = setupServer(...handlers)
