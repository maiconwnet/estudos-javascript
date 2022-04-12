/* 
    ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Auguto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

//  let conterCategory = booksByCategory.length

//  console.log(conterCategory)
 
//  for (const category of booksByCategory) {
//     console.log("o total de livros da categoria é :" ,category.category)
//      console.log(category.books.length)
//  }


// function counterAuthors (){
// let authors = [];

// for (let category of booksByCategory){
     
//     for(let book of category.books){

//         if (authors.indexOf(book.author) == -1) {
//             authors.push(book.author)
//         }

//     }

// }
// console.log('o total de autores é '+ authors.length)
// }
// counterAuthors();



// function AuthorAugustoCury (){
//     let authorAugusto = [];
    
//     for (let category of booksByCategory){
         
//         for(let book of category.books){
    
//             if (book.author === "Augusto Cury") {
//                 authorAugusto.push(book.title)
//             }
//         }
    
//     }
//     console.log(authorAugusto)

//     }
//     AuthorAugustoCury("Augusto Cury");


// function authorBooks (){
//     let booksOfAuthor = [];
    
//     for (let category of booksByCategory){
         
//         for(let book of category.books){
    
//             if (book.author != '') {
//                 booksOfAuthor.push(book.title)
//                 booksOfAuthor.push(book.author)
//             }
//         }
    
//     }
//     console.log(booksOfAuthor)

//     }
//     authorBooks();



function authorBooks (author){
    let booksOfAuthor = [];
    
    for (let category of booksByCategory){
         
        for(let book of category.books){
    
            if (book.author === author) {
                booksOfAuthor.push(book.title)
                 
            }
        }
    
    }
    console.log(`Os livros do autor ${author} :  ${booksOfAuthor.join(", ")}`)
     }
    authorBooks('Augusto Cury');