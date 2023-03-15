import { ChatEngine } from "react-chat-engine";

import ChatFeed from "./component/ChatFeed";
import LoginForm from "./component/LoginForm";
import "./App.css";

const App = () => {
    if(!localStorage.getItem("username")) return <LoginForm/>;
     
    return (
        <ChatEngine
      height="100vh"
      projectID="95ab9e38-c8c9-44d9-970e-5a348058d5af"
      userName='lucifer'
      userSecret='123456'
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      
    />
    );
};

export default App;