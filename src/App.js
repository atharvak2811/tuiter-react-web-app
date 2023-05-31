import Lab from "./Lab";
import HelloWorld from "./Lab/Assignment3/hello-world";
import Tuiter from "./tuiter";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Routes>
            <Route path="/"         element={<Navigate to="/Lab"/>}/>
            <Route path="/Lab/*"   element={<Lab/>}/>
            <Route path="/hello"    element={<HelloWorld/>}/>
            <Route path="/tuiter/*" element={<Tuiter/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;