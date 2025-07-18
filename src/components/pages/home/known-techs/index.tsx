'use client'

import { motion } from 'framer-motion'
import { KnownTech as IKnownTech } from '@/src/@types/projects'
import { SectionTitle } from '@/src/components/section-title'
import { KnownTech } from './known-tech'

type KnownTechsProps = {
  techs: IKnownTech[]
}

export const KnownTechs = ({ techs }: KnownTechsProps) => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="skills" title="Knowledge" />

      <div className="grid grid-cols-[repeat(auto-fit,_minmax(264px,1fr))] gap-3 mt-[60px]">
        {techs?.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.15, delay: index * 0.07 }}
          >
            <KnownTech tech={tech} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
