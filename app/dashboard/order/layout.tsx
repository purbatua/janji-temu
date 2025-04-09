import { ReactNode } from "react";

type Props = {
  children: ReactNode
}

const OrderLayout = ({ children }: Props) => {
  return (
    <>{children}</>
  )
}

export default OrderLayout;