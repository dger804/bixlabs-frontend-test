import './app.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from '../pages/home/Home';
import Splash from '../pages/splash/Splash';
import Error404 from '../pages/error/Error404';
import Welcome from '../pages/welcome/Welcome';

export function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Splash />} />
        <Route path="home" element={<Home />} />
        <Route path="Welcome" element={<Welcome />} />
        <Route path="*" element={<Error404 />} />
      </>
    )
  )

  return(
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
