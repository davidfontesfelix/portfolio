interface InformationsProps {
  title: string
  response: string
}

export default function Informations(props: InformationsProps) {
  return (
    <div className="flex w-[340px] flex-row gap-4 border-b-2 border-black phone:border-b-[1px] desktops:w-[250px] desktops:gap-2">
      <h3 className="pb-1 text-2xl font-semibold phone:text-xl desktops:text-xl">
        {props.title}:
      </h3>
      <h4 className="text-2xl phone:text-xl desktops:text-xl">
        {props.response}
      </h4>
    </div>
  )
}
