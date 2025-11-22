
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Form from './pages/Form'
import Home from './pages/Home'
import Resumegenerator from './pages/Resumegenerator'
import History from './pages/History'
import Header from './components/Header'
import Footer from './components/Footer'
import Pagepnf from './pages/Pagepnf'



function App() {


  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/resumegenerator' element={<Resumegenerator/>}/>
         <Route path='/Form' element={<Form/>}/>
          <Route path='/history' element={<History/>}/>


<Route path='/*' element={<Pagepnf/>}/>

    </Routes>
    <Footer/>
     
    </>
  )
}

export default App
