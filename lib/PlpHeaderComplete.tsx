import ButtonWrapper from './components/buttons/ButtonWrapper';
import PLPHeaderSection from './components/PLPHeaderSection';
import PlpHeader from './components/header/PlpHeader';
import DisclosureParagraph from './components/disclosureParagraph/DisclosureParagraph';

export default function PlpHeaderComplete() {
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
