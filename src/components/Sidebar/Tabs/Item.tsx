import type { TabProps } from "../../../types/TabTypes";

const TabItem: React.FC<TabProps> = ({ label, children }) => (
  <div
    className="tab-panel"
    role="tabpanel"
    aria-labelledby={`tab-${label}`}
    id={`panel-${label}`}
  >
    {children}
  </div>
);

export default TabItem;