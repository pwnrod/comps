import Button from "./Button";

const App = () => {
    return (
        <div>
            <div>
                <Button success primary>
                    Click Here!
                </Button>
            </div>
            <div>
                <Button>Click Me!</Button>
            </div>
            <div>
                <Button>No, Me!</Button>
            </div>
            <div>
                <Button>What About Me?</Button>
            </div>
            <div>
                <Button>Click Click!</Button>
            </div>
        </div>
    );
};

export default App;
