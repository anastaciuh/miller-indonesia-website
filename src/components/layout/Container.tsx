import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div className={`w-full px-5 lg:px-20 ${className}`}>
      {children}
    </div>
  );
}