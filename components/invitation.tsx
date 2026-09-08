'use client'

import { useState } from 'react'
import { Reveal } from '@/components/reveal'

const MAP_QUERY = 'The Wine Shop Loresho Nairobi'
const mapEmbed = `https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&z=15&output=embed`
const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_QUERY)}`

export function Invitation() {
  const [opened, setOpened] = useState(false)
  const [confirmed, setConfirmed] = useState(false)

  return (
    <section className="bg-wine text-ivory">
      <div className="mx-auto flex min-h-[85svh] max-w-xl flex-col items-center justify-center px-6 py-28 text-center md:py-40">
        {!opened && (
          <Reveal>
            <p className="font-serif text-xl font-light italic text-ivory/80 md:text-2xl">
              one more thing&hellip;
            </p>
            <button
              type="button"
              onClick={() => setOpened(true)}
              className="group mt-12 inline-flex flex-col items-center gap-5 outline-none"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-ivory/40 text-2xl transition duration-300 group-hover:scale-110 group-hover:border-ivory">
                <span className="text-rose">&#9829;</span>
              </span>
              <span className="font-sans text-[0.7rem] tracking-[0.45em] text-ivory/70 transition group-hover:text-ivory">
                OPEN THE INVITATION
              </span>
            </button>
          </Reveal>
        )}

        {opened && !confirmed && (
          <div className="w-full animate-[fadeUp_0.9s_ease]">
            <p className="font-sans text-[0.7rem] tracking-[0.5em] text-ivory/70">
              YOU&apos;RE INVITED
            </p>
            <h2 className="mt-6 font-serif text-4xl font-light md:text-5xl">a little date</h2>
            <div className="mt-10 space-y-1">
              <p className="font-serif text-2xl font-light md:text-3xl">Friday &middot; 16 September</p>
              <p className="font-serif text-xl font-light text-ivory/85">The Wine Shop &mdash; Loresho</p>
            </div>
            <div className="mt-10 overflow-hidden rounded-sm border border-ivory/20 shadow-lg">
              <iframe
                title="The Wine Shop, Loresho on the map"
                src={mapEmbed}
                className="h-56 w-full md:h-64"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block font-sans text-[0.7rem] tracking-[0.3em] text-ivory/70 underline underline-offset-4 transition hover:text-ivory"
            >
              OPEN IN MAPS
            </a>
            <div className="mt-12">
              <button
                type="button"
                onClick={() => setConfirmed(true)}
                className="inline-flex items-center gap-2 rounded-full bg-ivory px-8 py-3 font-sans text-xs tracking-[0.3em] text-wine transition hover:bg-ivory/90"
              >
                IT&apos;S A DATE <span className="text-rose">&#9829;</span>
              </button>
            </div>
          </div>
        )}

        {confirmed && (
          <div className="animate-[fadeUp_0.9s_ease]">
            <p className="text-5xl text-rose md:text-6xl">&#9829;</p>
            <h2 className="mx-auto mt-6 max-w-md text-balance font-serif text-3xl font-light leading-tight md:text-4xl">
              Yay! Looking forward to seeing you Mr Charles 🤍
            </h2>
          </div>
        )}
      </div>
    </section>
  )
}
