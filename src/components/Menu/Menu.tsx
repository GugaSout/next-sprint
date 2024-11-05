import { useState } from "react"

interface MenuOption {
  name: string
  action: () => void
  disabled?: boolean
}

interface DropdownMenuProps {
  options: MenuOption[]
}

export default function Menu({ options }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative inline-block">
      <button
        className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        &#x2022;&#x2022;&#x2022;
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option, index) => (
              <button
                key={index}
                className={`${
                  option.disabled
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-gray-700 hover:bg-gray-100"
                } block px-4 py-2 text-sm w-full text-left`}
                onClick={() => {
                  if (!option.disabled) option.action()
                  setIsOpen(false)
                }}
                disabled={option.disabled}
              >
                {option.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
