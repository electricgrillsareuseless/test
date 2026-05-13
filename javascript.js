    const canvas = document.getElementById("glep")
    const ctx = canvas.getContext("2d")
    let tx = 0
    let ty = 0
    let x = 0
    let y = 550
    let yukari = false
    let artmik = 5
    let skor = 0
    let flashon = false
    let flash = 0
    ctx.fillStyle = "blue"
    function draw()
    {
        document.getElementById("but").disabled = true
        ctx.clearRect(0,0,900,600)
        ctx.fillRect(tx,ty,100,50)
        ctx.fillRect(x-25,y,50,50)
        if (tx >= 800 || tx<=-1)
        {artmik = artmik * -1}
        tx+=artmik
        if (yukari==true)
        {
            y-=5
        }
        if (y<0)
        {
            yukari=false
            y=550
        }
        if (x <= tx+100 && x >= tx && y == 50)
        {
            skor++
            document.getElementById("skor").innerHTML = "SKOR: " + skor

            flashon = true
        }
        if (flashon == true)
        {
             document.getElementById("skor").style.backgroundColor = "red"
                          document.getElementById("skor").style.color = "white"
                                      yukari=false
            y=550
            flash++
        }
        if  (flash==10)
        {
            flashon = false
            flash = 0
                                document.getElementById("skor").style.backgroundColor = "white"
                                document.getElementById("skor").style.color = "black"
        }
        

        requestAnimationFrame(draw)
    }


        document.addEventListener("keydown", function(e){
        if (e.key == "d")
    {
        x+=50
        if (x > 924)
        {
            x = 900
        }

    }
            if (e.key == "a")
    {
        x-=50
                if (x < 0)
        {
            x=0
        }
    }
    if (e.key == "w")
    {
        yukari=true
    }
    })
