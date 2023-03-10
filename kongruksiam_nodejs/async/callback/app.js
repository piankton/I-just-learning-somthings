// calback function is old sync way to code 
 const url1 = "mean.dev/json"

 function downloading(url,callback){
    console.log(`กำลังโหลดไฟล์จาก ${url}`);
    setTimeout(()=>{
        callback(url);
    },3000)
 }

 function complete(result){
    console.log(`โหลด ${result} เรียบร้อย`);
 }

 downloading(url1,complete)