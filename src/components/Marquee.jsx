import { motion } from 'framer-motion'

const logos = [
  'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/tesla.svg',
  'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/volkswagen.svg',
  'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/renault.svg',
  'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/nissan.svg',
  'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/peugeot.svg',
]

export default function Marquee() {
  return (
    <div className="w-full overflow-hidden py-10 bg-gradient-to-r from-blue-50 via-white to-indigo-50 border-y border-blue-100">
      <motion.div
        className="flex items-center gap-16"
        initial={{ x: 0 }}
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        {[...logos, ...logos].map((src, i) => (
          <img key={i} src={src} alt="brand" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
        ))}
      </motion.div>
    </div>
  )
}
