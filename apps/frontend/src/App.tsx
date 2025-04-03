import { ThemeShowcase } from "./components/ThemeShowcase";
import { ThemeProvider } from "./components/ui/theme-provider";

function App() {
  return (
    <ThemeProvider>
      <ThemeShowcase />
    </ThemeProvider>
  );
}

export default App;
