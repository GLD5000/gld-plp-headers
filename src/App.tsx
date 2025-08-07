import "./App.css";
import PLPHeaderSection from "../lib/PLPHeaderSection";
import PlpHeader from "../lib/components/header/PlpHeader";
import { DisclosureParagraph } from "../lib/main";

function App() {
  return (
    <>
      <PLPHeaderSection>
        <PlpHeader>PLP Header</PlpHeader>
        <DisclosureParagraph />
      </PLPHeaderSection>
    </>
  );
}

export default App;
