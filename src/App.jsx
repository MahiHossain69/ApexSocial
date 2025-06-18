import {
  createBrowserRouter,
  RouterProvider,Route,createRoutesFromElements
} from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout/Layout";
import Profile from "./pages/Profile";
import ProgramCost from "./pages/ProgramCost";
import MyFavorite from "./pages/MyFavorite";
import HelpVid from "./pages/HelpVid";
import Resources from "./pages/Resources";

let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout/>}>
    <Route index element={<Home/>}></Route>
    <Route path="/profile" element ={<Profile/>}></Route>
    <Route path="/programcost" element ={<ProgramCost/>}></Route>
    <Route path="/myfavorite" element ={<MyFavorite/>}></Route>
    <Route path="/helpvid" element ={<HelpVid/>}></Route>
    <Route path="/resources" element ={<Resources/>}></Route>
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
