import Nav from "../nav";
import Assignment3 from "./Assignment3";
import Assignment4 from "./Assignment4";
import {Routes, Route} from "react-router";

function Labs() {
 return (
   <div>
     <Nav/>
     <Routes>
       <Route path="Assignment3"
        element={<Assignment3/>}/>
       <Route path="Assignment4"
        element={<Assignment4/>}/>
     </Routes>
   </div>
 );
}

export default Labs;

