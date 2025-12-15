export default function Navbar() {
  return (
    <nav className="flex justify-between px-6 py-4 border-b">
      <span className="font-bold">BN</span>
      <div className="space-x-4">
        <a href="/">Home</a>
        <a href="/projects">Projects</a>
        <a href="/experience">Experience</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  )
}
