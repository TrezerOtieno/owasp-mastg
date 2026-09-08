'use client'

import { useState } from 'react'
import { Reveal } from '@/components/reveal'

const items: string[] = [
  "You're incredibly smart.",
  'You work so hard.',
  "You're very intentional.",
  "You're ambitious.",
  'You never stop chasing better.',
  'You care for the people you love.',
  "You're so generous.",
  "You're humble.",
  'You have such a loving heart.',
  "You're clean and organized.",
  'You have really good style.',
  "You're honestly so my type.",
  "You're tall, cute and handsome. 😂",
  'You always know how to cheer me up.',
  'You hold me through my bad days.',
  'You own your mistakes.',
  'You actually try to change.',
  'You appreciate me.',
  'You reassure me when I need it.',
  'You make me laugh so easily.',
  'I love your sense of humour.',
  'I love your softer side.',
  'I love your serious face. 😂',
  'I love your little stubborn side.',
  'I love that little “let me remind you who\'s the man” energy. 😂',
  'You make my ordinary days better.',
  'You keep going, even when things get hard.',
  'You make me feel loved in your own way.',
  "I love the man you're becoming.",
  'And honestly… I just really, really like you.',
]

function Card({ n, text }: { n: number; text: string }) {
  const [open, setOpen] = useState(false)
  return (
    <button
      type="button"
      onClick={() => setOpen((o) => !o)}
      aria-expanded={open}
      className="group relative flex min-h-[8.5rem] w-full flex-col items-center justify-center rounded-sm border border-border bg-cream px-4 py-6 text-center outline-none transition duration-300 hover:border-wine/40 hover:shadow-sm md:min-h-[10rem]"
    >
      {open ? (
        <p className="animate-[fadeUp_0.5s_ease] text-pretty font-serif text-base font-light leading-snug text-charcoal md:text-lg">
          {text}
        </p>
      ) : (
        <>
          <span className="font-serif text-3xl font-light text-wine md:text-4xl">
            {String(n).padStart(2, '0')}
          </span>
          <span className="mt-3 font-sans text-[0.55rem] tracking-[0.35em] text-brown/50 transition group-hover:text-brown">
            TAP
          </span>
        </>
      )}
    </button>
  )
}

export function ThirtyThings() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-28 md:py-40">
      <Reveal className="mb-14 text-center md:mb-20">
        <h2 className="text-balance font-serif text-3xl font-light leading-tight tracking-tight text-wine md:text-5xl">
          I don&apos;t say these enough,
          <br className="hidden md:block" /> so I&apos;m leaving them here
        </h2>
        <p className="mt-5 font-sans text-[0.7rem] tracking-[0.4em] text-brown/50">TAP EACH ONE</p>
      </Reveal>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        {items.map((text, i) => (
          <Reveal key={i} delay={(i % 3) * 60}>
            <Card n={i + 1} text={text} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
