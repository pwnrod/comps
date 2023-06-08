import Button from "./Button";

const App = () => {
    return (
        <div>
            <div>
                <Button primary>Click Here!</Button>
            </div>
            <div>
                <Button secondary>Click Me!</Button>
            </div>
            <div>
                <Button success>No, Me!</Button>
            </div>
            <div>
                <Button warning>What About Me?</Button>
            </div>
            <div>
                <Button danger>Click Click!</Button>
            </div>
        </div>
    );
};

export default App;
