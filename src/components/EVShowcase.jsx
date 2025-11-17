import { motion } from 'framer-motion'

const cases = [
  { title: 'Retail parking rollout', img: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=1400&auto=format&fit=crop' },
  { title: 'Municipal fast charging', img: 'https://images.unsplash.com/photo-1542601098-8fc114e148e0?q=80&w=1400&auto=format&fit=crop' },
  { title: 'Hospitality & resorts', img: 'https://images.unsplash.com/photo-1538688423619-8c63fbeef183?q=80&w=1400&auto=format&fit=crop' },
]

export default function EVShowcase(){
  return (
    <section id="work" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Deployments</h2>
            <p className="mt-3 text-gray-600">Real projects powering real vehicles.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700">Start a project</a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c, idx) => (
            <motion.div
              key={c.title}
              className="group relative overflow-hidden rounded-xl bg-white border border-gray-200 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <img src={c.img} alt={c.title} className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-white font-semibold">{c.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
