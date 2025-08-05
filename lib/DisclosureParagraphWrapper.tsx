import { classMerge } from "./utils/twUtils";

export default function DisclosureParagraphWrapper({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <>
      {" "}
      <style
        dangerouslySetInnerHTML={{
          __html: `
.read-more-state {
  display: none;
}

.read-more-target {
  // opacity: 0;
  // max-height: 0;
  // font-size: 0;
  // transition: .15s ease;
  display: none;
}
.read-more-state:checked ~ .read-more-wrap .read-more-target {
display: inline;
  // opacity: 1;
  // font-size: inherit;
  // max-height: 999em;
}
.read-more-ellipses {
display: inline;
}
.read-more-state:checked ~ .read-more-wrap .read-more-ellipses {
display: none;
}


.read-more-state ~ .read-more-trigger:before {
  content: 'Show more';
}

.read-more-state:checked ~ .read-more-trigger:before {
  content: 'Show less';
}

.read-more-trigger {
  // cursor: pointer;
  // display: inline-block;
  // padding: 0 .5em;
  // color: #666;
  // font-size: .9em;
  // line-height: 2;
  // border: 1px solid #ddd;
  // border-radius: .25em;
}
`,
        }}
      ></style>
      <div {...props} className={classMerge("bg-white w-full", className)}>  <input type="checkbox" className="read-more-state" id="post-1" />


        {children}
  <label htmlFor="post-1" className="read-more-trigger cursor-pointer inline-block text-black underline font-bold"></label>
      </div>
    </>
  );
}
