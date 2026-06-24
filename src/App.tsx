export default function App() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="bg-surface-container p-8 rounded-2xl shadow-sm text-center border border-action-secondary/20">
        <h1 className="text-4xl font-bold text-text-primary mb-2">
          Hello World
        </h1>
        <p className="text-text-secondary mb-6">
          Page is working with Tailwind CSS and Vite. You can start editing the code in <code>src/App.tsx</code>.
        </p>
        <button className="bg-action-primary text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity">
          Primary Button
        </button>
      </div>
    </div>
  )
}