import { classMerge } from "../../utils/twUtils";
import CheckboxHidden from "./CheckboxHidden";
import CheckboxLabel from "./CheckboxLabel";
import ConditionalSpan from "./ConditionalSpan";

type DisclosureCopy = { intro: string; remainder?: string };

interface DisclosureParagraphProps extends React.ComponentProps<"p"> {
  copy?: DisclosureCopy;
}

export default function DisclosureParagraph({
  className,
  copy = {
    intro:
      "Introductory text and teaser words go here. You can click 'Show more' to see the rest.",
    remainder:
      "You will find here the remainder of whatever you need to include and it can be hidden when not needed by clicking 'Show less'.",
  },
  ...props
}: DisclosureParagraphProps) {
  const returnElements = getReturnElements(copy);

  return (
    <p
      {...props}
      className={classMerge("bg-white w-full text-black", className)}
    >
      {returnElements}
    </p>
  );
}
function processIntroString(intro: string, remainder: string | undefined) {
  const punctuationRegex = /[^\w]$/;
  const trimmedIntro = intro.trim();
  const strippedIntro = remainder
    ? trimmedIntro.replace(punctuationRegex, "")
    : trimmedIntro;
  const hasPunctuation = strippedIntro !== trimmedIntro;
  return { strippedIntro, hasPunctuation };
}

function getReturnElements(copy: DisclosureCopy) {
  const { intro, remainder } = copy;
  const { strippedIntro, hasPunctuation } = processIntroString(
    intro,
    remainder
  );
  return (
    <>
      {remainder && <CheckboxHidden />}
      <span>{strippedIntro}</span>
      {hasPunctuation && (
        <ConditionalSpan comment="End punctuation" initiallyHidden>
          {intro.trim().at(-1)}
        </ConditionalSpan>
      )}
      {remainder && (
        <>
          <ConditionalSpan comment="Ellipses">...</ConditionalSpan>
          <ConditionalSpan
            comment="Remainder Copy"
            initiallyHidden
          >{` ${remainder.trim()}`}</ConditionalSpan>
          <CheckboxLabel />{" "}
        </>
      )}
    </>
  );
}
