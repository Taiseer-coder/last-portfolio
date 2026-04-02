import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Projects from '../pages/Projects'
import PremiumServices from '../components/Services'
import Skills from '../components/Skills'
import MainLayout from '../layout/MainLayout'
function App() {
console.log("App rendered");
  return (
    <>
    <BrowserRouter>
  <Routes>
    
    <Route path="/" element={<MainLayout/>}>
      <Route index element={<Home/>}/>
      
    </Route>

  </Routes>
</BrowserRouter>
     </>
  )
}

export default App
