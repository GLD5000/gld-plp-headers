import { classMerge } from "../utils/twUtils";

export default function PLPHeaderSection({
  className,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section
      {...props}
      className={classMerge("bg-white w-screen min-w-[320px] max-w-[min(100%,1280px)] h-auto grid gap-2 md:gap-4 p-2 md:p-4", className)}
    />
  );
}
