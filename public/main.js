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
    const filereader = new FileReader()

    filereader.onload = ()=>{
        let base64 = filereader.result.replace(
            /^data:image\/(png|jpeg|jpg);base64,/, ''
        )
       let img_data_url = rustApp.grayscale(base64)
       document.getElementById('new-img').setAttribute(
        'src',img_data_url
       )
    }

    input.addEventListener('change', ()=>{
        filereader.readAsDataURL(input.files[0])
    }) //change event is fired whenever user has uploaded a file

}

init()