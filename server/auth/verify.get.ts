export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const token = query.token as string
  const tokenId = query.tokenId as string

  if (!token || !tokenId) {
    throw createError({
      statusCode: 400,
      message: 'Missing token or tokenId',
    })
  }

  const app = useRealmApp()
  try {
    await app.emailPasswordAuth.confirmUser({ token, tokenId })

    sendRedirect(event, '/dashboard')
  }
  catch (error: any) {
    throw createError({
      statusCode: 500,
      message: error.message,
    })
  }
})
