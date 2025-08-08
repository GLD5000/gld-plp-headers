export type DisclosureCopy = {
    intro: string;
    remainder?: string;
};
interface DisclosureParagraphProps extends React.ComponentProps<"p"> {
    copy?: DisclosureCopy;
}
export declare function DisclosureParagraph({ className, copy, ...props }: DisclosureParagraphProps): import("react/jsx-runtime").JSX.Element;
export {};
