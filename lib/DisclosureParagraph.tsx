import { classMerge } from "./utils/twUtils";

interface DisclosureParagraphProps extends React.ComponentProps<"p"> {
  copy?: { intro: string; remainder: string };
}

export default function DisclosureParagraph({
  className,
  copy = {
    intro: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero",
    remainder:
      "fuga facilis vel consectetur quos sapiente deleniti eveniet dolores tempore eos deserunt officia quis ab? Excepturi vero tempore        minus beatae voluptatem!",
  },
  ...props
}: DisclosureParagraphProps) {
  const { intro, remainder } = copy;
  const trimmedIntro = intro.trim();
  const trimmedRemainder = remainder.trim();
  return (
    <p
      className={classMerge("read-more-wrap inline text-black text-base", className)}
      {...props}
    >
      {trimmedIntro}
      <span className="read-more-ellipses">...{"  "}</span>
      <span className="read-more-target">{` ${trimmedRemainder}`}</span>
      {"  "}
    </p>
  );
}
