import { classMerge } from "../../utils/twUtils";

export default function ButtonWrapper({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={classMerge(
        "text-black flex flex-wrap md:flex-nowrap",
        className
      )}
    />
  );
}
