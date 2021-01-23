const btn = document.getElementById('getJokes');
const div = document.querySelector('.output');
const number = document.getElementById('num')
btn.addEventListener('click',getJokes);

function getJokes(e){
    const num = number.value;
    console.log(num);
    const xhr = new XMLHttpRequest;
    xhr.open('GET',`http://api.icndb.com/jokes/random/${num}`,true);
    xhr.onload=function(){
        let outputText ='';
        if (xhr.status===200){
            // console.log(xhr.responseText);
            const response = JSON.parse(xhr.responseText);
            response.value.forEach(value => {
                outputText+=`<li>${value.joke}</li>`;
            });
        }
        div.innerHTML=outputText;
    }
    xhr.send();
    e.preventDefault();
}