import { classMerge } from "./utils/twUtils";

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
      {remainder && (
        <input
          type="checkbox"
          className="intro peer hidden"
          id="gld-read-more"
        />
      )}
      {strippedIntro}
      {hasPunctuation && (
        <span className="full-stop hidden peer-checked:inline">
          {intro.trim().at(-1)}
        </span>
      )}
      {remainder && (
        <>
          <span className="ellipses inline peer-checked:hidden">...</span>
          <span className="paragraph hidden peer-checked:inline">{` ${remainder.trim()}`}</span>
          <label
            htmlFor="gld-read-more"
            className="cursor-pointer inline-block ml-2 underline font-bold after:content-['Show_more'] peer-checked:after:content-['Show_less']"
          />
        </>
      )}
    </>
  );
}
