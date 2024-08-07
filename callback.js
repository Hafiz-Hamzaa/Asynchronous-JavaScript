// //============>>>>> Call BACK
// function ParentFun(func : ()=> void){
//     console.log("I am a Parent Function");
//     func()
// }
// ParentFun(()=>{
//     console.log("I am a Child Function");
// })
// //============>>>> Slides Example
// function myFunc(callback  : any){
//     let name = "Ali Raza"
//     callback(name);
// }
// myFunc((name : string)=>{
//     console.log("Hello, "  + name);
// })
// function callBackFunc(callback : (name : string)=>void){
//     let Name = "Hamza Ali"
//     callback(Name);
// }
// callBackFunc((username  : string)=>{
//     console.log("Hello, "  + username);
// })
// //==========>>>> SetTimeOut()
// setTimeout(()=>{
//     console.log("Make a tea");
// },3000);
//===============>>>>>>> Start and End Time of all 5 Prayers
function fajar(callback) {
    console.log("Fajar Time Started...");
    setTimeout(() => {
        console.log("Fajar Time Ended");
        callback();
    }, 6000);
}
function zohar(callback) {
    console.log("Zohar Time Started...");
    setTimeout(() => {
        console.log("Zohar Time Ended");
        callback();
    }, 5000);
}
function asar(callback) {
    console.log("Asar Time Started...");
    setTimeout(() => {
        console.log("Asar Time Ended");
        callback();
    }, 4000);
}
function maghrib(callback) {
    console.log("Maghrib Time Started...");
    setTimeout(() => {
        console.log("Maghrib Time Ended");
        callback();
    }, 3000);
}
function isha() {
    console.log("Isha Time Started...");
    setTimeout(() => {
        console.log("Isha Time Ended");
    }, 2000);
}
//==========>>>>> Call Back Hell
fajar(() => {
    zohar(() => {
        asar(() => {
            maghrib(() => {
                isha();
            });
        });
    });
});
export {};
