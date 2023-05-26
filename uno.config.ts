import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      cdn: 'https://esm.sh/',
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'Inter',
        serif: 'Open Sans',
        mono: 'JetBrains Mono',
        arvo: {
          name: 'Arvo',
          weights: [400, 700],
        },
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
