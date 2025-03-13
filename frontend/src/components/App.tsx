import AppRoutes from "../routes/AppRoutes"
import { AppContexts } from "../contexts"

function App() {
  return (
    <AppContexts>
      <AppRoutes />
    </AppContexts>
  )
}

export default App
