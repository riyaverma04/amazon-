export function getDeliveryOptions(deliveryOptionsId){
    let deliveryOption ;
          deliveryOptions.forEach((option)=>{
            if(option.id === deliveryOptionsId){
                deliveryOption = option;
            }
          })
          return deliveryOption;
}

export let deliveryOptions = [{
    id: '1',
    day: 7,
    deliveryPriceCents: 0,
   
    },

    {
        id: '2',
        day: 4,     
        deliveryPriceCents: 499,
       
    },
    {           
        id: '3',
        day: 2,
        deliveryPriceCents: 999,
        
    }

]