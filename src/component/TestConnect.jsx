import axios from "axios";

import "./TestConnect.css";


const api = axios.create({
    baseURL: 'http://localhost:8080',
});

import Button from "./Button.jsx";

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

            <br />

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
        </div>
    );
}

export default TestConnect;
