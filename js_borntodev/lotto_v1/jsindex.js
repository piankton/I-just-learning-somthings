    /*
    let = can editable
    const = can't editable
    */
    let nickname = true;
    let fname = "Chonlakorn";
    const lname = "Takang";

    console.log(fname + lname); // <<< show on console 
    // alert(name); // <<< use to alert on website

    console.log(typeof name);  // <<< use to check type of name
    /* error_type
    NaN = not a number
    */
/* if  LET in {} it will use in scope {} only
but var is globaly */

    {
 var dd = "this is in {} but var"
 let df = "this is in {} but let"
 console.log(df);
    }
console.log(df);
console.log(dd);