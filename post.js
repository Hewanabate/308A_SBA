

// post using fetch
const formEl = document.querySelector('form')
formEl.addEventListener('sumbit', (event)=>{
    event.preventDefault();

    const formData = new FormData(formEl);
    const data = new URLSearchParams(formData);

    fetch('https://reqres.in/api/users',{
        method:'POST',
        body: data
    }).then(res => res.json())
    .then (data => console.log(data))
    .catch(error => console.log(error));

});