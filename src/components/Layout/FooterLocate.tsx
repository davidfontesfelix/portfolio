import Link from 'next/link'

interface FooterLocateProps {
  local: string
}

export default function FooterLocate({ local }: FooterLocateProps) {
  return (
    <footer className="absolute bottom-9 flex gap-3">
      <Link
        aria-label="ir para o inicio"
        href={'/inicio'}
        className={`h-2 w-9 cursor-pointer ${
          local === 'inicio' ? 'bg-black' : 'bg-neutral-300'
        }`}
      ></Link>
      <Link
        aria-label="ir para o sobre"
        href={'/sobre'}
        className={`h-2 w-9 cursor-pointer ${
          local === 'sobre' ? 'bg-black' : 'bg-neutral-300'
        }`}
      ></Link>
      <Link
        aria-label="ir para os projetos"
        href={'/projetos'}
        className={`h-2 w-9 cursor-pointer ${
          local === 'projetos' ? 'bg-black' : 'bg-neutral-300'
        }`}
      ></Link>
      <Link
        aria-label="ir para a pagina de contato"
        href={'/contato'}
        className={`h-2 w-9 cursor-pointer ${
          local === 'contato' ? 'bg-black' : 'bg-neutral-300'
        }`}
      ></Link>
    </footer>
  )
}
