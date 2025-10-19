function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({name: "chaicode", url: "https://chaicode.com"})
        }, 3000);
    })
}


async function getUserData(){
    try {
        console.log('Fetching User Data...');
        const UserData = await fetchUserData();
        console.log("user data fetched succesfully");
        console.log("User data: ", UserData)
    } catch (error) {
        console.log("Error fetching ",error)
    }
}

getUserData();