import "./App.css";
import PLPHeaderSection from "../lib/PLPHeaderSection";
import PlpHeader from "../lib/components/header/PlpHeader";
import { DisclosureParagraph } from "../lib/main";
import ButtonWrapper from "../lib/components/buttons/ButtonWrapper";

function App() {
  return (
    <>
      <PLPHeaderSection>
        <PlpHeader>PLP Header</PlpHeader>
        <DisclosureParagraph />
        <ButtonWrapper>sdvsdvsdv</ButtonWrapper>
      </PLPHeaderSection>
    </>
  );
}

export default App;
