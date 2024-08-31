import React from 'react'

async function getData() {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function SSRPage() {
  const data = await getData()

  return (
    <div>
      <h1>SSR Example</h1>
      <p>Next.js GitHub Stars: {data.stargazers_count}</p>
    </div>
  )
}