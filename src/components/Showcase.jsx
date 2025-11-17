const projects = [
  {
    title: 'SaaS Marketing Website',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'Fashion Ecommerce',
    image: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'Fintech Dashboard',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop',
  },
]

export default function Showcase() {
  return (
    <section id="work" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Selected work</h2>
            <p className="mt-3 text-gray-600">A glimpse of projects we recently delivered.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700">Work with us</a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="group relative overflow-hidden rounded-xl bg-white border border-gray-200 shadow-sm">
              <img src={p.image} alt={p.title} className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-white font-semibold">{p.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
