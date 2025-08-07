import DisclosureParagraph from "./components/disclosureParagraph/DisclosureParagraph";
import PlpHeader from "./components/header/PlpHeader";
import { classMerge } from "./utils/twUtils";

export default function PLPHeaderSection({
  className,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section
      {...props}
      className={classMerge("bg-white w-screen max-w-7xl h-auto grid gap-2 md:gap-4 p-2 md:p-4", className)}
    >
      <PlpHeader>PLP Header</PlpHeader>
        <DisclosureParagraph />
    </section>
  );
}
