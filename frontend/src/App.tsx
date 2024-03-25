import AppToolBar from "./components/appbar/AppToolBar.tsx";
import {Route, Routes} from "react-router-dom";
import SendMessage from "./components/message/SendMessage.tsx";

function App() {

  return (
    <>
      <header>
        <AppToolBar/>
      </header>
      <main>
        <Routes>
            <Route path='send' element={<SendMessage/>}/>
        </Routes>
      </main>
    </>
  )
}

export default App
