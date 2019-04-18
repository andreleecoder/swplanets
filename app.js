
let botao=document.querySelector('button')
let planeta=document.querySelector('#planeta')
let popu=document.querySelector('#popu')
let clima=document.querySelector('#clima')
let solo=document.querySelector('#solo')
let aparecem=document.querySelector('#aparecem')

//fetch data of API
function getInfo(){
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
    aparecem.innerText=data.films.length
}

//in case of erro
function updateInfoErro(){
    planeta.innerText='Foi mal Padawan,esse planeta nao está disponivel'
    popu.innerText=''
    clima.innerText=''
    solo.innerText=''
    aparecem.innerText=''


}
botao.addEventListener('click', getInfo)