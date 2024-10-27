import React, { useState} from 'react'

const Nabbar = ({ appdta, logo}) => {

  const [numstate, setNumberstate] = useState(0)
  //const [stringstate,setstring] = useState(0)
  const [arraystate,setStringstate] = useState("a")([
      "a", fasle
  ])
  // const[data, setData] = useState(0)
  console.log(numberstate)
  console.log(stringstate)
  console.log(arraystate)

  return (
      <>
          {appdata.appname} {logo}
      </>
  )

}

export default Navbar



