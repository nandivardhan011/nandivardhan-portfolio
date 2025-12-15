export default function Projects() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>

      <ul className="space-y-4">
        <li>
          <strong>AI-Enabled Smart Battery Swapping Hub (ESP32)</strong><br />
          NFC authentication, cloud logging, servo-based locking.
        </li>

        <li>
          <strong>IoT Earthquake Monitoring System</strong><br />
          ESP32-based vibration detection, published research.
        </li>

        <li>
          <strong>Surveillance Robot & Automatic Pet Feeder</strong><br />
          ESP32-CAM live streaming, STM32 standalone control.
        </li>
      </ul>
    </section>
  )
}
