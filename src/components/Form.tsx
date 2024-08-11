import { useState, useEffect } from 'react'
import Select from '@/components/Select'
import Input from '@/components/Input'
import TextArea from '@/components/TextArea'
import Checkbox from '@/components/Checkbox'
import CopyIcon from '@/icons/copy'

export default function Form() {
  const initialState = {
    type: 'init',
    scope: '',
    title: '',
    description: '',
    isBreaking: false,
    reference: '',
    version: '',
    user: '',
  }

  const options = [
    { value: 'init', label: 'Initial' },
    { value: 'merge', label: 'Merge' },
    { value: 'revert', label: 'Revert' },
    { value: 'feat', label: 'Feature' },
    { value: 'fix', label: 'Fix' },
    { value: 'refactor', label: 'Refactor' },
    { value: 'perf', label: 'Performance' },
    { value: 'style', label: 'Style' },
    { value: 'test', label: 'Test' },
    { value: 'docs', label: 'Documentation' },
    { value: 'build', label: 'Build' },
    { value: 'ci', label: 'CI' },
    { value: 'chore', label: 'Chore' },
  ]

  const [data, setData] = useState(initialState)
  const [response, setResponse] = useState('')

  const handleChange = (event: React.ChangeEvent<any>) => {
    const { name, value } = event.target
    setData({ ...data, [name]: value })
    console.log(data)
  }

  const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target
    setData({ ...data, [name]: checked })
    console.log(data)
  }

  useEffect(() => {
    switch (data.type) {
      case 'init':
        setResponse('chore: init')
        setData(initialState)
        break

      case 'merge':
        setResponse('Merge branch')
        setData({ ...initialState, type: 'merge' })
        break

      case 'revert':
        setResponse('Revert changes')
        setData({ ...initialState, type: 'revert' })
        break

      default:
        setResponse(
          `${data.type}${data.scope ? `(${data.scope})` : ''}: ${data.title}${
            data.description ? `\n\n${data.description}` : ''
          }${data.isBreaking ? '\n\nBREAKING CHANGE' : ''}${
            data.reference ? `\n\nCloses ${data.reference}` : ''
          }${data.version ? `\n\nVersion: ${data.version}` : ''}${
            data.user ? `\n\n${data.user}` : ''
          }`,
        )
        setData(data)
        break
    }
  }, [data])

  return (
    <section className='xl:flex grid gap-8 w-full'>
      <form className='flex-1 grid gap-3'>
        <Select
          label='Type'
          value={data.type}
          options={options}
          handleChange={handleChange}
        />

        <Input
          label='Scope'
          value={data.scope}
          type={data.type}
          handleChange={handleChange}
        />

        <Input
          label='Title'
          value={data.title}
          type={data.type}
          handleChange={handleChange}
        />

        <TextArea
          label='Description'
          value={data.description}
          type={data.type}
          handleChange={handleChange}
        />

        <Checkbox
          label='Breaking Change'
          id='isBreaking'
          value={data.isBreaking}
          type={data.type}
          handleChange={handleCheckbox}
        />

        <Input
          label='Reference'
          value={data.reference}
          type={data.type}
          handleChange={handleChange}
        />

        <Input
          label='Version'
          value={data.version}
          type={data.type}
          handleChange={handleChange}
        />

        <Input
          label='User'
          value={data.user}
          type={data.type}
          handleChange={handleChange}
        />
      </form>

      <span className='xl:w-px xl:h-auto h-px bg-[#e5e7eb]' />

      <section className='flex-1 relative'>
        <button
          onClick={() => {
            navigator.clipboard.writeText(response.toString())
          }}
          className='absolute right-0 top-0 p-4'
        >
          <CopyIcon />
        </button>

        <textarea
          id='response'
          name='response'
          className='w-full h-96 p-2 border rounded-lg resize-none'
          value={response}
          readOnly
        ></textarea>
      </section>
    </section>
  )
}
