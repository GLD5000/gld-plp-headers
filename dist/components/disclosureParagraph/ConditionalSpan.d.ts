interface ConditionalSpanProps extends React.ComponentProps<"span"> {
    initiallyHidden?: boolean;
    comment?: string;
}
export default function ConditionalSpan({ className, initiallyHidden, comment, ...props }: ConditionalSpanProps): import("react/jsx-runtime").JSX.Element;
export {};
