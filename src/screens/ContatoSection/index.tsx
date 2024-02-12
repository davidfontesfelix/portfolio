import Heading from '@/components/Heading'
import { Links } from './Links'

export default function ContatoSection() {
  return (
    <div className="text-center">
      <Heading>Contato</Heading>
      <ul className="mt-6 flex flex-col gap-4">
        <li>
          <h2 className="mb-2 text-4xl font-medium phoneSm:text-3xl phone:text-3xl">
            Email:
          </h2>
          <a
            target="_blank"
            href="mailto:davidfontes303@gmail.com"
            className="border-b-2 border-black text-2xl phoneSm:text-xl phone:text-xl"
            rel="noreferrer"
          >
            davidfontes303@gmail.com
          </a>
        </li>
        <li>
          <h2 className="mb-2 text-4xl font-medium phoneSm:text-3xl phone:text-3xl">
            Telefone:
          </h2>
          <p className="text-2xl phoneSm:text-xl phone:text-xl">
            (79) 9 9963-4862
          </p>
        </li>
      </ul>
      <h4 className="mb-4 mt-6 text-5xl font-medium phone:text-3xl">
        Redes sociais
      </h4>
      <ul className="flex flex-col gap-4">
        <li>
          <Links.Title href="https://wa.me/5579999634862">Whatsapp</Links.Title>
        </li>
        <li>
          <Links.Title href="https://www.linkedin.com/in/david-fontes-9b84a4201">
            Linkedin
          </Links.Title>
        </li>
        <li>
          <Links.Title href="https://github.com/davidfontesfelix">
            Github
          </Links.Title>
        </li>
      </ul>
    </div>
  )
}
