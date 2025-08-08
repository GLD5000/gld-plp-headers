import "./App.css";
import PLPHeaderSection from "../lib/components/PLPHeaderSection";
import PlpHeader from "../lib/components/header/PlpHeader";
import ButtonWrapper from "../lib/components/buttons/ButtonWrapper";
import DisclosureParagraph from "../lib/components/disclosureParagraph/DisclosureParagraph";

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
