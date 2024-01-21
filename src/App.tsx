function HelloReact() {
  return (
    <div className="tw-flex tw-justify-center tw-items-center tw-h-screen tw-bg-primary-content">
      <div className="tw-card tw-w-96 tw-bg-primary place-content-center tw-text-primary-content">
        <div className="tw-card-body">
          <h2 className="tw-card-title">React + Tailwind CSS + DaisyUI</h2>
          <p>Initalize a project with React + Tailwind CSS + DaisyUI</p>
          <div className="tw-card-actions tw-justify-end">
            <button className="tw-btn">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
        <HelloReact />
  )
}

export default App
