import { DisclosureCopy } from './disclosureParagraph/DisclosureParagraph';
type linkButton = {
    url: string;
    cta: string;
};
interface PlpHeaderCompleteProps {
    disclosureCopy?: DisclosureCopy;
    buttons?: linkButton[];
}
export declare function PlpHeaderComplete({ disclosureCopy, buttons, }: PlpHeaderCompleteProps): import("react/jsx-runtime").JSX.Element;
export {};
