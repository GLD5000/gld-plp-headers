import { classMerge } from "../../utils/twUtils";

export default function PlpHeader({
  className,
  ...props
}: React.ComponentProps<"h1">) {
  return (
    <h1
      {...props}
      className={classMerge(
        "text-black text-xl",
        className
      )}
    />
  );
}
