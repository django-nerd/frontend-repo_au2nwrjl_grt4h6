export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-28 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">Digital Agency</span>
            <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Crafting modern websites and digital experiences
            </h1>
            <p className="mt-5 text-lg text-gray-600 max-w-xl">
              We help brands grow with conversion‑focused websites, web apps, and ecommerce built for speed, SEO and scale.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="px-6 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors">Start your project</a>
              <a href="#work" className="px-6 py-3 rounded-md border border-gray-300 text-gray-800 font-medium hover:bg-gray-50 transition-colors">See our work</a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 text-center">
              <div className="p-4 rounded-lg bg-white shadow-sm">
                <p className="text-3xl font-bold text-gray-900">50+</p>
                <p className="text-xs text-gray-500">Projects delivered</p>
              </div>
              <div className="p-4 rounded-lg bg-white shadow-sm">
                <p className="text-3xl font-bold text-gray-900">5.0</p>
                <p className="text-xs text-gray-500">Client rating</p>
              </div>
              <div className="p-4 rounded-lg bg-white shadow-sm">
                <p className="text-3xl font-bold text-gray-900">7y</p>
                <p className="text-xs text-gray-500">Experience</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-200/40 to-indigo-200/40 blur-2xl rounded-3xl" />
            <div className="relative rounded-2xl border border-gray-200 bg-white shadow-lg p-3">
              <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1400&auto=format&fit=crop" alt="Team at work" className="rounded-xl object-cover w-full h-[420px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
