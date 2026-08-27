import Link from "next/link";

type SeeMoreButtonProps = {
  href: string;
  className?: string;
};

export default function SeeMoreButton({
  href,
  className = "",
}: SeeMoreButtonProps) {
  return (

    <Link
      href={href}
      className={`button-text inline-flex items-center justify-center rounded-md bg-[#0C182A] px-4 py-2 text-sm md:px-6 py-3 text-white ${className}`}
    >
      See More
    </Link>
  );
}
