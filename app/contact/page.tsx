export default function Contact() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>

      <form className="space-y-4 max-w-md">
        <input
          className="w-full border p-2 rounded"
          placeholder="Your Name"
        />
        <input
          className="w-full border p-2 rounded"
          placeholder="Email"
        />
        <textarea
          className="w-full border p-2 rounded"
          placeholder="Message"
        />
        <button className="px-4 py-2 bg-blue-600 text-white rounded">
          Send Message
        </button>
      </form>
    </section>
  )
}
