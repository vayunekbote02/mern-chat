import Register from "./pages/Register";
import axios from "axios";

function App() {
  axios.defaults.baseURL = "http://localhost:8080";
  // axios.defaults.withCredentials = true;
  return (
    <>
      <div className="">
        <Register />
      </div>
    </>
  );
}

export default App;
