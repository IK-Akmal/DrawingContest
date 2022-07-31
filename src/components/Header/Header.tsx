import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import Button from '../Button/Button';
import Container from '../Container/Container';
import Logo from '../Logo/Logo';
import NavigationBar from '../NavigationBar/NavigationBar';
import Space from '../Space/Space';
import WrapperSpace from '../WrapperSpace/WrapperSpace';

import styles from './Header.module.scss';
import Intro from '../Intro/Intro';
import Girl from '../Girl/Girl';

import { ReactComponent as AirplanesIcon } from '../../assets/airplanes.svg';

function Header() {
  const btnRef = useRef<HTMLButtonElement>(null);
  const spaceRef = useRef<HTMLDivElement>(null);

  const timeline = gsap.timeline({ delay: 0.5, force3D: false });

  useLayoutEffect(() => {
    timeline
      .to(btnRef.current, {
        duration: 2, backgroundColor: '#FFF', color: '#1F1D2A',
      })
      .to(spaceRef.current, { duration: 2, opacity: 1 }, '<');
  }, []);

  return (
    <header className={styles.header}>
      <Container>
        <NavigationBar>
          <Logo />
          <Button ref={btnRef} type="second">Войти</Button>
        </NavigationBar>
        <Intro />
      </Container>
      <WrapperSpace>
        <Space timeLine={timeline} ref={spaceRef} />
        <Girl />
        <AirplanesIcon className={styles.airplanes} />
      </WrapperSpace>
    </header>
  );
}

export default Header;
