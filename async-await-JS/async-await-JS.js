const promise1 = new Promise((resolve,reject)=> {
    setInterval(()=>{
        resolve("promise resolved")
    },5000)
})

function promiseResolveByThen() {
    promise1.then((result)=>{
        console.log(result);
    })
    console.log('before promise resolved')
}

// from api call

let API_URL = "https://api.github.com/users/ranjanritesh22";

let getUserData = fetch(API_URL);

async function getGitHubUserData() {
    try {
        let response = await getUserData;
        let data = await response.json();
        console.log(data)
    } catch(err) {
        console.log(err)
    }
}

getGitHubUserData();