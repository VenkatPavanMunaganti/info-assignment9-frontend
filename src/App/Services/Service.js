let isAuthenticated= null;

export async function loginUser(emailId, userPassword){
    try{
        
        const response = await fetch('http://localhost:5000/users/authenticate', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                email: emailId,
                password: userPassword
            })
        });
        
        const data = await response.json()
        return new Promise((resolve, reject) => {
            if(data.LoginError){
                reject("Invalid Email/Password, try again")
            } else if(data.isAuthenticated === false){
                reject("Invalid Email/Password, try again")
            }else{
                if(data.isAuthenticated === true){
                    resolve(data)
                }
            }
        });
    }catch (e){
        console.log(e)
    }
}

export const isUserLoggedIn= ()=>{
    return isAuthenticated;
}
