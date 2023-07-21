// interface ProjetosSectionProps {}

import Carousel from './Carousel'

export default function ProjetosSection(/* props: ProjetosSectionProps */) {
  return (
    <div className="-mt-[10vh] flex flex-col gap-6 text-center">
      <Carousel />
    </div>
  )
}
