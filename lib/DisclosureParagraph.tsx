import { classMerge } from "./utils/twUtils";

export default function DisclosureParagraph({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
      <div {...props} className={classMerge('bg-white w-full', className)}>
      <style dangerouslySetInnerHTML={{
        __html:`
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
`}}>

</style>
  <input type="checkbox" className="read-more-state" id="post-1" />

      <p className="read-more-wrap inline text-black">Lorem ipsum dolor sit amet, consectetur adipisicing elit.<span className="read-more-ellipses">...{'  '}</span> <span className="read-more-target">Libero fuga facilis vel consectetur quos sapiente deleniti eveniet dolores tempore eos deserunt officia quis ab? Excepturi vero tempore minus beatae voluptatem!</span>
      </p>
  
  <label htmlFor="post-1" className="read-more-trigger cursor-pointer inline-block text-black"></label>
</div>
  );
}
