import { useEffect, useRef, useState } from 'react'
import Field from './chessfield/field'
import whitePiece from './assets/img/white/piece.png'

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
        <img className='absolute z-50 w-8 -translate-y-7 -translate-x-14' src={whitePiece}/>
        <div style={{transform: "translate(-"+x/2+"px, -"+y/2+"px)"}}>
          <Field ref={fieldRef}/>
        </div>
      </div>
    </div>
  )
}

export default App
