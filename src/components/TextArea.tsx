interface TextAreaProps {
  label: string
  value: string
  type: string
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export default function TextArea({
  label,
  value,
  type,
  handleChange,
}: TextAreaProps) {
  return (
    <fieldset className='grid h-fit gap-1'>
      <label
        htmlFor={label.toLowerCase()}
        className='block text-sm translate-x-1 font-medium text-gray-600'
      >
        {label}
      </label>
      <textarea
        id={label.toLowerCase()}
        name={label.toLowerCase()}
        className='w-full h-56 p-2 border rounded-lg resize-none'
        value={value}
        onChange={handleChange}
        disabled={type === 'init' || type === 'merge' || type === 'revert'}
      />
    </fieldset>
  )
}
