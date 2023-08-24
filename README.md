# Thinking React Render Props Via Twice Concept

<img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" width="50" height="50"/>

- passing a function props
- passing a children props
    - that is called render props in thinking react


# For example - passing a children props:  
```jsx
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

```
# For example - passing a function props:  

```jsx
import ClickCounter from "./components/ClickCounter";
import CountHandler from "./components/CountHandler";
import HoverCounter from "./components/HoverCounter";

function App(){
  return(
    <>
      <CountHandler commonFunc={(count, countHandler) => <ClickCounter count={count} countHandler={countHandler}/>}/>
     
      <CountHandler commonFunc={(count, countHandler) => <ClickCounter count={count} countHandler={countHandler}/>}/>
    </>
  )
};
export default App;

```