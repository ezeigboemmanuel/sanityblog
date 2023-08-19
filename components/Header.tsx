import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <h1 className="text-4xl bg-slate-500 text-white p-7"><Link href="/">My Blog</Link></h1>
  )
}

export default Header