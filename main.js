const { createApp } = Vue
const lista = {
    data() {
        return{ 
            done: `V`,
            notDone:`X`, 

            coseDaFare:[
                {   
                    task: `comprare il pane`,
                    stato: true,
                
                },{
                    
                    task: `fare benzina`,
                    stato: false,
                    
        
                },{
                    task: `portare fuori i cani`,
                    stato: false,
                
                }
            ],
            
           
    
        }
    },
    methods: {
        //uso index,1 per indicare il singolo elemento che desidero cancellare altrimenti cancella tutto
        rimuovi(index){
            this.coseDaFare.splice(index,1)
        },
        aggiungiAttività(){
            let nuovaAttività =  {   
                task: document.getElementById("testoNuovo").value,
                stato: false
            }
            this.coseDaFare.push(nuovaAttività)
            

        }
    },
    
    
}
createApp(lista).mount("#app")