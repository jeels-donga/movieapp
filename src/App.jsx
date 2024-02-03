import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import PageLayout from "./Pages/PageLayout";
import MovieContain from "./Component/MovieContain";
import MovieContainDetails from './Component/MovieConatinDetails'
function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<PageLayout />} >
          <Route path="/movie/:search/:page?" element={<MovieContain />} />
          <Route path="/:search/:name" element={<MovieContainDetails />} />
        </Route>
      </Routes>
    </div >
  );
}

export default App;
