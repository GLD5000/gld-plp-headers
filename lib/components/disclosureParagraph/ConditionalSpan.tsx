import { classMerge } from '../../utils/twUtils';

interface ConditionalSpanProps extends React.ComponentProps<'span'> {
    initiallyHidden?: boolean;
    comment?: string;
}
export default function ConditionalSpan({
    className,
    initiallyHidden,
    comment,
    ...props
}: ConditionalSpanProps) {
    return (
        <>
            <span
                data-comment={comment && `${comment}`}
                {...props}
                className={classMerge(
                    initiallyHidden
                        ? 'hidden peer-checked:inline'
                        : 'inline peer-checked:hidden',
                    className
                )}
            />
        </>
    );
}
