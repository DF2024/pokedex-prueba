import {Routes, Route} from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Navbar from '../layouts/Navbar'
import Favorites from '../pages/Favorites'
import Details from '../pages/Details'

const AppRoutes = () => {
    return(
        <Routes>
            <Route element={<Navbar/>}>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/favorites' element={<Favorites/>}/>
                <Route path='/details/:id' element={<Details/>}/>
            </Route>
        </Routes>
    )
}

export default AppRoutes