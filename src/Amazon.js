import React from 'react';
import scard from './Scard.js';
import Card from "./Cards.js";

const Amazon = () => {


return(
    <Card imgsrc={scard[7].imgsrcs}
       title={scard[7].titles}
       seriesname={scard[7].seriesnames}
      link={scard[7].links} 
      key = {scard[7].id}
      />

)

}
export default Amazon;