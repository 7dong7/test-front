import axios from "axios";

import "./TestConnect.css";


const api = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json'
    }
});

import Button from "./Button.jsx";
import RequestButton from "./RequestButton.jsx";
import PathButton from "./PathButton.jsx";

const TestConnect = () => {

    // axios.get("http://localhost:8080/test")
    //     .then(response => {
    //         console.log(response.data);
    //     })
    //     .catch(error => {
    //         console.log("Error", error);
    //     });


    return (
        <div className={"TextConnect"}>
            {/* 1. 테스트 연결 확인 */}
            <Button text={"(단순) String 테스트"} url={"/api/text"} api={api}/>
            {/* 2. dto 응답 테스트 */}
            <Button text={"(단순) dto 응답 테스트"} url={"/api/dto"} api={api}/>
            {/* 3. map 응답 테스트 */}
            <Button text={"(단순) map 응답 테스트"} url={"/api/map"} api={api}/>

            <br/>

            {/* 4. 상태변환 String 응답 테스트 */}
            <div className={"status_request"}>
                <Button text={"(Ok 응답) String 응답 테스트"} url={"/api/statusTextOk"} api={api}/>
                <Button text={"(Bad 응답) String 응답 테스트"} url={"/api/statusTextBad"} api={api}/>
            </div>

            {/* 5. 상태변환 dto 응답 테스트 */}
            <div className={"status_request"}>
                <Button text={"(Ok 응답) dto 응답 테스트"} url={"/api/statusDtoOk"} api={api}/>
                <Button text={"(Bad 응답) dto 응답 테스트"} url={"/api/statusDtoBad"} api={api}/>
            </div>

            {/* 6. 상태변환 dto 응답 테스트 */}
            <div className={"status_request"}>
                <Button text={"(Ok 응답) map 응답 테스트"} url={"/api/statusMapOk"} api={api}/>
                <Button text={"(Bad 응답) map 응답 테스트"} url={"/api/statusMapBad"} api={api}/>
            </div>

            <br/>
            <div className={"status_request"}>
                {/* 7. JSON 데이터를 백으로 보내기 테스트*/}
                <RequestButton text={"백으로 데이터 보내기"} url={"/api/requestData"} api={api}/>
            </div>

            <br/>
            <div className={"status_request"}>
                {/* 8. 백에서 path variable 을 받기 테스트 */}
                <PathButton text={"경로 데이터 보내기"} url={`/api/path`} api={api}/>
            </div>

            <br/><br/><br/>
            <div className={"status_request"}>
                {/* 8. 백에서 path variable 을 받기 테스트 */}
                <RequestButton text={"Header & Cookie 값 받기"} url={`/api/HeaderAndCookie`} api={api}/>
            </div>

        </div>
    );
}

export default TestConnect;
