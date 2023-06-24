///////////////contact 모달/////////
const contactBtn = document.querySelector(".contact_btn");
contactBtn.addEventListener("click", function(){
  document.querySelector(".contact_modal").style.display = "block"
contactBtn.style.display = "none"
})
document.getElementById("chatCloseBtn").addEventListener("click", function(){
  document.querySelector(".contact_modal").style.display = "none"
contactBtn.style.display = "block"
})

///////////search 모달///////////////
const searchModalEx = document.querySelector(".search_modal_ex");
document.querySelector(".search").addEventListener("click", function(){
  searchModalEx.style.display = ("block")
})
document.getElementById("searchCloseBtn").addEventListener("click", function(){
  searchModalEx.style.display = ("none")
})