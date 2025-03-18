import axios from "axios";
import {useState} from "react";

import {useParams} from "react-router-dom";

import "./Button.css";

const PathButton = ({text, url, api}) => {
    const params = useParams();

    // 1. 테스트 연결 확인
    const connectTest = async () => {

        try {
            const response = await api({
                method: "get",
                url: url+"/"+String(22)
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

export default PathButton;