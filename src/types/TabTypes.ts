import { ReactElement, ReactNode } from "react";

export interface TabProps {
    label: string;
    children: ReactNode;
  }

  export interface TabsProps {
    activeTabIndex: number;
    children: ReactElement<TabProps> | ReactElement<TabProps>[];
  }