import React, {useEffect, useRef} from 'react';
import './clock.css';
import Background from './agf-logo.svg';

export const Clock = (props) => {
  const clockElement = useRef(undefined);
  const secondHand = useRef(undefined); 
  const minuteHand = useRef(undefined); 
  const hourHand = useRef(undefined);

  useEffect(() => {
    if (!props.clockBackgroundImage) {
      return;
    }

    clockElement.current.style.setProperty('--clockBackgroundImage', `url(${props.clockBackgroundImage})`);
  }, [props.clockBackgroundImage])

  useEffect(() => {
    setInterval(setClock, 1000);
  }, []);

  function setClock() {
    const currentDate = new Date();
    const seconds = currentDate.getSeconds() / 60;
    const minutes = (seconds + currentDate.getMinutes()) / 60;
    const hours = ((minutes + convertTo12Hour(currentDate.getHours())) / 12);

    setRotation(secondHand.current, seconds);
    setRotation(minuteHand.current, minutes);
    setRotation(hourHand.current, hours);
  }

  function setRotation(element, rotationRatio) {
    if (!element) {
      return;
    }
    element.style.setProperty('--rotation', rotationRatio * 360);
  }

  function convertTo12Hour(hour24) {
    return ((hour24 + 11) % 12 + 1);
  }

  setClock();

  return (<div ref={clockElement} class='clock'>
    <div class="number number1">1</div>
    <div class="number number2">2</div>
    <div class="number number3">3</div>
    <div class="number number4">4</div>
    <div class="number number5">5</div>
    <div class="number number6">6</div>
    <div class="number number7">7</div>
    <div class="number number8">8</div>
    <div class="number number9">9</div>
    <div class="number number10">10</div>
    <div class="number number11">11</div>
    <div class="number number12">12</div>
    <div ref={hourHand} class="hand hour"></div>
    <div ref={minuteHand} class="hand minute"></div>
    <div ref={secondHand} class="hand second"></div>
    <div class="center"></div>
  </div>
  )
}