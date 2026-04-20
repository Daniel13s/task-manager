import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    projects: [
      {
        test: {
          name: 'unit',
          include: ['./src/test/unit/*.test.ts'],
        },
      },
      {
        test: {
          name: 'int',
          include: ['./src/test/int/*.test.ts'],
        },
      },
    ],
  },
})