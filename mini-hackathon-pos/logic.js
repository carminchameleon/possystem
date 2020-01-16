const items = document.getElementById("items")
const drinks = document.querySelectorAll(".drinks")
const ordered_list = document.querySelector(".ordered_list")
const ordered_menu = document.querySelector(".ordered_menu")
const total_cost = document.querySelector(".total_cost")
const addedarea = document.querySelector(".addedarea")
const reset = document.querySelector(".reset")

items.addEventListener('click',createCartItemElement)
items.addEventListener('click',clearList)
items.addEventListener('click', renderCartHTML)
reset.addEventListener('click', reloadPage)

//버튼 클릭했을때 내가 클릭한 것의 id와 연결
//카트에 클릭한 것 넣음
// id , quantity : 1로 연결

function createCartItemElement(event){
 const clickedOneName = event.target.textContent;
 const selecteditem = menu.find(element => element.name === clickedOneName)
 const firstquantity = 1
 //console.log(selecteditem)
 if( cart.find(element => element.name === clickedOneName) === undefined){
  selecteditem.quantity = firstquantity;
  cart.push(selecteditem)
  console.log(cart)
  console.log(selecteditem)
 }else {
   putsecondone(selecteditem)
 }
}

function putsecondone(selecteditem){
  for ( var i = 0; i<cart.length; i++){
    if( cart[i].name === selecteditem.name){
      var howmany = cart[i].quantity + 1
      cart[i].quantity = howmany
    
    }
  }
  console.log(cart)
  
}

function renderCartHTML() {
total()
  for(var i = 0; i<cart.length; i++){
 const newList = document.createElement('div')
 newList.classList.add("added_menu")
 const newTitle = document.createElement('div')
 newTitle.classList.add("added_title")
 newTitle.innerText= cart[i].name
 const newQTY = document.createElement("div")
 newQTY.classList.add("added_QTY")
 newQTY.innerText = cart[i].quantity
 const newPrice = document.createElement("div")
 newPrice.classList.add("added_price")
 newPrice.innerText= cart[i].price

 newList.appendChild(newTitle)
 newList.appendChild(newQTY)
 newList.appendChild(newPrice)
 
 addedarea.appendChild(newList)
  }
 
}

function clearList(){
  addedarea.innerHTML = ""
}

function total(){
  var result = []
  for( var i = 0; i<cart.length; i++){
    result.push(cart[i].quantity * cart[i].price)
  }
  console.log(result)
  const getSum = (acc, curr) => acc+ curr;
  const subTotal = (result.reduce(getSum))
  const theTotal = (subTotal.toFixed(1))
  total_cost.innerText= `$${theTotal}`;
  
}

function reloadPage(){
  cart=[]
  clearList()
  total_cost.innerText="$0.00"
}