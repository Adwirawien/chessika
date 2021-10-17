import { useEffect, useRef, useState } from 'react'
import Field from './chessfield/field'


function App() {
  const fieldRef = useRef(null)
  let [x, setX] = useState(0)
  let [y, setY] = useState(0)

  useEffect(() => {
    if (fieldRef.current) {
      let dim = fieldRef.current!.getDimensions();
      console.log(dim)
      setX(dim[0])
      setY(dim[1])
    }
  }, [fieldRef])

  return (
    <div className="w-screen h-screen bg-teal-900 bg-clouds">
      <div className='flex items-center justify-center h-screen'>
      <div style={{transform: "translate(-"+x/2+"px, -"+y/2+"px)"}}>
        <Field ref={fieldRef}/>
      </div>
      </div>
      <p>{x} {y}</p>
    </div>
  )
}

export default App
