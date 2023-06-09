import Button from "./Button";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

const App = () => {
    return (
        <div>
            <div>
                <Button primary rounded outline className="mb-5">
                    <GoBell />
                    Click Here!
                </Button>
            </div>
            <div>
                <Button secondary outline>
                    <GoCloudDownload />
                    Click Me!
                </Button>
            </div>
            <div>
                <Button success>No, Me!</Button>
            </div>
            <div>
                <Button warning outline>
                    <GoDatabase />
                    What About Me?
                </Button>
            </div>
            <div>
                <Button danger rounded>
                    Click Click!
                </Button>
            </div>
        </div>
    );
};

export default App;
