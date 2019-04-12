// const baseURL = `https://api.adviceslip.com/advice/search/`
// // const queryType =`t=`
// let quoteType = `""`
// let queryURL = baseURL + quoteType

// console.log(queryURL)
// Global variable used to be defined anywhere my code so when I call the 
// topic function
let topic = ''

const getTopic = () => {
    topic = $('#input').val()
    console.log(topic);
}

const getQuotes = () => {
    $.ajax({
        type: "GET",
        dataType: "json",
        url: `https://api.adviceslip.com/advice`

    }).then((data) => {
        // console.log(data.slips[0].advice)
        console.log(data)
        // console.log(data.slip.advice);
        // getQuotes();
        const h3forQuote = $('<h3>').text(data.slip.advice)
        // console.log(h3forQuote)
        $('.container').append(h3forQuote)
    })
}

const searchForQuotes = () => {
    $.ajax({
        type: "GET",
        dataType: "json",
        url: `https://api.adviceslip.com/advice/search/` + topic

    }).then((data) => {
        console.log(data)
        // if(data.message.text === 'No advice slips found matching that search term.') 
        //     console.log('broken')
        const randomNumber = Math.random(Math.floor()* data.slips.length)
        console.log(data.slips.length)

        const h3forTopic = $('<h3>').text(data.slips.advice)
        console.log(h3forTopic)
        $('.container').append(h3forTopic)
    })
}





$(() => {
    const $openBtnLove=$('#openModalLove');
    const $modalLove = $('#modalLove');
    const $closeBtnLove = $('#close-love');

    const openModalLove=()=>{
        
        $modalLove.css('display', 'block')
    
    }
    const closeModalLove = () => {
        $modalLove.css('display', 'block');

    }
    const $openBtnHappy=$('#openModalHappy');
    const $modalHappy = $('#modalHappy');
    const $closeBtnHappy = $('#close-happy');

    const openModalHappy=()=>{
        $modalHappy.css('display', 'block')
    }
    const closeModalHappy = () => {
        $modalHappy.css('display', 'block');

    }

    // $('#quoteOftheDay').on('click', (event) => {
    //     event.preventDefault()

    //     getQuotes()

    // })
    // $('#search').on('click', (event) => {
    //     event.preventDefault()
    //     getTopic()
    //     getQuotes()
    //     searchForQuotes()
    // })
    // $('#love').on('click', (event) => {
    //     event.preventDefault()
    //     // getTopic()
    //     searchForQuotes()
    $openBtnLove.on('click', openModalLove);
    $closeBtnLove.on('click', closeModalLove);

    $openBtnHappy.on('click', openModalHappy);
    $closeBtnHappy.on('click', closeModalHappy);

})








// const getQuote = () => {

//     currentquote = $(event.currentTarget).text().toUpperCase()
//     console.log(currentQuote)

// }

// $(() => {

// const getData = () => {
//     $.ajax({
//         url: baseURL,
//         type: "GET",
//         quotes: {

//             "length": 56,
//             "tags": [
//                 "motivational",
//                 "inspire",
//                 "famous"
//             ]

//         }
//     })
// .then(function (data) {
//   console.log("Retrieved " + data.length + " records from the dataset!");
//    for(let i =0; i<inputNumber; i++)

//   console.log(data[i].complaint_type)
//     })

// })




