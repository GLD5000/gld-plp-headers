import { classMerge } from "./utils/twUtils";

interface DisclosureParagraphProps extends React.ComponentProps<"p"> {
  copy?: { intro: string; remainder: string };
}

export default function DisclosureParagraph({
  className,
  copy = {
    intro: "Introductory text and words go here. Click 'Show more' to see the rest.",
    remainder:
      "You will find here the remainder of whatever you need to include and it can be hidden when not needed by clicking 'Show less'.",
  },
  ...props
}: DisclosureParagraphProps) {
  const { intro, remainder } = copy;
  const punctuationRegex = /[^\w]$/;
  const trimmedIntro = intro.trim().replace(punctuationRegex, "");
  const hasPunctuation = trimmedIntro.length !== intro.trim().length;
  const trimmedRemainder = remainder.trim();

  return (
    <p
      {...props}
      className={classMerge("bg-white w-full text-black", className)}
    >
      <input type="checkbox" className="intro peer hidden" id="gld-read-more" />
      {trimmedIntro}
      {hasPunctuation && (
        <span className="full-stop hidden peer-checked:inline">
          {intro.trim().at(-1)}
        </span>
      )}
      <span className="ellipses inline peer-checked:hidden">...</span>
      <span className="paragraph hidden peer-checked:inline">{` ${trimmedRemainder}`}</span>
      <label
        htmlFor="gld-read-more"
        className="cursor-pointer inline-block ml-2 underline font-bold after:content-['Show_more'] peer-checked:after:content-['Show_less']"
      />
    </p>
  );
}
