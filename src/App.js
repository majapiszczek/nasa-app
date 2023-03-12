import "./App.css";

function App() {
  const apiKey = "sDb8iiEZI57VCsfkNMl0Gk8XVhPtgkNQg9jxlHK1";
  const apiUrl = `https: //api.nasa.gov/insight_weather/?api_key=${apiKey}&feedtype=json&ver=1.0`;

  return (
    <div className="App">
      <h1>hello</h1>
      <a href={apiUrl}>link</a>
    </div>
  );
}

export default App;
