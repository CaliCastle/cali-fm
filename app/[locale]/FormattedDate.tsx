'use client'

import { ComponentProps } from '@zolplay/react'
import { useLocale } from 'next-intl'
import { useMemo } from 'react'

export function FormattedDate({
  date,
  ...props
}: ComponentProps<{ date: Date }>) {
  const locale = useLocale()
  const dateFormatter = useMemo(
    () =>
      new Intl.DateTimeFormat(locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
    [locale]
  )

  return (
    <time dateTime={date.toISOString()} {...props}>
      {dateFormatter.format(date)}
    </time>
  )
}
