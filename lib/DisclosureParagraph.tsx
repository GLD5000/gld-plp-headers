import { classMerge } from "./utils/twUtils";

export default function DisclosureParagraph({
  className,
  ...props
}: React.ComponentProps<"details">) {
  return (
    <>
      <details
        className={classMerge("group text-base text-center", className)}
        {...props}
      >
        <summary>
          summary summary summary summary
          <span className="inline group-open:hidden">
            ... <span className="underline cursor-pointer"> Read More</span>
          </span>
          <span className="hidden group-open:inline">
            {" "}
            details details details details details details details details
            details details details details details details
          </span>
          <span className="hidden group-open:block underline cursor-pointer">
            Read Less
          </span>
        </summary>
      </details>
      <style
        dangerouslySetInnerHTML={{
          __html: `summary { list-style: none !important; }
            details summary::-webkit-details-marker,details summary::marker {
  content: none !important;
}`,
        }}
      ></style>
    </>
  );
}
