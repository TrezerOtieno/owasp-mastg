import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { HiddenLove } from '@/components/hidden-love'

export function Finale() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-charcoal">
      <Image
        src="/images/couple.jpg"
        alt="The two of us, cheek to cheek and smiling"
        fill
        sizes="100vw"
        className="object-cover object-[50%_28%]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/45 to-charcoal/60" />
      <Reveal className="relative z-10 px-6 text-center text-ivory">
        <h2 className="text-balance font-serif text-4xl font-light leading-tight md:text-6xl">
          Happy birthday
          <br />
          to my man <span className="text-rose">&#9829;</span>
        </h2>
        <p className="mx-auto mt-8 max-w-md text-pretty font-serif text-lg font-light italic leading-relaxed text-ivory/85">
          here&apos;s to thirty, and to every ordinary, extraordinary year after.
        </p>
        <p className="mx-auto mt-10 max-w-sm text-pretty font-serif text-base font-light italic text-ivory/70">
          Chapter 30 &mdash; and we&apos;re only getting started.
        </p>
        <p className="mt-16 font-sans text-[0.7rem] tracking-[0.5em] text-ivory/55">THE END</p>
        <p className="mt-6 font-serif text-2xl font-light">love, Trezer</p>
        <HiddenLove />
      </Reveal>
    </section>
  )
}
