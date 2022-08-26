import axios from "axios";

async function hello() {
    axios.get("https://google.com/").then((res) => {
        console.log(res.status, res.data)
    })
}

hello();