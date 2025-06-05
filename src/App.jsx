import {
  createBrowserRouter,
  RouterProvider,Route,createRoutesFromElements
} from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout/Layout";
import Profile from "./pages/Profile";
import ProgramCost from "./pages/ProgramCost";
import MyFavorite from "./pages/MyFavorite";

let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout/>}>
    <Route index element={<Home/>}></Route>
    <Route path="/profile" element ={<Profile/>}></Route>
    <Route path="/programcost" element ={<ProgramCost/>}></Route>
    <Route path="/myfavorite" element ={<MyFavorite/>}></Route>
  </Route>
))

function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
