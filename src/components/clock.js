import React, {useCallback, useEffect, useRef} from 'react';
import './clock.css';

export const Clock = (props) => {
  const clockElement = useRef(undefined);
  const secondHand = useRef(undefined); 
  const minuteHand = useRef(undefined); 
  const hourHand = useRef(undefined);
  const {clockBackgroundImage, ...styles} = props;

  useEffect(() => {
    if (props.clockBackgroundImage) {
      clockElement.current.style.setProperty('--clockBackgroundImage', `url(${clockBackgroundImage})`);
    }
    if (props.width) {
      clockElement.current.style.setProperty('--width', props.width);
    }
    if (props.height) {
      clockElement.current.style.setProperty('--height', props.height);
    }
  }, [props.clockBackgroundImage])

  const setClock = useCallback(() => {
    const currentDate = new Date();
    const seconds = currentDate.getSeconds() / 60;
    const minutes = (seconds + currentDate.getMinutes()) / 60;
    const hours = ((minutes + convertTo12Hour(currentDate.getHours())) / 12);

    setRotation(secondHand.current, seconds);
    setRotation(minuteHand.current, minutes);
    setRotation(hourHand.current, hours);
  }, []);

  useEffect(() => {
    setInterval(setClock, 1000);
    setClock();
  }, [setClock]);

  function setRotation(element, rotationRatio) {
    if (!element) {
      return;
    }
    element.style.setProperty('--rotation', `${rotationRatio * 360}`);
  }

  function convertTo12Hour(hour24) {
    return ((hour24 + 11) % 12 + 1);
  }

  return (
      <div ref={clockElement}
               style={{...styles}}
               className='clock'>
    <div className="number number1">1</div>
    <div className="number number2">2</div>
    <div className="number number3">3</div>
    <div className="number number4">4</div>
    <div className="number number5">5</div>
    <div className="number number6">6</div>
    <div className="number number7">7</div>
    <div className="number number8">8</div>
    <div className="number number9">9</div>
    <div className="number number10">10</div>
    <div className="number number11">11</div>
    <div className="number number12">12</div>
    <div ref={hourHand} className="hand hour"/>
    <div ref={minuteHand} className="hand minute"/>
    <div ref={secondHand} className="hand second"/>
    <div className="center"/>
  </div>
  )
}