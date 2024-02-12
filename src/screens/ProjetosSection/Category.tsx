interface CategoryProps {
  title: string
}

export default function Category(props: CategoryProps) {
  return (
    <div className="rounded-md bg-[#EEEEEE]">
      <span className="px-4 py-2 font-medium uppercase tracking-wider text-[#4F4F4F]">
        {props.title}
      </span>
    </div>
  )
}
