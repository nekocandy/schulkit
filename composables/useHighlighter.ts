import { getHighlighter } from 'shiki-es'

export async function useHighlighter() {
  const highlighter = await getHighlighter({
    theme: 'vitesse-dark',
  })

  return highlighter
}
