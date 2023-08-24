import ClickCounter from "./components/ClickCounter";
import CountHandler from "./components/CountHandler";
import HoverCounter from "./components/HoverCounter";

function App(){
  return(
    <>
      <CountHandler>
      {(count, countHandler) => <ClickCounter count={count} countHandler={countHandler}/>}
      </CountHandler>
      <CountHandler>
      {(count, countHandler) => <HoverCounter count={count} countHandler={countHandler}/>}
      </CountHandler>
    </>
  )
};
export default App;