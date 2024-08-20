import React from "react";
import PageContact from "../Page/Contact";
import PageAboutMe from "../Page/AboutMe";
import TabItem from "./Tabs/Item";
import TabList from "./Tabs/List";
import GalleryIndex from "../Page/Gallery/Index";

const SidebarIndex: React.FC = () => {
  return (
    <>
      <nav>
        <h3 className="font--xl">Marina Kuznetsov</h3>
      </nav>
      <div className="tab-container">
        <TabList activeTabIndex={1}>
          <TabItem label="ABOUT ME">
            <PageAboutMe />
          </TabItem>
          <TabItem label="GALLERY">
            <GalleryIndex />
          </TabItem>
          <TabItem label="CONTACT">
            <PageContact />
          </TabItem>
        </TabList>
      </div>
    </>
  );
};

export default SidebarIndex;
