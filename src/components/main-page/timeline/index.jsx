import React from "react";
import { useWindowSize } from "../../header/hookWindowSize.js";
import { Timeline } from "antd";
import { MaxTimeline, MinTimeline } from "./timeline-style.js";

const MainTimeline = (props) => {
  const width = useWindowSize().width;
  const green = "#2CBFD3";
  return (
    <div>
      {(width > 768 && (
        <MaxTimeline>
          <Timeline>
            <Timeline.Item color={green}>{props.item1}</Timeline.Item>
            <Timeline.Item color={green}>{props.item2}</Timeline.Item>
            <Timeline.Item color={green}>{props.item3}</Timeline.Item>
            <Timeline.Item color={green}>{props.item4}</Timeline.Item>
            <Timeline.Item color={green}>{props.item5}</Timeline.Item>
          </Timeline>
          <Timeline>
            <Timeline.Item color={green}>{props.item6}</Timeline.Item>
            <Timeline.Item color={green}>{props.item7}</Timeline.Item>
            <Timeline.Item color={green}>{props.item8}</Timeline.Item>
            <Timeline.Item color={green}>{props.item9}</Timeline.Item>
            <Timeline.Item color={green}>{props.item10}</Timeline.Item>
          </Timeline>
        </MaxTimeline>
      )) || (
        <MinTimeline>
          <Timeline>
            <Timeline.Item color={green}>{props.item1}</Timeline.Item>
            <Timeline.Item color={green}>{props.item2}</Timeline.Item>
            <Timeline.Item color={green}>{props.item3}</Timeline.Item>
            <Timeline.Item color={green}>{props.item4}</Timeline.Item>
            <Timeline.Item color={green}>{props.item5}</Timeline.Item>
          </Timeline>
        </MinTimeline>
      )}
    </div>
  );
};

export default MainTimeline;
