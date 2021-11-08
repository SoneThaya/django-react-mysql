import { Route, NavLink, Routes } from "react-router-dom";
import "./App.css";
import Backend from "./pages/Backend";
import Frontend from "./pages/Frontend";

function App() {
  return (
    <>
      <div className="container">
        <header className="d-flex py-3 justify-content-center">
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <NavLink to="frontend" className="nav-link">
                Frontend
              </NavLink>
            </li>
            <li>
              <NavLink to="backend" className="nav-link">
                Backend
              </NavLink>
            </li>
          </ul>
        </header>
      </div>

      <div className="album py-5 bg-light">
        <div className="container">
          <Routes>
            <Route path="frontend" element={<Frontend />} />
            <Route path="backend" element={<Backend />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
