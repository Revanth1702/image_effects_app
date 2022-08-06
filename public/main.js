async function init(){
    let rustApp = null

    try{
        rustApp = await import('../pkg')
    }
    catch(e)
    {
        console.error(e)
        return;
    }
    console.log(rustApp)

    const input = document.getElementById('upload')
    const label = document.getElementById('label')
    const options = document.getElementById("options")
    const old_img = document.getElementById("old-img")
    const filereader = new FileReader()

    filereader.onload = ()=>{
      
    
        old_img.setAttribute('src', filereader.result)
        let base64 = filereader.result.replace(
            /^data:image\/(png|jpeg|jpg);base64,/, ''
        )


        //Configuring active Buttons
        const buttons = document.querySelectorAll(".formatting");
        buttons.forEach(bttn => {   
            bttn.addEventListener('click',()=>{
                buttons.forEach(button=>button.classList.remove('active'));
                bttn.classList.add('active');
            });           
        });


       //GRAYSCALE
        document.querySelector(".grayscale").addEventListener('click',(e)=>{
            document.querySelector("#range").setAttribute("class","hidden")
                img_data_url = rustApp.grayscale(base64)
            
                document.getElementById('old-img').setAttribute(
                    'src',img_data_url
                   )
               // old_img.classList.add("hidden")        
            })

        //FLIP
        document.querySelector(".flipv").addEventListener('click',()=>{
            document.querySelector("#range").setAttribute("class","hidden")
            img_data_url = rustApp.flipv(base64)
            document.getElementById('old-img').setAttribute(
                'src',img_data_url
            )
            //old_img.setAttribute("class","hidden")
        })
        document.querySelector(".fliph").addEventListener('click',()=>{
            document.querySelector("#range").setAttribute("class","hidden")
            img_data_url = rustApp.fliph(base64)
            document.getElementById('old-img').setAttribute(
                'src',img_data_url
            )
           // old_img.setAttribute("class","hidden")
        })

        //Rotate
        this.img_data_url= document.querySelector(".rotate90").addEventListener('click',()=>{
           document.querySelector("#range").setAttribute("class","hidden")
           img_data_url = rustApp.rotate90(base64)
            document.getElementById('old-img').setAttribute(
                'src',img_data_url
            )
            // document.querySelector(".rotate90").addEventListener('click',()=>{

            // })
          //  old_img.setAttribute("class","hidden")
       
        })
        console.log(this.img_data_url + " img")
        
        document.querySelector(".rotate180").addEventListener('click',(e)=>{
            document.querySelector("#range").setAttribute("class","hidden")
            img_data_url = rustApp.rotate180(base64)
            document.getElementById('old-img').setAttribute(
                'src',img_data_url
            )
           // old_img.setAttribute("class","hidden")
        })
  
        //Contrast
        document.querySelector(".contrast").addEventListener('click',()=>{
            document.querySelector("#range").setAttribute("class","visible")
            document.querySelector("#slider").setAttribute("class","hidden")
            document.querySelector("#slider_blur").setAttribute("class","hidden")
            document.querySelector("#slider_cont").setAttribute("class","visible")
            document.getElementById("slider_val").innerHTML=document.getElementById("slider_cont").value
            document.querySelector("#slider_cont").addEventListener('input',()=>{
                
                //old_img.setAttribute("class","hidden")
                console.log(document.getElementById("slider_cont").value, " slidercont")
                value = parseFloat(document.getElementById("slider_cont").value)
                document.getElementById("slider_val").innerHTML=value
                img_data_url = rustApp.contrast(base64,value)
                document.getElementById('old-img').setAttribute(
                'src',img_data_url
                 )
               }) 
        })

        //Brighten
        document.querySelector(".brightness").addEventListener('click',(e)=>{
            document.querySelector("#range").setAttribute("class","visible")
            document.querySelector("#slider_cont").setAttribute("class","hidden")
            document.querySelector("#slider_blur").setAttribute("class","hidden")
            document.querySelector("#slider").setAttribute("class","visible")
            document.getElementById("slider_val").innerHTML=document.getElementById("slider").value
            document.querySelector("#slider").addEventListener('input',()=>{
                //old_img.setAttribute("class","hidden")
                value = parseInt(document.getElementById("slider").value)
                document.getElementById("slider_val").innerHTML=value
                img_data_url = rustApp.brighten(base64,value)
                document.getElementById('old-img').setAttribute(
                'src',img_data_url
                 )
               })  
            
        })

        //Blur Image
        document.querySelector(".blur").addEventListener('click',(e)=>{
            document.querySelector("#range").setAttribute("class","visible")
            document.querySelector("#slider_cont").setAttribute("class","hidden")
            document.querySelector("#slider_blur").setAttribute("class","visible")
            document.querySelector("#slider").setAttribute("class","hidden")
            document.getElementById("slider_val").innerHTML=document.getElementById("slider_blur").value
            document.querySelector("#slider_blur").addEventListener('input',()=>{
                //old_img.setAttribute("class","hidden")
                value = parseFloat(document.getElementById("slider_blur").value)
                document.getElementById("slider_val").innerHTML=value
                img_data_url = rustApp.blur(base64,value)
                document.getElementById('old-img').setAttribute(
                'src',img_data_url
                 )
               })  
            
        })


    //    document.querySelector("#slider").addEventListener('input',()=>{
    //     console.log(document.getElementById("slider").value + " sliderval")
    //    }) 

       options.setAttribute("class", "visible")
       label.classList.add("hidden")
       
       
    }


    input.addEventListener('change', ()=>{
        filereader.readAsDataURL(input.files[0])


        
    }) //change event is fired whenever user has uploaded a file

}

init()