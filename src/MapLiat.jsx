import imr from "./assets/images.png"
import can from "./assets/imagepen.png"
import hero from "./assets/hero.png"
import panda  from "./assets/imagespanda.png"
import Tryed from "./Try/Try.jsx"
import { useEffect, useState } from "react"
function MapLiat(){
   const [tempList,setTempli]=useState(null);
   useEffect(()=>fetch("http://localhost:3000/animalsAdap").then(Rson=> {return Rson.json()}
).then((data)=>setTempli(data)),[]);
              
                
                 if(!tempList){
return <p>looding</p>
                 }
                    function deleter(ider){
                    const temperary=tempList.filter((ide)=> ide.id !=ider);
                    setTempli(temperary);}
                    const Permen = tempList.map((callBacPar)=>{return(
                    <Tryed key={callBacPar.id} availability={callBacPar.availability} 
                    habitat={callBacPar.habitat} foodPreference={callBacPar.foodPreference}
                     breed={callBacPar.breed} rating={callBacPar.rating} 
                     Age={callBacPar.age} price={callBacPar.price} id={callBacPar.id}
                      image={callBacPar.image} Name={callBacPar.Name} 
                     venum={callBacPar.venum} deleter = {deleter}/>
                    );});
    return(
        <>{
        Permen
            }
        </>
    );
}
export default MapLiat;