import axios from "axios";

/**
 *  === createContext ===
 *      createContext 자체는 값을 "사용,소비"하지 않고, 생성하는 역할
 *  
 *      - context 를 사용할 수 있게한다
 *          작성: const MyContext = createContext('기본값');
 *
 *      - provider 를 사용해 context 를 하위 컴포넌트에 전역적으로 전달할 수 있다
 *          작성: <MyContext.Provider value={'제공 데이터 및 함수'}>
 *
 *
 *  === useContext ===
 *      함수형 컴포넌트에서 컨텍스트 값을 "읽고,사용" 하는 훅이다
 *      props drilling 을 피할 수 있다
 *      
 *      - useContext 를 사용할 수 있다
 *      상위 컴포넌트에서 제공하는(가장 가까운 Provider) 값을 가져온다
 *          작성: const value = useContext(MyContext);
 *              createContext 로 생성한 context 의 명칭 MyContext 를 불러와서 사용한다는 뜻이다
 */
import { createContext, useContext } from "react";



// context 생성 기본값 null
const ApiContext = createContext(null);

const api = axios.create({
    baseURL: 'http://localhost:8080',
    withCredentials: true, // 요청에 쿠키나 인증정보가 포함되도록 설정
});

// 인터셉터
api.interceptors.request.use( // 요청이 보내지기 전에 "실행"되는 인터셉너 추가
    (config) => { // config 는 요청객체
        const access = localStorage.getItem('access');
        if (access) { // 로컬 스토리지에 access 토큰이 있는 경우
            config.headers['access'] = access;
        }
        return config
    },
    (error) => { // 실패시
        Promise.reject(error);
    }
)

// 위에서 생성한 api 인스턴스를 컨텍스트를 통해 하위 컴포넌트에 제공하는 컴포넌트
export function ApiProvider({ children }) { // 여기서 children 은 생성된 api 를 제공받는 하위 컴포넌트들 이다
    return <ApiContext.Provider value={api}>{children}</ApiContext.Provider>;
}

// 
export function useApi() {
    const api = useContext(ApiContext); // ApiContext 를 가져온다 / ApiProvider 가 api 를 하위컴포넌트로 보내기 때문에 받을 수 있다
    // api 가 ApiProvider 의 제공 범위를 벗어나 있는 경우에 context 를 사용하려는 경우
    if (!api) throw new Error('useApi는 ApiProvider 안에서 사용해야 합니다');
    return api;
}