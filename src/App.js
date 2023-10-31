import Pages from './pages/Pages'
import Category from './components/Category'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
      <h1>THIS IS TAILWIND HEADER</h1>
      <Category/>
      <Pages/>
      <h1>THIS IS TAILWIND FOOTER</h1>
    </BrowserRouter>
    </div>
  )
}

export default App