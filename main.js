// const search = document.querySelector('#search').value;
const display = document.querySelector('#database');
const item_search = document.querySelector('#item_search');

item_search.addEventListener('click', (e) => {
    e.preventDefault()
    const search = document.querySelector('#search').value;
console.log(search);

    search.value = ''

   if(search.toLowerCase() !== ''){
    display.innerHTML = arr.map((item) => {
        return `<div class="card">
        <img src="${item.image}" alt="">
        <h2>${item.name}</h2>
        </div>`
    })
   }


})






const arr = [
    {
        id: 1,
        name: 'Begho',
        image: "assets/map.jpg"
    },
    {
        id: 2,
        name: 'Koma Land',
        image: "assets/statue.jpg"
    },
    {
        id: 3,
        name: 'Kintampo Complex',
        image: "assets/rock.jpg"
    },
    
]


display.innerHTML = arr.map((item) => {
    return `<div class="col-span-3" >
    <img src="${item.image}" class="w-96 h-96 object-cover" alt="">
    <h2>${item.name}</h2>
    </div>`
})

