import { Hero } from '@/components/hero'
import { Wishes } from '@/components/wishes'
import { ThirtyThings } from '@/components/thirty-things'
import { PhotoStory } from '@/components/photo-story'
import { NextTenYears } from '@/components/next-ten-years'
import { Invitation } from '@/components/invitation'
import { Finale } from '@/components/finale'

export default function Page() {
  return (
    <main className="bg-background">
      <Hero />
      <Wishes />
      <ThirtyThings />
      <PhotoStory />
      <NextTenYears />
      <Invitation />
      <Finale />
    </main>
  )
}
