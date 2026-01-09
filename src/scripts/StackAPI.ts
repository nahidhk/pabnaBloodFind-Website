

export function StackAPI(){
    const httpApi =  "https://api.ndsql.top/pabnaBoldFind/user/";
    fetch(httpApi)
    .then(response => response.json())
    .then(data => {
       return data;
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });
}