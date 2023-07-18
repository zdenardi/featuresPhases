
$(async()=>{
    let freeze = false;
    /**
     * Delays for X amount of milliseconds
     * @param ms
     * @returns {Promise<unknown>}
     */
    const delay = ms => new Promise(res => setTimeout(res, ms));


    console.log("Injecting")
    const firstDiv = $('#1')
    const secondDiv = $('#2')
    const thirdDiv = $('#3')
    const fourthDiv = $('#4')
    const fifthDiv = $('#5')

    const divs = [firstDiv,secondDiv,thirdDiv,fourthDiv,fifthDiv]

    const removeAllActives = ()=>{
        $("#1,#2,#3,#4,#5").removeClass('active')
    }
    let i = 0
    const cycleThroughDivs = async (i)=>{
        while(i <= 5){
            if (i===5){
                console.log("done")
                i=0
            }else if(!freeze){
                $(".active").removeClass('active')
                divs[i].addClass('active')
                await delay(5000)
                i++
            }else{
                console.log("frozen")
                break
            }
        }
    }

    $("#1,#2,#3,#4,#5").on("mouseover",(div)=>{
        $('.active').removeClass('active')
        $(div.currentTarget).addClass('active')
        freeze = true;
    })
    $("#1,#2,#3,#4,#5").on("mouseleave",async (div)=>{
        freeze = false
        i = div.target.id
        await cycleThroughDivs(i)
    })
    await cycleThroughDivs(i)

})

