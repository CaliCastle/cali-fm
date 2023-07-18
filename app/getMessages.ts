export async function getMessages(locale: string) {
  return (await import(`../messages/${locale}.json`)).default
}
