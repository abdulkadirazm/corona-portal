import React from "react";
import { Tabs, Row, Col } from 'antd';
import TotalCases from '../components/TotalCases';
import TotalLosses from '../components/TotalLosses';
import DailyCases from '../components/DailyCases';
import DailyLosses from '../components/DailyLosses';
import CaseTestRatio from '../components/CaseTestRatio';
import LossToCaseRatio from '../components/LossToCaseRatio';
import '../styles/pages/_tablolar.scss';

function Tablolar() {
  const { TabPane } = Tabs;

  return (
    <div className="Tablolar">
      <Tabs defaultActiveKey={1} size="large" tabPosition="left">
        <TabPane tab={<div className="foo">Toplam</div>} key={1}>
          <Row>
            <Col xs={24} lg={12}>
              <div><TotalCases /></div>
            </Col>
          </Row>
          <Row>
            <Col xs={24} lg={12}>
              <div><TotalLosses /></div>
            </Col>
          </Row>
        </TabPane>
        <TabPane tab={<div className="foo">Günlük</div>} key={2}>
          <Row>
            <Col xs={24} lg={12}>
              <div><DailyCases /></div>
            </Col>
          </Row>
          <Row>
            <Col xs={24} lg={12}>
              <div><DailyLosses /></div>
            </Col>
          </Row>
        </TabPane>
        <TabPane tab={<div className="foo">Oranlar</div>} key={3}>
          <Row>
            <Col xs={24} lg={12}>
              <div><CaseTestRatio /></div>
            </Col>
          </Row>
          <Row>
            <Col xs={24} lg={12}>
              <div><LossToCaseRatio /></div>
            </Col>
          </Row>
        </TabPane>
      </Tabs>
      <p style={{ marginTop: 15 }}>Tüm veriler <a href="https://twitter.com/drfahrettinkoca">https://twitter.com/drfahrettinkoca</a> hesabından ve <a href="https://covid19.saglik.gov.tr/">https://covid19.saglik.gov.tr/</a> adresinden alınmıştır. Tamamı resmi veridir.</p>
    </div >
  );
}

export default Tablolar;