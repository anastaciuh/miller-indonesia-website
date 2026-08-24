import { Phone } from "lucide-react";

type ContactButtonProps = {
  name?: string;
  phone?: string;
  className?: string;
};

export default function ContactButton({
  name = "Dony Miller",
  phone = "+6281314223938",
  className = "",
}: ContactButtonProps) {
  return (
    <a
      href={`https://wa.me/${phone.replace("+", "")}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-[14px] inline-flex items-center rounded-lg bg-deep-blue px-6 py-3 font-bold text-white ${className}`}
    >
       <Phone
        size={16}
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={1}
      />

      <span className="ml-3">
        {name} {phone}
      </span>
    </a>
  );
}