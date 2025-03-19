import './App.css'
import TestConnect from "./component/TestConnect.jsx";

// api 설정
import { ApiProvider } from "./ApiContext.jsx";

function App() {

  return (
    <>
        <ApiProvider>
            <TestConnect />
        </ApiProvider>
    </>
  )
}

export default App
