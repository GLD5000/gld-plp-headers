import { classMerge } from "../../utils/twUtils";

export default function CheckboxLabel({
  className,
  ...props
}: React.ComponentProps<"label">) {
  return (
    <label
      {...props}
      className={classMerge(
        "cursor-pointer inline-block ml-2 underline after:content-['Read_more'] peer-checked:after:content-['Read_less']",
        className
      )}
      htmlFor="gld-read-more"
    />
  );
}
