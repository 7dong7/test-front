import axios from "axios";
import {useState} from "react";

import "./Button.css";


const RequestHeader = ({text, url, api}) => {

    const connectTest = async () => {
        const access = localStorage.getItem("access");
        console.log("access: ", access)

        try {
            const response = await api({
                method: "post",
                url: url,
                withCredentials: true,
                headers: {
                    access: access // 개별 요청에 헤더 추가
                }
            });

            console.log(response);
            console.log(response.data);
            console.log(response.status);

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

export default RequestHeader;