'use client'
import Heading from '@/components/Heading'
import { Links } from './Links'
import * as Yup from 'yup'
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

interface linksType {
  title: string
  URL: string
}

interface FormValues {
  name: string
  email: string
  textarea: string
}

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Digite um email valido')
    .required('O campo de email é obrigatório'),
  textarea: Yup.string().required('O campo de texto é obrigatório'),
})

export default function ContatoSection() {
  const links: linksType[] = [
    {
      title: 'Linkedin',
      URL: 'https://www.linkedin.com/in/david-fontes-9b84a4201',
    },
    {
      title: 'GitHub',
      URL: 'https://github.com/davidfontesfelix',
    },
    {
      title: 'Whatsapp',
      URL: 'https://wa.me/5579999634862',
    },
  ]

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  })

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const sendForm = async () => {
      fetch('https://backend-portfolio-one.vercel.app/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          textarea: data.textarea,
        }),
      })
    }
    sendForm()
  }

  return (
    <div className=" h-screen w-screen ">
      <div className="flex h-screen w-[69vw] flex-col items-center justify-center text-left phoneSm:w-screen phone:w-screen tablet:w-screen">
        <div>
          <Heading>Contato</Heading>
          <h3 className="mb-6 mt-10 text-3xl smHeight:mt-0">Enviar email</h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            action=""
            className="flex
          w-[58vw] flex-col gap-4 phoneSm:w-[85vw] phone:w-[80vw] tablet:w-[70vw]"
          >
            <input
              {...register('name')}
              placeholder="Nome:"
              type="text"
              className="rounded  border-[1px] border-black bg-neutral-300 p-2 placeholder:text-neutral-500"
            />
            {errors.name && (
              <p className="-mt-2 text-red-800">{errors.name.message}</p>
            )}
            <input
              {...register('email')}
              placeholder="Email:"
              type="email"
              className="rounded border-[1px] border-black bg-neutral-300 p-2 placeholder:text-neutral-500"
            />
            {errors.email && (
              <p className="-mt-2 text-red-800">{errors.email.message}</p>
            )}
            <textarea
              {...register('textarea')}
              placeholder="Escreva seu texto"
              rows={8}
              className="resize-none rounded border-[1px] border-black bg-neutral-300 p-2 placeholder:text-neutral-500"
            ></textarea>
            {errors.textarea && (
              <p className="-mt-2 text-red-800">{errors.textarea.message}</p>
            )}
            <button
              type="submit"
              className="rounded bg-blue-400 p-4 text-2xl font-bold uppercase text-white ring-blue-800 transition-colors hover:bg-blue-500 hover:ring-2 focus:ring-2"
            >
              enviar
            </button>
          </form>
        </div>
      </div>
      <div className="absolute right-0 top-0 flex h-full w-[30vw] flex-col items-center justify-center bg-black text-center phoneSm:hidden phone:hidden tablet:hidden">
        <h4 className=" mb-6 pl-6 text-3xl text-white">Links de contato</h4>
        <ul>
          {links.map((element, index) => (
            <li key={index} className="mb-4">
              <Links.Title href={element.URL}>{element.title}</Links.Title>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
