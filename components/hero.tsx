import Image from 'next/image'
import { Reveal } from '@/components/reveal'

export function Hero() {
  return (
    <>
      <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-charcoal">
        <Image
          src="/images/suit.jpg"
          alt="My love, dressed sharp against a bright sky"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-charcoal/35 md:from-charcoal/70 md:via-charcoal/5 md:to-charcoal/10" />
        <div className="relative z-10 mx-auto w-full max-w-3xl px-6 pb-16 text-center md:mx-0 md:max-w-xl md:pb-24 md:pl-12 md:text-left lg:pl-20">
          <p className="font-sans text-[0.7rem] tracking-[0.5em] text-ivory/75">16 &middot; 09</p>
          <h1 className="mt-5 text-balance font-serif text-5xl font-light leading-[1.02] text-ivory md:text-7xl">
            Happy 30th,
            <br />
            <span className="italic">my love</span>{' '}
            <span className="align-middle text-rose">&#9829;</span>
          </h1>
          <div className="mx-auto mt-10 flex flex-col items-center gap-2 text-ivory/70 md:mx-0 md:items-start">
            <span className="font-sans text-[0.6rem] tracking-[0.45em]">SCROLL</span>
            <span className="h-10 w-px bg-ivory/40" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-6 py-28 text-center md:py-40">
        <Reveal className="mb-10 md:mb-12">
          <p className="font-serif text-lg font-light italic text-brown md:text-xl">
            a little something for my favourite person&hellip;
          </p>
        </Reveal>
        <Reveal>
          <p className="text-pretty font-serif text-2xl font-light leading-relaxed text-charcoal md:text-[2rem] md:leading-[1.5]">
            Today isn&apos;t just about celebrating another year of you. It&apos;s about celebrating
            the person you&apos;ve become, the memories you&apos;ve made, and the person I am lucky
            enough to know and love.
          </p>
        </Reveal>
        <Reveal className="mt-14">
          <p className="font-serif text-3xl font-light italic text-wine md:text-4xl">
            Welcome to Chapter 30. <span className="text-rose">&#9829;</span>
          </p>
        </Reveal>
      </section>
    </>
  )
}
