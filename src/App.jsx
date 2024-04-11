import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/header";
import Footer from "./Components/footer";
import Sidebar from "./Components/sidebar";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import ContextProvider from "./Components/context";

function App() {
  let [findTab, setSelectTab] = useState("Home");

  const FindingTab = (item) => {
    findTab = item;
    setSelectTab(findTab);
  };
  return (
    <>
      <ContextProvider>
        <div className="Container">
          <Sidebar selectTab={findTab} FindingTab={FindingTab}></Sidebar>
          <div className="Content">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
          </div>
        </div>
      </ContextProvider>
    </>
  );
}

export default App;
