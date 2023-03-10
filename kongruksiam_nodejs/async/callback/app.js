// calback function is old sync way to code 

//single download example
   // const url1 = "mean.dev/json"

   // function downloading(url,callback){
   //    console.log(`กำลังโหลดไฟล์จาก ${url}`);
   //    setTimeout(()=>{
   //       callback(url);
   //    },3000)
   // }

   // function complete(result){
   //    console.log(`โหลด ${result} เรียบร้อย`);
   // }

   // downloading(url1,complete)

   // downloading(url1,function(result){
   //    console.log(`download ${result} เรียบร้อย //ver.ย่อโค้ด`)
   // })
//single download example

//multi download example
   const url1 = "mean.dev/json1"
   const url2 = "mean.dev/json2"
   const url3 = "mean.dev/json3"

   function downloading(url,callback){
      console.log(`กำลังโหลดไฟล์จาก ${url}`);
      setTimeout(()=>{
         callback(url);
      },3000)
   }

   function complete(result){
      console.log(`โหลด ${result} เรียบร้อย`);
   }
   //download1
   downloading(url1,function(result){
         console.log(`download ${result} เรียบร้อย //ver.ย่อโค้ด`)

      //newdownload2
      downloading(url2,function(result){
         console.log(`download ${result} เรียบร้อย //ver.ย่อโค้ด`)

      //newdownload
         downloading(url3,function(result){
            console.log(`download ${result} เรียบร้อย //ver.ย่อโค้ด`)   

            //if want to new download put here
         })
      })
   })

//multi download example


//ถ้ามีเยอะเกิน จะถูกเรียกว่า callback hell ทำให้เกิดความสับสนในการทำงาน
//จึงมีวิธีแก้เป็นการใช้ promise 