let recipesContainer = document.getElementById("recipesContainer");
let btnPizza = document.getElementById("pizza");
let btnBurger = document.getElementById("burger");
let btnPasta = document.getElementById("pasta");
let btnSalad = document.getElementById("salad");
let input = document.getElementById("input");
let btnSearch = document.getElementById("btn-search");

function fetchResipes(food) {
  recipesContainer.innerHTML = `
  <div class="loader">loading delicious recipes</div>
  `;


fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${food}`)
  .then((response) => response.json())
  .then((result) => {
    console.log(result.data.recipes);
    let data= result.data.recipes;
    recipesContainer.innerHTML ="";
    data.forEach((recipe) => {
        console.log(recipe.title);
        console.log(recipe.image_url);
        recipesContainer.innerHTML +=`
        <div class="recipe-card">
        <img class="recipe-img" src="${recipe.image_url}" alt="recipe-img"  />
        <div class="recipe-info"> <h3 class="recipe-title">${recipe.title}</h3>
        <div>
        
        <p class="recipe-publisher">By: ${recipe.publisher}</p>
        <div>
        <a href="#" class="btn-view">view recipe</a>
       </div>
       </div>
    `;
});
});
}
btnPizza.addEventListener("click", function () {
  console.log("click");
  fetchResipes("pizza");
}); 

  btnBurger.addEventListener("click", function () {
   console.log("click");
    fetchResipes("burger");
});   

  btnPasta.addEventListener("click", function () {
    console.log("click");
  fetchResipes("pasta");
});  

 btnSalad.addEventListener("click", function () {
  console.log("click");
  fetchResipes("salad");
});             
    btnSearch.addEventListener("click", function () {
      console.log("search");
  fetchResipes(input.value);
});                                                                                            