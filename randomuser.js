const infocont=document.querySelector(".infocont");
const btn=document.querySelector("#btn");
const btn2=document.querySelector("#btn2");

function usergen(url){

const xhr=new XMLHttpRequest();

xhr.open("GET",url,true);

xhr.onload=function() {
  if(this.status===200){
    const user=JSON.parse(this.responseText);
    console.log(user);
    infocont.innerHTML=`
      <h2>User Info</h2>
      <img src="${user.results[0].picture.large}">
      <p class="my-2">Name : ${user.results[0].name.title +" "+ user.results[0].name.first +" "+ user.results[0].name.last}</p>
      <div><p>Gender : ${user.results[0].gender}</p>
      <p>Age : ${user.results[0].dob.age}</p>
      <p>Phone : ${user.results[0].phone}</p>
      <p>Email : ${user.results[0].email}</p>
      <p>Location : ${user.results[0].location.city+","+user.results[0].location.country+","+user.results[0].location.postcode}</p></div>

    `
}
}
xhr.send();

}


btn.addEventListener("click", ()=> {
usergen("https://randomuser.me/api/");
})

btn2.addEventListener("click",()=>{
  infocont.innerHTML="";
})
