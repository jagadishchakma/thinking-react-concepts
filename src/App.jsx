import User from "./component/User";
import UserContext from "./component/CustomContext";
function App(){
  return(
    <div>
     <UserContext.Provider value={{uname: 'Jagadish', age: 23}}>
      <User></User>
     </UserContext.Provider>
    </div>
  );
};
export default App;