import { classMerge } from "../../utils/twUtils";

/**
 * Description placeholder
 *
 * @export
 * @param {React.ComponentProps<"div">} param0 
 * @param {React.ComponentProps<"div">} param0.className 
 * @param {React.ComponentProps<"div">} param0....props 
 * @returns {*} 
 */
export default function ButtonWrapper({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={classMerge(
        "text-black flex flex-wrap gap-y-2 gap-x-4 min-[360px]:flex-nowrap min-[360px]:overflow-x-auto w-fit min-[360px]:w-fit min-[360px]:max-w-full mx-auto justify-center min-[360px]:justify-start min-[360px]:pb-2",
        className
      )}
    />
  );
}
