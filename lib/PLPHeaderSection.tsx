import DisclosureParagraph from "./components/disclosureParagraph/DisclosureParagraph";
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
        <DisclosureParagraph />
    </section>
  );
}
