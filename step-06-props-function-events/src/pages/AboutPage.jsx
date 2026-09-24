import { useState } from 'react'

function AboutPage() {
  const [isDemoOn, setIsDemoOn] = useState(false)

  function toggleDemo() {
    setIsDemoOn(!isDemoOn)
  }

  return (
    <section>
      <h2>About</h2>
      <p>Ứng dụng minh họa React nhập môn.</p>
      <button onClick={toggleDemo}>
        {isDemoOn ? 'Tắt demo' : 'Bật demo'}
      </button>
      {isDemoOn && <p>Demo đang bật.</p>}
    </section>
  )
}
export default AboutPage