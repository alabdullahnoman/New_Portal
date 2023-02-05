const load= async(id)=>{
    const category_id =id
    url=`https://openapi.programming-hero.com/api/news/category/${category_id}`
    try{
        const res =await fetch(url)
        const data =await res.json()
        sortt(data.data)
    }
    catch(error){
        console.log(error)
    }
    
}
const load2= async(id)=>{
    const news_id =id
    url=`https://openapi.programming-hero.com/api/news/${news_id}`
    try{
        const res =await fetch(url)
        const data =await res.json()
        showdetails(data.data[0])
    }
    catch(error){
        console.log(error)
    }
    
}
const sortt =(data)=>{

    data.sort((s1,s2)=> s2.total_view -s1.total_view)
    display(data)
}
const change =(num)=>{

    const numm =document.getElementById("numbercount")
    num.innerText=""
    numm.innerText=num
}
const display =(datas)=>{
    const card = document.getElementById("cardDetails")
    card.innerHTML=""
    const num = datas.length
    change(num)
    datas.forEach(data =>{
        const div =document.createElement("div")
        div.innerHTML=`
        <div onclick=load2('${data._id}')  class="container bg-white rounded mb-3 shadow" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          <div class="row p-3">
            <div id="cardimg" class="col-xl-3 col-12 ">
              <img class="img-fluid" src="${data.thumbnail_url}" alt="">
            </div>
            <div class="col-xl-9 col-12 p-3">
              <div>
                <h3>${data.title}</h3>
                <p class="cut-text">${data.details}</p>
              </div>
              <div class="container">
                <div class="row">
                  <div class="col-xl-3 col-sm-6 d-flex align-items-center">
                    <div class="cardwriterimg" style=" margin-right: 12px;">
                      <img src="${data.author.img}" alt="">
                    </div>
                    <div class="mt-3">
                      <p class="mb-0">${data.author.name}</p>
                      <p class="cardwriterdate">${data.author.publishe_date}</p>
                    </div>
                  </div>
                  <div class="col-xl-3 col-sm-6  d-flex align-items-center">
                    <i class="fa-solid fa-eye"></i>
                    <p class="mb-0 ms-3 fw-semibold">${data.total_view}</p>
                  </div>
                  <div class="col-3 d-xl-flex d-none align-items-center gap-3">
                    <i class="fa-regular fa-star-half-stroke"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                  </div>
                  <div class="col-3 d-none d-xl-flex align-items-center">
                    <i class="fa-solid fa-arrow-right float-right"></i>
                  </div>
                </div>            
              </div>
            </div>
          </div>
        </div>
        `
        card.appendChild(div)
        
    });
}
const showdetails=(data)=>{
    console.log(data)
    const modal =document.getElementById("modalbody")
    modal.innerHTML=""
    const div =document.createElement("div")
    div.innerHTML=`
    <div class="modal-body">
                <h6>Name: ${data.author.name}</h6>
                <p>Rating: ${data.rating.number}</p>
                <p>Total View: ${data.total_view}</p>
     </div>
    `
    modal.appendChild(div)

}
document.getElementById("Home").addEventListener('click',function(){

    const category_id='00'
    load(category_id)
    
})
document.getElementById("BreakingNews").addEventListener('click',function(){

    const category_id='01'
    load(category_id)
})
document.getElementById("RegularNews").addEventListener('click',function(){

    const category_id='02'
    load(category_id)
})
document.getElementById("InternationalNews").addEventListener('click',function(){

    const category_id='03'
    load(category_id)
})
document.getElementById("SportsNews").addEventListener('click',function(){

    const category_id='04'
    load(category_id)
})
document.getElementById("EntertainmentNews").addEventListener('click',function(){

    const category_id='05'
    load(category_id)
})
document.getElementById("CultureNews").addEventListener('click',function(){

    const category_id='06'
    load(category_id)
})
document.getElementById("ArtsNews").addEventListener('click',function(){

    const category_id='07'
    load(category_id)
})
document.getElementById("News").addEventListener('click',function(){

    const category_id='08'
    load(category_id)
})