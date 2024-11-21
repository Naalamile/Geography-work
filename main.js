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
        image: "assets/Volcanic.png"
    },
    {
        id: 2,
        name: 'Koma Land',
        image: "assets/Stamp impression and incision.png"
    },
    {
        id: 3,
        name: 'Human Remains',
        image: "assets/C-057.png"
    },
    {
        id: 4,
        name: 'Correspondence Letter',
        image: "assets/Rod McIntosh letter-1.png"
    },
    {
        id: 5,
        name: 'Correspondence Letter',
        image: "assets/James Boachie-Ansah's request to join Begho dig.png"
    },
    {
        id: 6,
        name: 'Smoking Pipe',
        image: "assets/Fragments of smoking pipes found on the surface 2.png"
    },
    {
        id: 7,
        name: 'Smoking Pipe',
        image: "assets/Pipe fragments from level 3. Note the miniature pipe on the right.png"
    },
    {
        id: 8,
        name: 'Artificial Configuration at Mumute',
        image: "assets/Map of Mumute.png"
    },
    {
        id: 9,
        name: 'Sites in Begho',
        image: "assets/Map of Begho.png"
    },
    {
        id: 10,
        name: 'Side blown Ivory Trumpet',
        image: "assets/two side-blown ivory trumpets 3.png"
    },
    {
        id: 11,
        name: 'Ivory Horn',
        image: "assets/C-220.png"
    },
    {
        id: 12,
        name: 'Begho 2020 Excavations Field Records',
        image: "assets/2993694_brand_brands_excel_logo_logos_icon 1.png"
    },
]


display.innerHTML = arr.map((item) => {
    return `<div class="col-span-3" >
    <img src="${item.image}" class="w-96 h-96 object-cover" alt="">
    <h2>${item.name}</h2>
    </div>`
})
// function displayItems(items) {
//     if (items.length === 0) {
//         display.innerHTML = '<p>No results found.</p>';
//     } else {
//         display.innerHTML = items.map(item => `
//             <div class="col-span-3">
//                 <img src="${item.image}" class="w-96 h-96 object-cover" alt="${item.name}">
//                 <h2>${item.name}</h2>
//             </div>
//         `).join('');
//     }
// }

