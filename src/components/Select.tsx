interface SelectProps {
  label: string
  value: string
  options: { value: string; label: string }[]
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export default function Select({
  label,
  value,
  options,
  handleChange,
}: SelectProps) {
  return (
    <fieldset className='grid h-fit gap-1'>
      <label
        htmlFor={label.toLowerCase()}
        className='block text-sm translate-x-1 font-medium text-gray-600'
      >
        {label}
      </label>
      <select
        id={label.toLowerCase()}
        name={label.toLowerCase()}
        className='w-full p-2 border rounded-lg'
        value={value}
        onChange={handleChange}
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </fieldset>
  )
}
