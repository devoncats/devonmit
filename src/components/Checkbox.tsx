interface CheckboxProps {
  label: string
  id: string
  value: boolean
  type: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Checkbox({
  label,
  id,
  value,
  type,
  handleChange,
}: CheckboxProps) {
  return (
    <fieldset className='flex h-fit gap-2'>
      <label
        htmlFor={id}
        className='block text-sm translate-x-1 font-medium text-gray-600'
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type='checkbox'
        checked={value}
        onChange={handleChange}
        disabled={type === 'init' || type === 'merge' || type === 'revert'}
      />
    </fieldset>
  )
}
