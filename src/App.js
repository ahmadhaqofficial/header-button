import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./screens/Home.jsx";
// import Main from "./screens/Main.jsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<Main />} /> */}
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
