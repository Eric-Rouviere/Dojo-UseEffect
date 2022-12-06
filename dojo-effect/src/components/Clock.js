import React, { useEffect, useState }from "react";


function Clock(){
        
    // const date = new Date('December 06, 2022 10:02:30 GMT+00:00');
    // console.log(date.toLocaleTimeString('fr-FR'));
    
  
        const [date, setDate] = useState(new Date());
      
        useEffect(() => {
          console.log('setting up interval !!');
          const dateId = setInterval(() => {
            setDate(new Date());
          }, 1000);
          return function cleanDate () {
            clearInterval(dateId);
            console.log('clearing interval');
          }
        }, []);
      
        return <h1>{date.toLocaleTimeString('fr-FR')}</h1>;
      };
      
export default Clock












































    