import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1>Welcome to my Next.js 14 SSR App</h1>
      <Link href="/ssr-example">
        Go to SSR Example
      </Link>
    </main>
  )
}