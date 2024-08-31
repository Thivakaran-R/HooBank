import logo from "./logo.svg";
import "./App.css";
import Head from "./section/Navigation/Head";
import Home from "./section/Home/Home";
import View from "./section/View/Mil";
import Mil from "./section/View/Mil";
import Reward from "./section/rewards/Reward";
import Pay from "./section/payment/Pay";
import Analysis from "./section/Analysis/Analysis";
import Feedback from "./section/Analysis/Feedback";
import Chat from "./section/people/Chat";
import Brand from "./section/Brand/Brand";
import Service from "./section/Service/Service";
import Footers from "./section/Footers/Footers";
import Copyright from "./section/Copyright/Copyright";

function App() {
  return (
    <div className="App">
      <Head />
      <Home />
      <Mil />
      <Reward />
      <Pay />
      <Analysis />
      <Feedback />
      <Chat />
      <Brand />
      <Service />
      <Footers/>
      <Copyright/>
    </div>
  );
}

export default App;
