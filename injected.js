$(async()=>{
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
    let i = 0
    while(i <= 4){
        if (i===4){
            console.log("done")
            i=0
        }else{
            divs[i].addClass('active')
            await delay(1000)
            divs[i].removeClass('active')
            i++
        }


    }


})
