const loadCateory= () =>{
    const url="https://taxi-kitchen-api.vercel.app/api/v1/categories";


    fetch(url)
    .then(res => res.json())
    .then(data => displayCategory(data.categories));
};


const displayCategory=(categories) =>{
    //console.log(categories);


  
    const  catContainer=document.getElementById("category-container");
   // console.log(catContainer);
    catContainer.innerHTML="";
    for(let cat of categories){

        // creae a html element

     


       const categoryCard=document.createElement("div");
       categoryCard.innerHTML=`
              <button class="btn btn-block justify-start shadow btn-category">
            <img
              src="${cat.categoryImg}"
              alt=""
              class="w-10"
            />${cat.categoryName}
          </button>`;


        //   4 append kora
        catContainer.append(categoryCard);

    }


}

loadCateory();
