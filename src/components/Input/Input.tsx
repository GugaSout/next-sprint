interface InputProps {
  label: string
  name: string
  type: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
}

export default function Input({
  label,
  name,
  type,
  value,
  onChange,
  placeholder,
}: InputProps) {
  return (
    <div>
      <label
        className="lblCad block font-bold text-left text-lg mb-2 w-full"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className="p-3 mb-6 rounded-lg border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        type={type}
        name={name}
        required
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  )
}
