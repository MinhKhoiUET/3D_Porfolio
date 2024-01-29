import React, {useState} from 'react'

const Contact = () => {

  const [form, setForm] = useState({name: '', email: '', message: ''})

  const handleChange = () => {};
  return (
    <section className='relative flex lg:flex-row flex-col max-container '>
      <div className='flex-1 min-w-[50%] flex flex-col' >
          <h1 className='head-text'>Get in touch</h1>

          <form action=""
                className='w-full flex flex-col gap-7 mt-14'
          >
            <label htmlFor="" className='text-black font-semibold'>
              Name
              <input
                type="text"
                name="name" 
                className='input'
                placeholder='John'
                required 
                value={form.name}
                onChange={handleChange}
                id="" />
            </label>
          </form>
      </div>
    </section>
  )
}

export default Contact