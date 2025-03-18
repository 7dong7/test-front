import axios from "axios";
import {useState} from "react";

import "./Button.css";


const RequestButton = ({text, url, api}) => {
    const [user, setUser] = useState({
        username: '',
        email: ''
    });

    // 1. 테스트 연결 확인
    const connectTest = async () => {


        try {
            const response = await api({
                method: "post",
                url: url,
                data: {
                    username: "홍길",
                    email: "hong@gamil.com"
                }
            });

            console.log(response);
            console.log(response.data);
            console.log(response.status);

            setUser({
                username: response.data.username,
                email: response.data.email
            })
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

export default RequestButton;