import { ScrollProvider } from "./contexts/scrollcontext";
import Main from "./pages/main";

function App() {
  return (
    <ScrollProvider>
      <div className="bg-gray-900 text-white font-sans">
        <Main />
      </div>
    </ScrollProvider>
  );
}

export default App;
