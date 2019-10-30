import React from 'react';
import Button from '@material-ui/core/Button'



const Square = (prps) =>  {
  
  let clname = "square";
  if (prps.highlight) {
    clname += " highlight";
  }
  return (<Button style={{maxWidth: '34px', maxHeight: '34px', minWidth: '34px', minHeight: '34px'}} className={clname} onClick={() => prps.onClick()}>
    {prps.value}
  </Button>);
}


export default Square
