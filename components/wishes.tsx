import { Reveal } from '@/components/reveal'

const wishes = [
  'I wish you a life full of beautiful surprises.',
  'I wish you success, abundance and all the wins you deserve.',
  'I wish you good health, happiness and plenty of beautiful days. 🤍',
  'I wish you good people who genuinely love you and always have your back.',
  'I wish you more places to see, things to try and memories to make.',
  'I wish you endless reasons to laugh and enjoy the little things.',
  'I wish you the courage to go after everything you want.',
  'I wish you a life that makes you genuinely proud and happy.',
  'I wish you good luck, perfect timing and a little magic along the way.',
  'And for us, I wish for a kind, peaceful love, a happy little family and a beautiful life we get to build together. 🤍',
]

export function Wishes() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-28 md:py-40">
      <Reveal className="mb-14 text-center md:mb-20">
        <h2 className="text-balance font-serif text-3xl font-light leading-tight text-wine md:text-4xl">
          my wishes for you in this new chapter
        </h2>
      </Reveal>

      <ul className="flex flex-col gap-8 md:gap-10">
        {wishes.map((wish, i) => (
          <li key={i}>
            <Reveal className="flex items-baseline gap-5">
              <span className="font-sans text-[0.65rem] tracking-[0.35em] text-brown/50">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="text-pretty font-serif text-xl font-light leading-relaxed text-charcoal md:text-2xl">
                {wish}
              </p>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  )
}
