import React, { forwardRef, useImperativeHandle } from 'react'
import Tile, { Style } from './tile'
import _ from "lodash"

const Field = forwardRef((props,ref) => {
  let rows = 4
  let columns = 4

  useImperativeHandle(ref, () => ({
    getDimensions(): number[] {
      return [rows*112,columns*56+20];
    }
  })) 

  return (
    <div>
      {_.times(rows, x => {
        return _.times(columns, y => 
          <div 
            key={x.toString() + y.toString()} 
            className='absolute' 
            style={{transform: 
              'translate('+(y*56+x*56)+'px, '+((columns*28)-((y+1)*28-x*28))+'px)', zIndex: columns-y
            }}
          >
            <Tile style={y%2==x%2?Style.Black:Style.White} shadow={y==0||x+1==rows}/>
          </div>
        )
      })}
    </div>
  )
})

export default Field
