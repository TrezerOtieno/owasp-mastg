'use client'

import { useState } from 'react'

export function HiddenLove() {
  const [shown, setShown] = useState(false)
  return (
    <>
      <button
        type="button"
        onClick={() => setShown(true)}
        aria-label="a little secret"
        className="mt-1 font-serif text-lg font-light italic text-ivory/75 outline-none transition hover:text-ivory"
      >
        otek <span className="text-rose">&#9829;</span>
      </button>
      {shown && (
        <p className="mx-auto mt-8 max-w-xs animate-[fadeUp_0.9s_ease] text-pretty font-serif text-base font-light italic leading-relaxed text-ivory/80">
          Okay&hellip; one last thing. I love you. A lot. 🤍
        </p>
      )}
    </>
  )
}
