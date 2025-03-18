import axios from "axios";
import {useState} from "react";

import "./Button.css";


const RequestHeaderCookie = ({text, url, api}) => {
    const [user, setUser] = useState({
        username: '',
        email: ''
    });

    const connectTest = async () => {
        try {
            const response = await api({
                method: "post",
                url: url,
                withCredentials: true,
                data: {
                    username: "홍길",
                    email: "hong@gamil.com"
                }
            });

            console.log(response);
            console.log(response.data);
            console.log(response.status);
            console.log(response.headers["access"]);

            localStorage.setItem("access", response.headers["access"]);

        } catch (error) {
            console.log("error: ", error);
        }
    };

    return (
        <div className={"Button"}>
            <button onClick={connectTest}>{text}</button>
        </div>
    );
}

export default RequestHeaderCookie;