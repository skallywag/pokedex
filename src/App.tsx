import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import "./styles/App.scss";
import NavBar from "./components/navBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
