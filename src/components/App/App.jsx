import Contacts from "../Contacts/Contacts";
import Header from "../Header/Header";
import Intro from "../Intro/Intro";

const App = () => {
    return (
        <div className="app">
            <Header />
            <Intro />
            <Contacts />
        </div>
    );
};

export default App;
