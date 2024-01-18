// Layout
import TheHeader from "./Components/Layout/TheHeader.js"
import TheFooter from "./Components/Layout/TheFooter.js"

// Main Content
import MainContent from "./Components/Main/MainContent.js"

function App() {
  return (
    <div className="flex flex-col h-screen">
      <TheHeader />
      <MainContent />
      <TheFooter />
    </div>
  );
}

export default App;
