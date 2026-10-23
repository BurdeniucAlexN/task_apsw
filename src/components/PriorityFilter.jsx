import { Flag } from 'lucide-react'

export const ALL_PRIORITIES = 'All priorities'

export default function PriorityFilter({ value, onChange }) {
  return (
    <div className="filter-wrap">
      <Flag size={16} />
      <select aria-label="Filter by priority" value={value} onChange={(event) => onChange(event.target.value)}>
        <option>{ALL_PRIORITIES}</option>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
    </div>
  )
}