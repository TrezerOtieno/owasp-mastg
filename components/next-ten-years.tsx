import { Reveal } from '@/components/reveal'

const paragraphs = [
  'I hope we keep choosing each other, keep growing and keep becoming better together.',
  'I hope for a love that feels real, steady and kind. For endless peace, happiness and good days, even in the ordinary ones.',
  "I hope we get to watch each other's dreams come true, build something beautiful slowly and properly, have lots of dates, random adventures and way too many laughs.",
  'I hope we grow into really good partners, build a beautiful little life and, one day, a beautiful little family too.',
  'Mostly, I just hope we keep having fun, keep loving each other and keep finding our way back to each other. 🤍',
]

export function NextTenYears() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-28 md:py-40">
      <Reveal className="mb-12 text-center md:mb-16">
        <p className="font-sans text-xs tracking-[0.4em] text-brown/60">FOR US</p>
        <h2 className="mt-4 font-serif text-3xl font-light text-wine md:text-4xl">
          A little wish for us
        </h2>
      </Reveal>

      <Reveal className="space-y-6">
        {paragraphs.map((p, i) => (
          <p
            key={i}
            className="text-pretty font-serif text-lg font-light leading-relaxed text-charcoal md:text-xl"
          >
            {p}
          </p>
        ))}
      </Reveal>
    </section>
  )
}
