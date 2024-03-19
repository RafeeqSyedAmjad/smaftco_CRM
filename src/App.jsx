import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from 'react-hot-toast'
import { AppRoutes } from './routes/AppRoutes'

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div>
        <AppRoutes />
        <Toaster />
      </div>
    </ThemeProvider>
    
  )
}

export default App
