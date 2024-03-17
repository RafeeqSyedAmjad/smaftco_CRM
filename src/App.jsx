
import { Toaster } from 'react-hot-toast'
import './App.css'
import { AppRoutes } from './routes/AppRoutes'

function App() {

  return (
    <div>
      <AppRoutes/>
      <Toaster/>
    </div>
  )
}

export default App
