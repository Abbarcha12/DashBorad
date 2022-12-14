import React from 'react'
import './Tabs.css'
import DesignTabs from "../Tabs/DesignTab"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Layers from "../Tabs/Layers"


function TabsContainer() {
  return (
    <>
     <Tabs
      defaultActiveKey="Design"
      id="uncontrolled-tab-example"
      className="overview_tabs"
    >
      <Tab eventKey="Design"  title="Design">
        <DesignTabs />

      </Tab>
      <Tab eventKey="Layers"  title="Layers">
          <Layers />
      </Tab>
    </Tabs>
    </>
  )
}

export default TabsContainer