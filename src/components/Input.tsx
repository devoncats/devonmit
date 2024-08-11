interface InputProps {
  label: string
  value: string
  type: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input({
  label,
  value,
  type,
  handleChange,
}: InputProps) {
  return (
    <fieldset className='grid h-fit gap-1'>
      <label
        htmlFor={label.toLowerCase()}
        className='block text-sm translate-x-1 font-medium text-gray-600'
      >
        {label}
      </label>
      <input
        id={label.toLowerCase()}
        name={label.toLowerCase()}
        type='text'
        className='w-full p-2 border rounded-lg'
        value={value}
        onChange={handleChange}
        disabled={type === 'init' || type === 'merge' || type === 'revert'}
      />
    </fieldset>
  )
}
