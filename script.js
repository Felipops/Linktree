function toggleMode(){
    //javascript
    const html = document.documentElement

    html.classList.toggle('light') 

    const img = document.querySelector("#profile img")

    if(html.classList.contains('light')){
        img.setAttribute('src','./assets/pops3.jpeg' )
        
    }else{
        img.setAttribute('src','./assets/pops.jpg' )

    }
    
}


