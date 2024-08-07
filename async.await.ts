function fajar(){
    console.log("Fajar Time Started...");
    return new Promise((resolve , reject)=>{
    setTimeout(()=>{
        resolve("Fajar Time Ended");
    },6000)
    })
}

function zohar(){
    console.log("Zohar Time Started...");
    return new Promise((resolve , reject)=>{
    setTimeout(()=>{
        resolve("Zohar Time Ended");
    },5000)
    })
}

function asar(){
    console.log("Asar Time Started...");
    return new Promise((resolve , reject)=>{
    setTimeout(()=>{
        resolve("Asar Time Ended");
    },4000)
    })
}

function maghrib(){
    console.log("Maghrib Time Started...");
    return new Promise((resolve , reject)=>{
    setTimeout(()=>{
        resolve("Maghrib Time Ended");
    },3000)
    })
}

function isha(){
    console.log("Isha Time Started...");
    return new Promise((resolve , reject)=>{
    setTimeout(()=>{
        resolve("Isha Time Ended");
    },2000)
    })
}

async function allNamazTime(){
    try{
        const result1 = await fajar()
        console.log(result1);
        const result2 = await zohar()
        console.log(result2);
        const result3 = await asar()
        console.log(result3);
        const result4 = await maghrib()
        console.log(result4);
        const result5 = await isha()
        console.log(result5);
    }catch(error){
    console.log("There is an error");
    }
}
allNamazTime() 