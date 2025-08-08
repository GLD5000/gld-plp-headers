import ButtonWrapper from "./components/buttons/ButtonWrapper";
import CategoryBannerSection from "./components/CategoryBannerSection";
import BannerTitleH1 from "./components/bannerTitle/bannerTitleH1";
import DisclosureParagraph, {
  type DisclosureCopy,
} from "./components/disclosureParagraph/DisclosureParagraph";
import LinkButton from "./components/buttons/LinkButton";

type linkButton = {
  url: string;
  cta: string;
};

interface PlpHeaderCompleteProps {
  disclosureCopy?: DisclosureCopy;
  buttons?: linkButton[];
}

export default function PlpHeaderComplete({
  disclosureCopy = {
    intro:
      "Introductory text and teaser words go here. You can click 'Read more' to see the rest.",
    remainder:
      "You will find here the remainder of whatever you need to include and it can be hidden when not needed by clicking 'Read less'.",
  },
  buttons = [
    { url: "Missing Link", cta: "Call to Action" },
    { url: "Missing Link", cta: "Call to Action" },
    { url: "Missing Link", cta: "Call to Action" },
    { url: "Missing Link", cta: "Call to Action" },
    { url: "Missing Link", cta: "Call to Action" },
    { url: "Missing Link", cta: "Call to Action" },
  ],
}: PlpHeaderCompleteProps) {
  return (
    <CategoryBannerSection>
      <BannerTitleH1>PLP Header</BannerTitleH1>
      <DisclosureParagraph copy={disclosureCopy} />
      <ButtonWrapper>
        {buttons.map((button, index) => (
          <LinkButton href={button.url} key={`button-${index}-${button.cta}`}>
            {button.cta}
          </LinkButton>
        ))}
      </ButtonWrapper>
    </CategoryBannerSection>
  );
}
