const textareaFrom = document.querySelector('#textareaFrom')
const textareaTo = document.querySelector('#textareaTo')
const btnTranslate = document.querySelector('btnTranslate')
const selects = document.querySelector('select')

const countries = {
    "en-GB": "Inglês",
    "es-ES": "Espanhol",
    "it-IT": "Italino",
    "ja-JP": "Japonês",
    "pt-BR": "Português"

};


selects.forEach((tag )=> { 
    for (let country in countries){
        let selected;
            if (tag.className.includes("selectFrom") && country == "pt-BR") {
                selected= "selected";
            }else if (tag.className.includes("selectTo") && country == "en-GB") {
                selected = "selected";
            }
            
            const option = `<option value= "${country}" ${selected}>${countries[country]}
            tag.insertAdjacentHTML("beforeend", option);

    }  
})

btnTranslate.addEventListener('click', ()=> {
});

    function loadTranslation (){
        fetch(
            'https://api.mymemory.translated.net/get?q=${textareaFrom.value}&langpair=$'
        ).then((res)=> res.json())
        .then((data)=> {
            textareaTo.value = data.responseData.translatedText;
        });
    }