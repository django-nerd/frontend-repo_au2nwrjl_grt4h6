export default function EVCTA() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Power up your locations</h2>
          <p className="mt-3 text-gray-600">Schedule a consultation to plan, install and launch EV charging for your site.</p>
          <form className="mt-8 grid sm:grid-cols-2 gap-4 text-left">
            <input required placeholder="Your name" className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input required type="email" placeholder="Email" className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input placeholder="Company / Site" className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 sm:col-span-2" />
            <textarea required placeholder="What do you need? (number of stalls, DC/AC, timeline)" rows="4" className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 sm:col-span-2" />
            <button className="sm:col-span-2 mt-2 inline-flex justify-center px-6 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors">Request a plan</button>
          </form>
        </div>
      </div>
    </section>
  )
}
