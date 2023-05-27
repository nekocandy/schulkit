import { createEnv } from '@t3-oss/env-nuxt'
import { z } from 'zod'

export const env = createEnv({
  server: { },
  client: {
    NUXT_PUBLIC_REALM_APP_ID: z.string().nonempty(),
  },
})
