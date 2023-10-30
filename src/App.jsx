import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './assets/style.scss'
import ListPostController from './pages/Listpost/ListPostController'
import HeaderView from './components/HeaderView'
import AddPostController from './pages/Addpost/AddPostController'


function App() {
  
return <BrowserRouter>
<HeaderView/>
<Routes>
<Route path='/' element= {<ListPostController/>} />
<Route path='/add-post' element= {<AddPostController/>} />

</Routes>

</BrowserRouter>
 
}

export default App
