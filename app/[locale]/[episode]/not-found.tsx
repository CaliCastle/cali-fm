import { Container } from '~/app/[locale]/Container'

export default function NotFoundPage() {
  return (
    <div className="pb-12 pt-16 sm:pb-4 lg:pt-12">
      <Container>
        <h1 className="text-2xl font-bold leading-7 text-stone-900 dark:text-neutral-100">
          404
        </h1>
      </Container>
    </div>
  )
}
