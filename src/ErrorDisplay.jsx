import React from 'react';

const style = {
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  padding: 20,
  backgroundColor: 'rgb(187, 49, 49)',
  color: 'rgb(255, 255, 255)',
  fontSize: 20,
  fontFamily: `-apple-system,"San Francisco",Roboto,"Segoe UI","Helvetica Neue","Lucida Grande",sans-serif`,
  fontWeight: 600,
}

export default ({message}) => (
  <div style={style}>
    {message}
  </div>
)
