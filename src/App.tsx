import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Home from './pages/Home'
import ClaudeCodePage from './pages/ClaudeCodePage'
import ToolPage from './pages/ToolPage'
import FAQPage from './pages/FAQPage'

function App() {
  return (
    <BrowserRouter basename="/1-">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/claude-code" element={<ClaudeCodePage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/:toolId" element={<ToolPage />} />
      </Routes>
      <Contact />
    </BrowserRouter>
  )
}

export default App
