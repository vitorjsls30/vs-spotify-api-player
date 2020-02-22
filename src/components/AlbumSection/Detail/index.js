import React from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
  let { albumId } = useParams();
  return(
    <div style={{color: '#FFF'}}>Yo! Album detail!! ID: { albumId }</div>
  );
}

export default Detail;