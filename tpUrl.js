class URLPush{
    constructor(){

    }

    push(...parametre){
        if(parametre.length==2){
            let kle=parametre[0],vale=parametre[1];
            if(kle===undefined || vale===undefined){
                throw new Error("paramet yo pa ka undefined");
            }else{
                let ob=new URLSearchParams(window.location.search);
                if(ob.get(kle)===null){
                    ob.set(kle,vale);
                    history.pushState(null,"","?"+ob.toString());
            }else{
                console.log("kle sa egziste deja ou pa ka push li anko");
            }
            }
            
        }else{
            console.log("metod la dwe genyen 2 paramet");
        }
        
    }

    update(...parametre){
        let uu=new URLSearchParams(window.location.search);
        if(parametre.length==2){
            let kle=parametre[0],vale=parametre[1];
            if(uu.get(kle)===null){
             console.log('pa gen korespondans pou kle sa');
            }else{
                if(vale===""||vale===undefined){
                    console.log('vale wap update la pa ka vid');
                }else{
                    uu.set(kle,vale);
                    history.pushState(null,"","?"+uu.toString());  
                }
            }
        }else{
            console.log("metod la dwe genyen 2 paramet");
        }
        
    }

    remove(...parametre){
       let ru=new URLSearchParams(window.location.search);
       if(parametre.length==1){
            let kle=parametre[0];
            if(ru.get(kle)===null){
                console.log("Pa gen korespondans pou kle sa");
            }else{
                ru.delete(kle);
                history.pushState(null,"","?"+ru.toString());
    
                let url=window.location.href;
                let a=url.split('?');
                if(a[1]==""){
                    url=a[0];
                    history.pushState(null,"",url);
                }
            }

       }else{
        console.log('metod sa dwe gen yon sel paramet');
       }
        
    }

    get(...parametre){
       let gu=new URLSearchParams(window.location.search);
       if(parametre.length==1){
            let kle=parametre[0];
            if(gu.get(kle)===null){
                console.log("Pa gen korespondans pou kle sa ");
            }else{
                console.log("Kle : "+kle+" gen vale "+gu.get(kle));
            }
       }else{
        console.log('metod sa dwe gen yon sel paramet');
       }
      
    }
   
}

let url = new URLPush();
url.push("search","value");