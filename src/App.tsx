import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'
import { Contato } from './pages/Contato'
import { Sucesso } from './pages/sucesso'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contato' element={<Contato />} />
        <Route path='/sucesso' element={<Sucesso />} />
      </Routes>
    </BrowserRouter>
  )
}