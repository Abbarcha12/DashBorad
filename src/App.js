import { ImportExport } from "@material-ui/icons";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashborad from "./Containers/Dashborad/index"
import Login from "./Containers/Form/Login"
import SignUo from "./Containers/Form/Signup"
import Loading from "./Containers/Loading/Loading"
import LoadingDark from "./Containers/Loading/LoadingDark"
import DesignDashborad from "./Containers/designDashboard/DesignDashboard"

function App() {


  return (
    < >
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/tool" element={<DesignDashborad />} />
        <Route path="/dashborad" element={<Dashborad />} />
        <Route path="/dark" element={<LoadingDark />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<SignUo />} />


      </Routes>
    </>
  );
}

export default App;