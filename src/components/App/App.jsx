import Contacts from "../Contacts/Contacts";
import Gallery from "../Gallery/Gallery";
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
            <Gallery />
        </div>
    );
};

export default App;
