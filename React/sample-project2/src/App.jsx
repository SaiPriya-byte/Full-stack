import Navbar from "./components/Navbar"

const App = () => {
  const data = {
      appname: "Hello"
  }
  const logodata = "mylogo"
  const test = "hello world"
  return (
     <>
     {test}
  <Navbar appdata={data}/>
     </>
  )
}
export default App




