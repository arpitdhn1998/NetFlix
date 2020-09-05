import React from 'react';
import scard from './Scard.js';
import Card from "./Cards.js";

const Netflix = () => {


return(
    <Card imgsrc={scard[1].imgsrcs}
       title={scard[1].titles}
       seriesname={scard[1].seriesnames}
      link={scard[1].links} 
      key = {scard[1].id}
      />

)

}
export default Netflix;