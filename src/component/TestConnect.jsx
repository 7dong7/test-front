import axios from "axios";

import "./TestConnect.css";

import GetButton from "./GetButton.jsx";
import Button from "./Button.jsx";
import RequestButton from "./RequestButton.jsx";
import PathButton from "./PathButton.jsx";
import RequestHeaderCookie from "./RequestHeaderCookie.jsx";
import RequestHeader from "./RequestHeader.jsx";
import {useContext} from "react";

// 컨텍스트
import {ApiProvider, useApi} from "../ApiContext.jsx";


// const api = axios.create({
//     baseURL: 'http://localhost:8080',
//     headers: {
//         'Content-Type': 'application/json'
//     }
// });

const TestConnect = () => {
    /**
     *  ApiContext 에 설정된 api 값을 가져와서 사용한다 (ApiContext 확인)
     *      createContext, useContext, interceptor
     */
    const api = useApi();

    return (
        <div className={"TextConnect"}>
            {/* 1. 테스트 연결 확인 */}
            <GetButton text={"(단순) String 테스트"} url={"/api/text"} api={api}/>
            {/*/!* 2. dto 응답 테스트 *!/*/}
            {/*<Button text={"(단순) dto 응답 테스트"} url={"/api/dto"} api={api}/>*/}
            {/*/!* 3. map 응답 테스트 *!/*/}
            {/*<Button text={"(단순) map 응답 테스트"} url={"/api/map"} api={api}/>*/}

            {/*<br/>*/}

            {/*/!* 4. 상태변환 String 응답 테스트 *!/*/}
            {/*<div className={"status_request"}>*/}
            {/*    <Button text={"(Ok 응답) String 응답 테스트"} url={"/api/statusTextOk"} api={api}/>*/}
            {/*    <Button text={"(Bad 응답) String 응답 테스트"} url={"/api/statusTextBad"} api={api}/>*/}
            {/*</div>*/}

            {/*/!* 5. 상태변환 dto 응답 테스트 *!/*/}
            {/*<div className={"status_request"}>*/}
            {/*    <Button text={"(Ok 응답) dto 응답 테스트"} url={"/api/statusDtoOk"} api={api}/>*/}
            {/*    <Button text={"(Bad 응답) dto 응답 테스트"} url={"/api/statusDtoBad"} api={api}/>*/}
            {/*</div>*/}

            {/*/!* 6. 상태변환 dto 응답 테스트 *!/*/}
            {/*<div className={"status_request"}>*/}
            {/*    <Button text={"(Ok 응답) map 응답 테스트"} url={"/api/statusMapOk"} api={api}/>*/}
            {/*    <Button text={"(Bad 응답) map 응답 테스트"} url={"/api/statusMapBad"} api={api}/>*/}
            {/*</div>*/}

            {/*<br/>*/}
            {/*<div className={"status_request"}>*/}
            {/*    /!* 7. JSON 데이터를 백으로 보내기 테스트*!/*/}
            {/*    <RequestButton text={"백으로 데이터 보내기"} url={"/api/requestData"} api={api}/>*/}
            {/*</div>*/}

            <br/>
            <div className={"status_request"}>
                {/* 8. 백에서 path variable 을 받기 테스트 */}
                <PathButton text={"경로 데이터 보내기"} url={`/api/path`} api={api}/>
            </div>

            <br/><br/><br/>
            <div className={"status_request"}>
                {/* 9. 백에서 Header & Cookie 값 받기 (받은 값 localStorage 에 담기*/}
                <RequestHeaderCookie text={"Header & Cookie 값 받기"} url={`/api/HeaderAndCookie`} api={api}/>
                {/* 10. localStorage 의 값 꺼내서 다시 요청하기 */}
                <RequestHeader text={"LocalStorage 값 Header에 담아서 요청"} url={`/api/RequestHeader`} api={api}/>
            </div>
        </div>
    );
}

export default TestConnect;
