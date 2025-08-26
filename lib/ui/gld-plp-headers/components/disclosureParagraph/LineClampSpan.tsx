import { classMerge } from '../../utils/twUtils';

export default function LineClampSpan({
    className,

    ...props
}: React.ComponentProps<'span'>) {
    return (
        <span
            {...props}
            className={classMerge(
                'line-clamp-1 peer-checked:line-clamp-none',
                className
            )}
        />
    );
}
