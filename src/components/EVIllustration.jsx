import { motion } from 'framer-motion'

export default function EVIllustration() {
  return (
    <div className="relative w-full h-[420px]">
      {/* Soft glow background */}
      <div className="absolute -inset-6 bg-gradient-to-tr from-blue-200/40 to-indigo-200/40 blur-2xl rounded-3xl" />

      <div className="relative h-full rounded-2xl border border-gray-200 bg-white/70 backdrop-blur-sm shadow-lg overflow-hidden">
        {/* Ground */}
        <div className="absolute bottom-16 left-0 right-0 h-1 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200" />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-100 to-transparent" />

        {/* Floating particles (lightning) */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-blue-600"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: [0, 1, 0], y: [-10 - (i % 5) * 8, -40 - (i % 5) * 12], scale: [0.8, 1, 0.8] }}
            transition={{ duration: 3 + (i % 5), repeat: Infinity, delay: i * 0.2, ease: 'easeInOut' }}
            style={{ left: `${10 + (i * 8)}%`, bottom: `${14 + (i % 4) * 6}px` }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
            </svg>
          </motion.div>
        ))}

        {/* Charger */}
        <div className="absolute left-8 bottom-16">
          <motion.div initial={{ y: 6 }} animate={{ y: [6, 0, 6] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
            <svg width="140" height="220" viewBox="0 0 140 220" fill="none" aria-hidden>
              <defs>
                <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#2563eb" />
                  <stop offset="100%" stopColor="#4f46e5" />
                </linearGradient>
              </defs>
              <rect x="10" y="30" width="90" height="160" rx="14" fill="url(#g1)" />
              <rect x="22" y="46" width="66" height="36" rx="8" fill="white" opacity="0.9" />
              <path d="M55 130 l0 30" stroke="#93c5fd" strokeWidth="4" strokeLinecap="round" />
              <path d="M100 120 C 140 120, 120 170, 140 170" stroke="#1e40af" strokeWidth="6" fill="none" strokeLinecap="round" />
              <circle cx="140" cy="170" r="10" fill="#1e40af" />
              <path d="M55 64 l12 0 -6 10z" fill="#60a5fa" />
            </svg>
          </motion.div>
        </div>

        {/* Car */}
        <motion.div
          className="absolute bottom-20 left-28"
          initial={{ x: -10 }}
          animate={{ x: [ -10, 10, -10 ] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg width="300" height="130" viewBox="0 0 300 130" fill="none" aria-hidden>
            {/* Body */}
            <rect x="40" y="40" width="200" height="50" rx="14" fill="#0ea5e9" />
            <path d="M80 40 C95 15, 175 15, 200 40" fill="#0ea5e9" />
            {/* Windows */}
            <path d="M95 40 h80 v30 h-110 z" fill="#e0f2fe" opacity="0.95" />
            {/* Headlight */}
            <circle cx="245" cy="65" r="6" fill="#fde68a" />
            {/* Wheels */}
            <motion.g style={{ transformOrigin: '75px 95px' }} animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}>
              <circle cx="75" cy="95" r="18" fill="#0f172a" />
              <circle cx="75" cy="95" r="8" fill="#94a3b8" />
            </motion.g>
            <motion.g style={{ transformOrigin: '205px 95px' }} animate={{ rotate: -360 }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}>
              <circle cx="205" cy="95" r="18" fill="#0f172a" />
              <circle cx="205" cy="95" r="8" fill="#94a3b8" />
            </motion.g>
          </svg>
        </motion.div>

        {/* Cable from charger to car */}
        <motion.div
          className="absolute"
          style={{ left: 110, bottom: 95 }}
          initial={{ opacity: 0.9 }}
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg width="220" height="90" viewBox="0 0 220 90" fill="none">
            <path d="M0 20 C 80 20, 120 70, 210 70" stroke="#0f172a" strokeWidth="6" strokeLinecap="round" />
            <circle cx="210" cy="70" r="7" fill="#0f172a" />
          </svg>
        </motion.div>
      </div>
    </div>
  )
}
