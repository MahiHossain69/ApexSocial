import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Application from "./pages/Application";
import HostFamilies from "./pages/HostFamilies";
import ApexAcademy from "./pages/ApexAcademy";
import MyTravel from "./pages/MyTravel";
import MyCommunityAndAreaDirector from "./pages/MyCommunityAndAreaDirector";
import Congratulations from "./pages/Congratulations";
import CongratulationsTwo from "./pages/CongratulationsTwo";
import MyFavorites from "./pages/MyFavorites";
import InterviewsPage from "./pages/InterviewsPage";
import ProgramInformationAndApplicationForm from "./pages/ProgramInformationAndApplicationForm";
import Resources from "./pages/Resources";
import Hosthome2 from "./pages/HostFamilies2";
import Hosthome3 from "./pages/HostFamilies3";
import ViewProfile from "./pages/ViewProfile";
import LoginPage from "./pages/LoginPage";

let router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route element={<Layout />}>
        <Route index element={<Home />}></Route>

        <Route path="/settings" element={<Settings />}></Route>
        <Route path="/view-profile" element={<ViewProfile />}></Route>
        <Route path="/host-families" element={<HostFamilies />}></Route>
        <Route path="/host-families2" element={<Hosthome2 />}></Route>
        <Route path="/host-families3" element={<Hosthome3 />}></Route>
        <Route path="/my-application" element={<Application />}></Route>
        <Route path="/apex-academy" element={<ApexAcademy />}></Route>
        <Route path="/my-travel" element={<MyTravel />}></Route>
        <Route path="/congratulations" element={<Congratulations />}></Route>
        <Route
          path="/congratulationstwo"
          element={<CongratulationsTwo />}
        ></Route>
        <Route path="/MyFavorites" element={<MyFavorites />}></Route>
        <Route path="/interviews" element={<InterviewsPage />}></Route>
        <Route
          path="/my-community-and-area-director"
          element={<MyCommunityAndAreaDirector />}
        ></Route>
        <Route
          path="/program-information-and-application-forms"
          element={<ProgramInformationAndApplicationForm />}
        ></Route>
        <Route path="/resources" element={<Resources />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Route>
    </>
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
