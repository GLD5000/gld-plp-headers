import { classMerge } from '../../utils/twUtils';

export function BannerTitleH1({
    className,
    ...props
}: React.ComponentProps<'h1'>) {
    return (
        <h1
            {...props}
            className={classMerge(
                'text-black text-5xl max-w-full text-center mx-auto',
                className
            )}
        />
    );
}
