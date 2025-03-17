import axios from "axios";

import "./Button.css";

const Button = ({text, url, api}) => {

    // 1. 테스트 연결 확인
    const connectTest = () => {
        api.get(url)
            .then(response => {
                console.log(response);
                console.log("응답 상태 코드: ", response.status);
                console.log("응답 데이터: ", response.data);
            })
            .catch(error => {
                console.log("Error", error);
            });
    }

    return (
        <div className={"Button"}>
            <button onClick={connectTest}>{text}</button>
        </div>
    );
}

export default Button;