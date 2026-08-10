import imr from "./assets/images.png"
import can from "./assets/imagepen.png"
import hero from "./assets/hero.png"
import panda  from "./assets/imagespanda.png"
import Tryed from "./Try/Try.jsx"
import { useState } from "react"
function MapLiat(){
const [tempList,setTempli]=useState([{
       id:1,
       image:imr,
       Name:"anil",
       venum:true,
       age: 2,
       price: 1200,           
       rating: "★★★★☆ (4.2/5)",     
       breed: "Bengal Fox",       
       habitat: "Forest",        
       foodPreference: "Fruits & Nuts", 
       availability: "Adoption" 

    }
    ,{
           id:2,
           image:can,
           Name:"Nari",
           venum:true,
           age: 8,
           price: 10000,           
           rating: "★★★★☆ (4.2/5)",     
           breed: "Bengal Fox",       
           habitat: "Forest",        
           foodPreference: "Fruits & Nuts", 
           availability: "Adoption" 
        },{    
               id:3,
               image:panda,
               Name:"karadi",
               venum:true,
               age: 12,
               price: 1209,           
               rating: "★★★☆☆ (3.2/5)",     
               breed: "Bengal Fox",       
               habitat: "Forest",        
               foodPreference: "Fruits & Nuts", 
               availability: "Adoption" 
            },{
                  id:4,
                  image:hero,
                  Name:"react",
                  venum:true,
                  age: 9,
                  price: 500,           
                  rating: "★★★☆☆ (3.2/5)",     
                  breed: "Bengal Fox",       
                  habitat: "Forest",        
                  foodPreference: "Fruits & Nuts", 
                  availability: "Adoption" 
                },{    
                       id:5,
                       image:imr,
                       Name:"lakshmi",
                       venum:true,
                       age:4,
                       price: 1200,           
                       rating: "★★☆☆☆ (2.2/5)",     
                       breed: "Bengal Fox",       
                       habitat: "Forest",        
                       foodPreference: "Fruits & Nuts", 
                       availability: "Adoption" 
                    }
                  ]);
                 function deleter(ider){
                    const temperary=tempList.filter((ide)=> ide.id !=ider);
                    setTempli(temperary);

                 };

                    const Permen = tempList.map((callBacPar)=>
                    <Tryed key={callBacPar.id} availability={callBacPar.availability} 
                    habitat={callBacPar.habitat} foodPreference={callBacPar.foodPreference}
                     breed={callBacPar.breed} rating={callBacPar.rating} 
                     Age={callBacPar.age} price={callBacPar.price} id={callBacPar.id}
                      image={callBacPar.image} Name={callBacPar.Name} 
                     venum={callBacPar.venum} deleter = {deleter}/>
                    );
    return(
        <>{
        Permen
            }
        </>
    );
}
export default MapLiat;