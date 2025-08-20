import { classMerge } from '../../utils/twUtils';

export default function CheckboxLabel({
    className,
    ...props
}: React.ComponentProps<'label'>) {
    return (
        <label
            {...props}
            style={{ font: 'inherit' }}
            className={classMerge(
                "cursor-pointer font-normal text-inherit inline-block peer-checked:block ml-2 peer-checked:mx-auto underline after:content-['Read_more'] peer-checked:after:content-['Read_less']",
                className
            )}
            htmlFor="gld-read-more"
        />
    );
}
