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
    <main
      className={`
        mx-auto
        w-full
        max-w-7xl
        px-4
        sm:px-6
        lg:px-8
        py-10
        ${className}
      `}
    >
      {children}
    </main>
  );
}