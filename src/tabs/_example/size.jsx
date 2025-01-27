import React from 'react';
import { Tabs } from 'tdesign-mobile-react/tabs';
import TDemoBlock from '../../../site/mobile/components/DemoBlock';
import './style.less';

export default function () {
  const list3 = [
    {
      label: '标签页一',
      value: 'tab1',
    },
    {
      label: '标签页二',
      value: 'tab2',
    },
    {
      label: '标签页三',
      value: 'tab3',
    },
    {
      label: '标签页四',
      value: 'tab4',
    },
  ];

  return (
    <TDemoBlock title="不同尺寸" summary="大 中 小">
      <ul className="hori-wrap">
        <li>
          <Tabs list={list3} size="large"></Tabs>
        </li>
        <li>
          <Tabs list={list3}></Tabs>
        </li>
        <li>
          <Tabs list={list3} size="small"></Tabs>
        </li>
      </ul>
    </TDemoBlock>
  );
}
