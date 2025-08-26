export default function CheckboxHidden({
    id = 'gld-read-more',
}: {
    id?: string;
}) {
    return <input type="checkbox" className="peer hidden" id={id} />;
}
