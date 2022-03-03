const baseUrl="http://localhost:8000/employee";

export async function GetAllEmployees (){
    return await fetch(`${baseUrl}`)
    .then(res =>  res)
    .catch((err) => console.log(err))
}