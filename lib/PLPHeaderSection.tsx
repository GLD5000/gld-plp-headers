import DisclosureParagraph from "./DisclosureParagraph";
import DisclosureParagraphWrapper from "./DisclosureParagraphWrapper";

export default function PLPHeaderSection({
  className,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section>
      <DisclosureParagraphWrapper>
        <DisclosureParagraph />
      </DisclosureParagraphWrapper>
    </section>
  );
}
