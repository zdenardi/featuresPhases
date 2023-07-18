
$(async()=>{
    let freeze = false;
    /**
     * Delays for X amount of milliseconds
     * @param ms
     * @returns {Promise<unknown>}
     */
    const delay = ms => new Promise(res => setTimeout(res, ms));

    const firstDiv = $('#1')
    const secondDiv = $('#2')
    const thirdDiv = $('#3')
    const fourthDiv = $('#4')
    const fifthDiv = $('#5')

    const divs = [firstDiv,secondDiv,thirdDiv,fourthDiv,fifthDiv]


    let i = 0


    /**
     *  Cycles through the divs in order to make them 'active'
     * @param i
     * @returns {Promise<void>}
     */
    const cycleThroughDivs = async (i)=>{
            while (i <= 5) {
                if(freeze){
                    break
                }
                if (i === divs.length) {
                    i = 0
                } else{
                    $(".active").removeClass('active')
                    divs[i].addClass('active')
                    i++
                }
                await delay(5000)
            }
    }

    $("#1,#2,#3,#4,#5").on("mouseover",(div)=>{
        $('.active').removeClass('active')
        $(div.currentTarget).addClass('active')
        $(div.currentTarget).addClass('freeze')
        freeze = true;
    })
    $("#1,#2,#3,#4,#5").on("mouseleave",async (div)=>{
        i = div.currentTarget.id-1
        await delay(6000)
        freeze = false
        await cycleThroughDivs(i)
    })
        await cycleThroughDivs(i)
})

