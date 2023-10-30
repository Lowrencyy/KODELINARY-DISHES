import Pages from './pages/Pages'
import Category from './components/Category'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
      <h1>Kodelinary dishes</h1>
      <Category/>
      <Pages/>
    </BrowserRouter>
    </div>
  )
}

export default App