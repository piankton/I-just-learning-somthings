const connect = true;
const url1 = "mean.dev/tele1"
const url2 = "mean.dev/tele2"
const url3 = "mean.dev/tele3"
const url4 = "mean.dev/tele4"
const url5 = "mean.dev/tele5"


function downloading(url){
    return new Promise(function(reslove,reject){
        console.log(`downloading... ${url}`)
        setTimeout(()=>{
            if(connect){
                reslove(`download ${url} done`)
                //success
            }else{
                reject("error");
                //error
            }
        },1500);
    })
}

//async await
async function start(){
    console.log(await downloading(url1));
    console.log(await downloading(url2));
}
start()