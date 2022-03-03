const baseUrl=process.env.NODE_ENV === 'production'? "https://office-mern-app-ermi.herokuapp.com/":
"http://localhost:8000";

export async function GetAllEmployees (){
    return await fetch(`${baseUrl}/employee`)
    .then(res =>  res)
    .catch((err) => console.log(err))
}