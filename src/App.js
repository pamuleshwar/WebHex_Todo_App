import { Provider } from "react-redux";
import Body from "./component/Body";
import todoStore from "./utils/todoStore";

function App() {
  return (
    <div className="">
      <Provider store={todoStore}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
