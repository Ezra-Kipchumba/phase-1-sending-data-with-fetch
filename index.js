// Add your code here
const body = document.querySelector("body");
function submitData(username,usermail) {
    const data = {
        name: username,
        email: usermail
    };

    const configObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(data),
    };

    let allData = fetch("http://localhost:3000/users", configObject)
        .then(res => res.json())
        .then(json => {
            body.append(json.id);
        })
        .catch(error => {
            alert("A bug detected!");
            body.append(error)
        });

    return allData;
}