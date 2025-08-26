import { classMerge } from "../../utils/twUtils";

interface CheckboxLabelProps extends React.ComponentProps<"label"> {
  id: string;
}

export default function CheckboxLabel({
  id,
  className,
  ...props
}: CheckboxLabelProps) {
  return (
    <label
      data-label-type="gld-checkbox"
      {...props}
      style={{ font: "inherit" }}
      onKeyDown={(event) => {
        if (event.key === " " || event.key === "Enter") {
          event.preventDefault();
          event.currentTarget.click();
        }
      }}
      tabIndex={0}
      className={classMerge(
        "cursor-pointer font-normal text-inherit inline-block w-fit px-1 peer-checked:block ml-2 peer-checked:mx-auto underline after:content-['Read_more'] peer-checked:after:content-['Read_less'] focus-visible:outline-1",
        className
      )}
      htmlFor={id}
    />
  );
}
//ADD on EXPORT
//onkeydown="if(event.key===' ' || event.key==='Enter') { event.preventDefault(); this.click(); }"
