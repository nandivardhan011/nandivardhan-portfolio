export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-4">
        Hi, I’m Nandivardhan Reddy
      </h1>
      <p className="text-lg mb-6">
        Embedded Systems & IoT Engineer (Student)
      </p>

      <div className="flex gap-4">
        <a
          href="/projects"
          className="px-6 py-3 bg-blue-600 text-white rounded"
        >
          View Projects
        </a>
        <a
          href="/resume.pdf"
          className="px-6 py-3 border rounded"
        >
          Download Resume
        </a>
      </div>
    </main>
  )
}
