'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeSwitcher() {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const toggleTheme = () => {
    switch (theme) {
      case 'system':
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
        break
      case 'dark':
      case 'light':
        setTheme('system')
        break
    }
  }

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <button
      type="button"
      className="rounded-lg bg-stone-50 p-1.5 shadow-xl dark:bg-neutral-900"
      onClick={toggleTheme}
    >
      {theme === 'system' && <SystemThemeIcon />}
      {theme === 'dark' && <DarkThemeIcon />}
      {theme === 'light' && <LightThemeIcon />}
    </button>
  )
}

function SystemThemeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M20.83 7.32a10.11 10.11 0 0 0-3.44-3.73A10 10 0 1 0 12 22h.29a10 10 0 0 0 8.54-14.68ZM11 19.93a8 8 0 0 1 0-15.86Zm2-15.86a8.07 8.07 0 0 1 2.49.74L13 9.12Zm0 9l4.17-7.17a8.14 8.14 0 0 1 1.58 1.83L13 17.69Zm1.15 6.58L19.74 10a8.16 8.16 0 0 1 .26 2a8 8 0 0 1-5.85 7.7Z"
      ></path>
    </svg>
  )
}

function DarkThemeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 21q-3.775 0-6.388-2.613T3 12q0-3.45 2.25-5.988T11 3.05q.625-.075.975.45t-.025 1.1q-.425.65-.638 1.375T11.1 7.5q0 2.25 1.575 3.825T16.5 12.9q.775 0 1.538-.225t1.362-.625q.525-.35 1.075-.037t.475.987q-.35 3.45-2.937 5.725T12 21Z"
      ></path>
    </svg>
  )
}

function LightThemeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 4q-.425 0-.713-.288T11 3V2q0-.425.288-.713T12 1q.425 0 .713.288T13 2v1q0 .425-.288.713T12 4Zm0 19q-.425 0-.713-.288T11 22v-1q0-.425.288-.713T12 20q.425 0 .713.288T13 21v1q0 .425-.288.713T12 23Zm9-10q-.425 0-.713-.288T20 12q0-.425.288-.713T21 11h1q.425 0 .713.288T23 12q0 .425-.288.713T22 13h-1ZM2 13q-.425 0-.713-.288T1 12q0-.425.288-.713T2 11h1q.425 0 .713.288T4 12q0 .425-.288.713T3 13H2Zm16-7q-.275-.275-.275-.675T18 4.6l.35-.375q.275-.3.7-.3t.725.3q.3.3.313.738t-.313.712l-.375.35q-.275.275-.687.275T18 6ZM4.225 19.775q-.3-.3-.312-.737t.312-.713l.375-.35q.275-.275.688-.275T6 18q.275.275.275.688T6 19.4l-.35.375q-.275.3-.7.3t-.725-.3Zm14.1 0l-.35-.375q-.275-.275-.275-.687T18 18q.275-.275.688-.275T19.4 18l.375.35q.3.275.3.7t-.3.725q-.3.3-.737.313t-.713-.313ZM4.6 6l-.375-.35q-.3-.275-.3-.7t.3-.725q.3-.3.738-.313t.712.313l.35.375q.275.275.275.688T6 6q-.275.275-.675.275T4.6 6ZM12 18q-2.5 0-4.25-1.75T6 12q0-2.5 1.75-4.25T12 6q2.5 0 4.25 1.75T18 12q0 2.5-1.75 4.25T12 18Zm0-2q1.675 0 2.838-1.163T16 12q0-1.675-1.163-2.838T12 8q-1.675 0-2.838 1.163T8 12q0 1.675 1.163 2.838T12 16Zm0-4Z"
      ></path>
    </svg>
  )
}
