export default function TodoItem({ value, checked, onToggleCheckbox }) {
  return (
    <div className="flex flex-row gap-2 justify-start">
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onToggleCheckbox(event.target.checked)}
      />
      <div className="py-2">{value}</div>
    </div>
  );
}
