
let botao=document.querySelector('button')
let planeta=document.querySelector('#planeta')
let popu=document.querySelector('#popu')
let clima=document.querySelector('#clima')
let solo=document.querySelector('#solo')

//fetch data of API
function getInfo(){
    updateWithLoading()
    let aleatNum=Math.floor((Math.random()*61)+1)
    let apiUrl='https://swapi.co/api/planets/'+aleatNum
   axios.get(apiUrl).then(response=>{
        updateInfo(response.data)
    }).catch(e =>{
        updateInfoErro()
    })
}


//put info on html
function updateInfo(data){
    planeta.innerText=data.name
    popu.innerText=data.population
    clima.innerText=data.climate
    solo.innerText=data.terrain
}

//in case of erro
function updateInfoErro(){
    planeta.innerText='Foi mal Padawan,esse planeta nao está disponivel'
    popu.innerText=''
    clima.innerText=''
    solo.innerText=''
}
//loading page
function updateWithLoading(){
    planeta.innerHTML='<i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>'
    popu.innerText=''
    clima.innerText=''
    solo.innerText=''

}

botao.addEventListener('click', getInfo)