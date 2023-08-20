import React from 'react';
import { BiLogoCss3, BiLogoTailwindCss, BiLogoReact, BiLogoNodejs, BiLogoMongodb } from 'react-icons/bi';
import { RiJavascriptFill } from 'react-icons/ri';
import { SiMicrosoftsqlserver, SiAntdesign } from 'react-icons/si';
import '../components/CircularMotion.css';


const degree2Radian = (degree) => (degree * Math.PI) / 180

/**
 * get position of vertex
 * @param r 
 * @param count
 */
const getPos = (r, count) => {
  const icons = [
    <BiLogoCss3 className='icons'/>,
    <BiLogoTailwindCss className='icons'/>,
    <BiLogoReact className='icons'/>,
    <BiLogoNodejs className='icons'/>,
    <BiLogoMongodb className='icons'/>,
    <RiJavascriptFill className='icons'/>,
    <SiMicrosoftsqlserver className='icons'/>,
    <SiAntdesign className='icons'/>,
  ];

  const angleRadian = degree2Radian(360 / count);
  const res = [];
  for (let i = 0; i < count; i += 1) {
    res.push({
      icon: icons[i],
      x: r * Math.cos(angleRadian * i),
      y: r * Math.sin(angleRadian * i),
    });
  }
  return res;
};



const Circular = () => {  

  const iconsData = getPos(202 / 2, 8);

  return (
    <div className="container">
      <div className="ferris">
        <div className="wheel">
          <div className="roomsArea">
             {iconsData.map((item, index) => (
              <div
                key={index}
                className="room"
                style={{
                  top: `${item.y}px`,
                  left: `${item.x - 20}px`,
                }}
              >
                {item.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
};

export default Circular;
