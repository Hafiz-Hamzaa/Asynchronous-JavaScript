// ==========>>>>> Promise
const promise = new Promise((resolve , reject)=>{
    resolve("Success")
})
console.log(promise);
// ==========>>> Promise States {Pending , Resolve , Reject}
// ====>>> We use two methods whic is provided by javascript to handle a promise value
// ===>> .then  .catch() 
const returningMoney = new Promise((resolve , reject)=>{
    resolve("Success")
})
returningMoney
    .then((value)=>{
    console.log("Thank you for returning a money");
    console.log(value);
     }).catch((value)=>{
    console.log("Sorry I am not able to return your money");
    console.log(value);
    }).finally(()=>{
    console.log("I am not given money again");
})
//===========>>>>> Aceive same example by using promises
function fajar() {
    console.log("Fajar Time Started...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Fajar Time Ended");
        }, 6000);
    });
}
function zohar() {
    console.log("Zohar Time Started...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Zohar Time Ended");
        }, 5000);
    });
}
function asar() {
    console.log("Asar Time Started...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Asar Time Ended");
        }, 4000);
    });
}
function maghrib() {
    console.log("Maghrib Time Started...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Maghrib Time Ended");
        }, 3000);
    });
}
function isha() {
    console.log("Isha Time Started...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Isha Time Ended");
        }, 2000);
    });
}
//=======>>> Promise Chaining
fajar()
    .then((value) => {
    console.log(value);
    return zohar();
}).then((value) => {
    console.log(value);
    return asar();
}).then((value) => {
    console.log(value);
    return maghrib();
}).then((value) => {
    console.log(value);
    return isha();
}).then((value) => {
    console.log(value);
});
export {};
