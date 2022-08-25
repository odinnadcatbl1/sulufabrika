import Contacts from "../Contacts/Contacts";
import Header from "../Header/Header";
import InfoBlock from "../InfoBlock/InfoBlock";
import Intro from "../Intro/Intro";

const App = () => {
    return (
        <div className="app">
            <Header />
            <Intro />
            <Contacts />
            <InfoBlock />
        </div>
    );
};

export default App;
