import Container from "./components/Container";
import ImageBox from "./components/ImageBox";
import InfoBox from "./components/InfoBox";

function App() {
  return (
    <div className="App">
      <Container>
        <div className="h-auto w-10/12 sm:h-3/6 sm:w-12/12 max-w-xl bg-white rounded-xl  overflow-hidden sm:flex">
          <ImageBox />
          <InfoBox />
        </div>
      </Container>
    </div>
  );
}

export default App;
