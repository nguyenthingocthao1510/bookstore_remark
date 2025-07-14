import React from "react";

type Props = {
  children: React.ReactNode;
};

export const AccountLayout = ({ children }: Props) => {
  return <div className="flex-1 bg-white">{children}</div>;
};
