interface InformationsProps {
  title: string
  response: string
}

export default function Informations(props: InformationsProps) {
  return (
    <div className=" flex w-[340px] flex-row gap-4 border-b-2 border-black phoneSm:w-full phoneSm:border-b-[1px] phone:w-full phone:border-b-[1px] tablet:w-full">
      <h3 className=" pb-2 text-2xl font-semibold phoneSm:text-xl phone:text-xl">
        {props.title}:
      </h3>
      <h4 className="desktops:text-xl text-2xl phoneSm:text-xl phone:text-xl">
        {props.response}
      </h4>
    </div>
  )
}
