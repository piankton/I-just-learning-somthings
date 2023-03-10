//---------------------------
//* -[ ตัวอย่างการเขียนและสถานะ ]-
// Promise(function(reslove,reject){

// })

//? status output
//? pending = กำลังทำงาน
//? reslove = สำเร็จ
//? reject = ไม่สำเร็จ

//---------------------------
//* -[ ตัวอย่างการใช้งาน ]-
// let connect =  true;
// const downloading =new Promise(function(reslove, reject){
//     if(connect == true){
//         reslove("done");
//     }else{
//         reject("error");
//     }
// });
// console.log(downloading); //? เช็คการแสดงผล
//---------------------------
//* -[ ตัวอย่างการใช้งานคู่กับ Timeout ]-
// let connect = true;
// const downloading = new Promise(function(reslove,reject){
//     setTimeout(()=>{
//         if(connect){
//             reslove("done");
//         }else{
//             reject(error)
//         }
//     },3000)
// })
// console.log(downloading) //?this is show pending
// setTimeout(()=>{
//     console.log(downloading); //?this is show done
// },4000)
//---------------------------
//* -[ metod ต่างๆ ]-
//? then() = ใช้ร่วมกับ reslove
//? catch() = ใช้ร่วมกับ reject
//? finally() = ไม่ว่าจะแสดงผลแบบไหน ให้ทำงานส่วนนี้ต่อ

// let connect = true;
// const downloading = new Promise(function(reslove,reject){

// });
// downloading.then(result =>{

// });
// downloading.catch(result=>{

// });
//---------------------------
//* -[ ทดลองใช้ promise + metod ]-
const connect = true;
const url1 = "mean.dev/tele"

function downloading(url){
    return new Promise(function(reslove,reject){
        console.log("downloading...")
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
//ส่งสถานะสำเร็จไปที่ .then
//ถ้าerrorไป .catch
//finally ทำงานสุดท้ายเสมอ
downloading(url1).then(result =>{
    console.log(result)
}).catch(err=>{
    console.log(err)
}).finally(()=>{
    console.log("จบการทำงาน")
});