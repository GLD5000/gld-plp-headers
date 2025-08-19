import { classMerge } from '../../utils/twUtils';

/**
 * Description placeholder
 *
 * @export
 * @param {React.ComponentProps<"div">} param0
 * @param {React.ComponentProps<"div">} param0.className
 * @param {React.ComponentProps<"div">} param0....props
 * @returns {*}
 */
export function ButtonWrapper({
    className,
    ...props
}: React.ComponentProps<'div'>) {
    return (
        <div
            {...props}
            className={classMerge(
                'text-black flex flex-wrap w-fit h-auto gap-y-2 gap-x-4 mx-auto justify-center sm:flex-nowrap sm:overflow-x-auto sm:w-fit sm:max-w-full sm:justify-start sm:pb-2',
                className
            )}
        />
    );
}
