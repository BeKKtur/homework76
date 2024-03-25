import AppToolBar from "./components/appbar/AppToolBar";
import {Route, Routes} from "react-router-dom";
import SendMessage from "./components/message/SendMessage";
import Messages from "./components/message/Messages";

function App() {

  return (
    <>
      <header>
        <AppToolBar/>
      </header>
      <main>
        <Routes>
            <Route path='/' element={<Messages/>} />
            <Route path='send' element={<SendMessage/>}/>
        </Routes>
      </main>
    </>
  )
}

export default App
