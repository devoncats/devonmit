import React, { useState, useEffect } from 'react'

export default function Form() {
  const initialState = {
    type: '',
    scope: '',
    title: '',
    description: '',
    isBreaking: false,
    reference: '',
    version: '',
    user: '',
  }

  const [data, setData] = useState(initialState)
  const [response, setResponse] = useState('')

  const handleChange = (event: React.ChangeEvent<any>) => {
    if (event.target.type === 'checkbox') {
      setData({ ...data, [event.target.name]: event.target.checked })
    } else {
      const { name, value } = event.target
      setData({ ...data, [name]: value })
    }
  }

  useEffect(() => {
    const commitMessage = `${data.type}${data.scope ? `(${data.scope})` : ''}${data.isBreaking ? '!' : ''}: ${
      data.title
    }${data.description ? `\n\n${data.description}` : ''}
    ${data.reference ? `\nReference: ${data.reference}` : ''}${
      data.version ? `\nVersion: ${data.version}` : ''
    }${data.user ? `\nUser: ${data.user}` : ''}`

    setResponse(commitMessage)
  })

  return (
    <>
      <form className='w-96 grid gap-4'>
        <fieldset>
          <label htmlFor='type' className='block'>
            Type
          </label>
          <select
            id='type'
            name='type'
            className='w-full p-2 border rounded-lg'
            value={data.type}
            onChange={handleChange}
          >
            <option value='init'>Initial</option>
            <option value='merge'>Merge</option>
            <option value='revert'>Revert</option>
            <option value='feat'>Feature</option>
            <option value='fix'>Fix</option>
            <option value='refactor'>Refactor</option>
            <option value='perf'>Performance</option>
            <option value='style'>Style</option>
            <option value='test'>Test</option>
            <option value='docs'>Documentation</option>
            <option value='build'>Build</option>
            <option value='ci'>CI</option>
            <option value='chore'>Chore</option>
          </select>
        </fieldset>

        <fieldset>
          <label htmlFor='scope' className='block'>
            Scope
          </label>
          <input
            id='scope'
            name='scope'
            type='text'
            className='w-full p-2 border rounded-lg'
            value={data.scope}
            onChange={handleChange}
          />
        </fieldset>

        <fieldset>
          <label htmlFor='title' className='block'>
            Title
          </label>
          <input
            id='title'
            name='title'
            type='text'
            className='w-full p-2 border rounded-lg'
            value={data.title}
            onChange={handleChange}
          />
        </fieldset>

        <fieldset>
          <label htmlFor='description' className='block'>
            Description
          </label>
          <textarea
            id='description'
            name='description'
            className='w-full p-2 border rounded-lg resize-none'
            value={data.description}
            onChange={handleChange}
          ></textarea>
        </fieldset>

        <fieldset>
          <label htmlFor='isBreaking' className='block'>
            Breaking Change
          </label>
          <input
            id='isBreaking'
            name='isBreaking'
            type='checkbox'
            checked={data.isBreaking}
            onChange={handleChange}
          />
        </fieldset>

        <fieldset>
          <label htmlFor='reference' className='block'>
            Reference
          </label>
          <input
            id='reference'
            name='reference'
            type='text'
            className='w-full p-2 border rounded-lg'
            value={data.reference}
            onChange={handleChange}
          />
        </fieldset>

        <fieldset>
          <label htmlFor='version' className='block'>
            Version
          </label>
          <input
            id='version'
            name='version'
            type='text'
            className='w-full p-2 border rounded-lg'
            value={data.version}
            onChange={handleChange}
          />
        </fieldset>

        <fieldset>
          <label htmlFor='user' className='block'>
            User
          </label>
          <input
            id='user'
            name='user'
            type='text'
            className='w-full p-2 border rounded-lg'
            value={data.user}
            onChange={handleChange}
          />
        </fieldset>
      </form>

      <div className='h-px w-full bg-[#e5e7eb]' />

      <textarea
        id='response'
        name='response'
        className='w-full p-2 border rounded-lg resize-none'
        value={response}
        readOnly
      ></textarea>
    </>
  )
}
