import { motion } from 'framer-motion'

const items = [
  {
    title: 'Fast DC & AC charging',
    desc: 'From 7kW AC wallboxes to 150kW DC fast chargers with dynamic load balancing.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/></svg>
    )
  },
  {
    title: 'Smart software',
    desc: 'Real-time monitoring, payments, user apps and OCPP integrations.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M4 6h16v12H4z"/></svg>
    )
  },
  {
    title: 'Design & install',
    desc: 'Site audits, civil works, permits, and maintenance—handled end to end.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M3 12l2-2 4 4L21 4l2 2-14 14-6-6z"/></svg>
    )
  },
]

export default function EVSections(){
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Built for every scenario</h2>
          <p className="mt-3 text-gray-600">Hardware, software and operations crafted specifically for EV charging.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl border border-gray-200 p-6 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-10 w-10 rounded-md bg-blue-600 text-white flex items-center justify-center">
                {s.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
