import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

function Container({ children }: ContainerProps) {
  return (
    <div className=" bg-primary-cream h-screen flex justify-center items-center ">
      {children}
    </div>
  );
}

export default Container;
