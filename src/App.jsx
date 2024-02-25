import Navbar from "./components/Navbar/Navbar"
import Button from "./components/Button/button"
import ItemCount from "./components/ItemCount/ItemCount"
function App() {
  return (
    <>
    <Navbar />
      <h1>Ecomerce</h1>
    <Button label="Home" txtColor="red" callBack={() => console.log("click home")}/> 
    <Button label="About" txtColor="blue" callBack={() => console.log("click about si si ")}/> 
    <Button label="Edit"txtColor="pink"/> 
{/* // estados y hooks */}
    <ItemCount/>
    </>
  )
}

export default App
