import Contacts from "../Contacts/Contacts";
import Header from "../Header/Header";
import InfoBlock from "../InfoBlock/InfoBlock";
import Intro from "../Intro/Intro";
import Rules from "../Rules/Rules";

const App = () => {
    return (
        <div className="app">
            <Header />
            <Intro />
            <Contacts />
            <InfoBlock />
            <Rules />
        </div>
    );
};

export default App;
