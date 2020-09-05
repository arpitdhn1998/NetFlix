import React from "react";
import Card from "./Cards";
import scard from "./Scard";
import Navbar from "./Navbar";
import Amazon from "./Amazon";
import Netflix from "./Netflix";


const series = "amazon";







const App = () => (

  <>
    <Navbar />
    < h1 className="heading-style">List of Top 8 Netflix Series</h1>
    {scard.map((val) => {
      return (
        <Card imgsrc={val.imgsrcs}
          title={val.titles}
          seriesname={val.seriesnames}
          link={val.links}
          key={val.id}
        />);
    })}


    {series === 'netflix' ? <Netflix /> : <Amazon />}
  </>

);
export default App;




