import { RenderProvider } from "./contexts/rendercontext";
import { ScrollProvider } from "./contexts/scrollcontext";
import Main from "./pages/main";

function App() {
  return (
    <RenderProvider>
      <ScrollProvider>
        <div className="bg-gray-900 text-white font-sans">
          <Main />
        </div>
      </ScrollProvider>
    </RenderProvider>
    
  );
}

export default App;
