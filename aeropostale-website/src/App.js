
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllRoutes from './Components/AllRoutes';
import Navigation from './Components/Navigation';
import { useEffect, useState } from 'react';



function App() {
  // const [load,setloading] = useState(true)
  // useEffect(()=>{
  //   const timer=  setTimeout(()=>{
  //     setloading(false)
  //   },3000);
  //   return () => clearTimeout(timer);
  // },[])


  return  (
//     <section>
//     <div class="loading loading05">
//       <span>A</span>
//       <span>E</span>
//       <span>R</span>
//       <span>O</span>
//       <span>P</span>
//       <span>O</span>
//       <span>S</span>
//       <span>T</span>
//       <span>A</span>
//       <span>L</span>
//       <span>E</span>
//     </div>
// </section>
//   ):
  // (
    <>
     <Navigation/>
     <AllRoutes/> 
    </>
  );
}

export default App;
 