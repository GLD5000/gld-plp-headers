export default function CheckboxLabel() {
  return (
          <label
            htmlFor="gld-read-more"
            className="cursor-pointer inline-block ml-2 underline font-bold after:content-['Read_more'] peer-checked:after:content-['Read_less']"
          />
  )
}