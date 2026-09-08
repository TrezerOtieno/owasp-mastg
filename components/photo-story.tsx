import Image from 'next/image'
import { Reveal } from '@/components/reveal'

export function PhotoStory() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-28 md:py-40">
      <Reveal className="mb-16 text-center md:mb-24">
        <p className="font-sans text-xs tracking-[0.4em] text-brown/60">A FEW OF MY FAVOURITES</p>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2 md:items-end md:gap-8">
        <Reveal>
          <div className="relative aspect-[9/16] w-full overflow-hidden rounded-sm bg-cream">
            <video
              className="h-full w-full object-cover"
              src="/media/cowboy.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
            <Image
              src="/images/green.jpg"
              alt="You outdoors in a green shirt, jacket slung over your shoulder"
              fill
              sizes="(max-width: 768px) 90vw, 40vw"
              className="object-cover object-[50%_25%]"
            />
          </div>
        </Reveal>
      </div>

      <Reveal delay={80} className="mx-auto mt-6 max-w-sm md:mt-8">
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm">
          <Image
            src="/images/cowboy.jpg"
            alt="You being goofy in a cowboy hat"
            fill
            sizes="(max-width: 768px) 90vw, 24rem"
            className="object-cover object-[50%_38%]"
          />
        </div>
      </Reveal>

      <Reveal className="mt-14 text-center">
        <p className="font-serif text-lg font-light italic text-brown md:text-xl">
          my favourite person, my favourite kind of trouble. otek.{' '}
          <span className="text-rose">&#9829;</span>
        </p>
      </Reveal>
    </section>
  )
}
