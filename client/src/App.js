import './App.css';

function App() {
    let quote = "A Quote Here"
    let image = window.location.origin + "/monday.png";
    let now = new Date();
    return (
        <div id="bg" style={{ background: "url(" + image + ")" }} >
            <div id="layer" >
            <h2>{now.getHours()} : {now.getMinutes()}</h2>
                <h2>{quote}</h2>
            </div>
        </div>
    );
}

export default App;