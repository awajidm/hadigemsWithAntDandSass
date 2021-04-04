import BannerAnim, { Element } from "rc-banner-anim";
import TweenOne from "rc-tween-one";

import { Typography } from "antd";

import "rc-banner-anim/assets/index.css";

const BgElement = Element.BgElement;
const AppSlider = () => {
  return (
    <BannerAnim prefixCls="banner-user" autoPlay>
      <Element prefixCls="banner-user-elem" key="0">
        <BgElement key="bg" className="bg">
          <img src="images/1.jpg" />
        </BgElement>
        <TweenOne
          className="banner-user-title"
          animation={{ y: 30, opacity: 0, type: "from" }}
        >
          <Typography.Title>HADIGEMS</Typography.Title>
          <Typography.Text>
            Place to buy luxary hand cut Gemstons
          </Typography.Text>
        </TweenOne>
      </Element>
      <Element prefixCls="banner-user-elem" key="1">
        <BgElement key="bg" className="bg">
          <img src="images/2.jpg" />
        </BgElement>
        <TweenOne
          className="banner-user-title"
          animation={{ y: 30, opacity: 0, type: "from" }}
        >
          <Typography.Title>GEMSTONS</Typography.Title>
        </TweenOne>
      </Element>
      <Element prefixCls="banner-user-elem" key="2">
        <BgElement key="bg" className="bg">
          <img src="images/3.jpg" />
        </BgElement>
        <TweenOne
          className="banner-user-title"
          animation={{ y: 30, opacity: 0, type: "from" }}
        >
          <Typography.Title>Jewlery</Typography.Title>
        </TweenOne>
      </Element>
      <Element prefixCls="banner-user-elem" key="3">
        <BgElement key="bg" className="bg">
          <img src="images/4.jpg" />
        </BgElement>
        <TweenOne
          className="banner-user-title"
          animation={{ y: 30, opacity: 0, type: "from" }}
        >
          <Typography.Title>Specimen</Typography.Title>
        </TweenOne>
      </Element>
    </BannerAnim>
  );
};

export default AppSlider;
