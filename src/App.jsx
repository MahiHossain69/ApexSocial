import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Application from "./pages/Application";
import HelpVid from "./pages/HelpVid";
import Home from "./pages/Home";
import MyFavorite from "./pages/MyFavorite";
import Profile from "./pages/Profile";
import ProgramCost from "./pages/ProgramCost";
import Resources from "./pages/Resources";
import Settings from "./pages/Settings";
import CareProfessionals from "./pages/CareProfessionals";

let router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index element={<Home />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/programcost" element={<ProgramCost />}></Route>
      <Route path="/myfavorite" element={<MyFavorite />}></Route>
      <Route path="/helpvid" element={<HelpVid />}></Route>
      <Route path="/resources" element={<Resources />}></Route>
      <Route path="/application" element={<Application />}></Route>
      <Route path="/settings" element={<Settings />}></Route>
      <Route path="*" element={<Home />}></Route>
      <Route path="/careProfessionals" element={<CareProfessionals/>}></Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
