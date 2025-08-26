import { classMerge } from '../../utils/twUtils';
import CheckboxHidden from './CheckboxHidden';
import CheckboxLabel from './CheckboxLabel';
import ConditionalSpan from './ConditionalSpan';
import LineClampSpan from './LineClampSpan';

export type DisclosureCopy = { intro: string; remainder?: string };

interface DisclosureParagraphProps extends React.ComponentProps<'p'> {
    copy?: DisclosureCopy;
    id?: string;
    lineClamp?: boolean;
}

export function DisclosureParagraph({
    lineClamp,
    className,
    copy = {
        intro: "Introductory text and teaser words go here. You can click 'Read more' to see the rest.",
        remainder:
            "You will find here the remainder of whatever you need to include and it can be hidden when not needed by clicking 'Read less'.",
    },
    id = 'gld-read-more',
    ...props
}: DisclosureParagraphProps) {
    const returnElements = getReturnElements(copy, id, lineClamp);

    return (
        <p
            {...props}
            className={classMerge(
                'bg-white w-full text-black text-center text-lg mx-auto p-2',
                className
            )}
        >
            {returnElements}
        </p>
    );
}
function processIntroString(intro: string, remainder: string | undefined) {
    const punctuationRegex = /[^\w]$/;
    const trimmedIntro = intro.trim();
    const strippedIntro = remainder
        ? trimmedIntro.replace(punctuationRegex, '')
        : trimmedIntro;
    const hasPunctuation = strippedIntro !== trimmedIntro;
    return { strippedIntro, hasPunctuation };
}

function getReturnElements(
    copy: DisclosureCopy,
    id: string,
    lineClamp?: boolean
) {
    const { intro, remainder } = copy;
    const { strippedIntro, hasPunctuation } = processIntroString(
        intro,
        remainder
    );
    return lineClamp ? (
        <>
            <CheckboxHidden id={id} />
            <LineClampSpan>{intro.trim()}</LineClampSpan>
            <CheckboxLabel id={id}></CheckboxLabel>
        </>
    ) : (
        <>
            {remainder && <CheckboxHidden id={id} />}
            <span>{strippedIntro}</span>
            {hasPunctuation && (
                <ConditionalSpan comment="End punctuation" initiallyHidden>
                    {intro.trim().at(-1)}
                </ConditionalSpan>
            )}
            {remainder && (
                <>
                    <ConditionalSpan comment="Ellipses">...</ConditionalSpan>
                    <ConditionalSpan
                        comment="Remainder Copy"
                        initiallyHidden
                    >{` ${remainder.trim()}`}</ConditionalSpan>
                    <CheckboxLabel id={id} />
                </>
            )}
        </>
    );
}
