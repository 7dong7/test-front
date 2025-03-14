import axios from "axios";


const TestConnect = () => {

    axios.get("http://localhost:8080/test")
        .then( response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log("Error", error);
        })

    return (
        <div>hi</div>
    );
}

export default TestConnect;
