import imr from "./assets/images.png";
import can from "./assets/imagepen.png";
import hero from "./assets/hero.png";
import panda from "./assets/imagespanda.png";
import loaderGif from "./assets/arthurpx-book-27293_512.gif";
import Tryed from "./Try/Try.jsx";
import { useEffect, useState } from "react";

function MapLiat() {
  const [err, errSeter] = useState(null);
  const [tempList, setTempli] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetch("http://localhost:3000/animalsAdap")
        .then(res => {
            if(!res.ok)
            {
              throw new Error("Sorry Unable to Load try sometime later");
            }
            
            return res.json()})
        .then(data => {
            console.log(data);
            setTempli(data)})
        .catch(error => {
          errSeter(error.message);
        });
    }, 2000);

    return () => clearTimeout(timer); // cleanup
  }, []);

  if (!tempList) {
    return (
      <div>
     {err?<p id="errorr">{err}</p>:<img src={loaderGif} alt=""/>}
      </div>
    );
  }

  function deleter(ider) {
    const temperary = tempList.filter(ide => ide.id !== ider);
    setTempli(temperary);
  }

  const Permen = tempList.map(callBacPar => (
    <Tryed
      key={callBacPar.id}
      availability={callBacPar.availability}
      habitat={callBacPar.habitat}
      foodPreference={callBacPar.foodPreference}
      breed={callBacPar.breed}
      rating={callBacPar.rating}
      Age={callBacPar.age}
      price={callBacPar.price}
      id={callBacPar.id}
      image={callBacPar.image}
      Name={callBacPar.Name}
      venum={callBacPar.venum}
      deleter={deleter}
    />
  ));

  return <>{Permen}</>;
}

export default MapLiat;
