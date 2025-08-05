import DisclosureParagraph from "./DisclosureParagraph";
import DisclosureParagraphWrapper from "./DisclosureParagraphWrapper";
import { classMerge } from "./utils/twUtils";

export default function PLPHeaderSection({
  className,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section
      {...props}
      className={classMerge("bg-white w-full h-auto", className)}
    >
      <DisclosureParagraphWrapper>
        <DisclosureParagraph />
      </DisclosureParagraphWrapper>
    </section>
  );
}
