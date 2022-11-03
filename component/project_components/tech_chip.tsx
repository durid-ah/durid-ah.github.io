
type ChipProps = {
   text: string
}

export default function TechChip({text}: ChipProps) {
   return (
      <span className="p-2 badge badge-outline">#{text}</span>
   )
}