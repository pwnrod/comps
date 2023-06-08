import Button from "./Button";

const App = () => {
    return (
        <div>
            <div>
                <Button primary rounded outline>
                    Click Here!
                </Button>
            </div>
            <div>
                <Button secondary outline>
                    Click Me!
                </Button>
            </div>
            <div>
                <Button success>No, Me!</Button>
            </div>
            <div>
                <Button warning outline>
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
