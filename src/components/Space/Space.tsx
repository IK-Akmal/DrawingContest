/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  ForwardedRef, forwardRef,
} from 'react';
import styles from './Space.module.scss';

import { ReactComponent as StarsIcon } from './Icon/star.svg';
import { ReactComponent as ZeroIcon } from './Icon/zero.svg';
import { ReactComponent as OneIcon } from './Icon/one.svg';

import BigPlanet from './Components/BigPlanet';
import Elephant from './Components/Elephant';
import Lamp from './Components/Lamp';
import Clock from './Components/Clock';
import Rocket from './Components/Rocket';
import Airplane from './Components/Airplane';
import StripedPlanet from './Components/StripedPlanet';
import Atom from './Components/Atom';
import DarkPlanet from './Components/DarkPlanet';
import Division from './Components/Division';
import Plus from './Components/Plus';
import Montgolfier from './Components/Montgolfier';
import Palette from './Components/Palette';

type SpaceProps = {
  timeLine: gsap.core.Timeline
};

function Space({ timeLine }: SpaceProps, ref: ForwardedRef<HTMLDivElement>) {
  return (
    <div ref={ref} className={styles.space}>
      <Elephant className={styles.elephant} timeLine={timeLine} />
      <Lamp className={styles.lamp} timeLine={timeLine} />
      <Clock className={styles.clock} timeLine={timeLine} />
      <Rocket className={styles.rocket} timeLine={timeLine} />
      <Airplane className={styles.airplane} timeLine={timeLine} />
      <StripedPlanet className={styles.stripedPlanet} timeLine={timeLine} />
      <BigPlanet className={styles.bigPlanet} timeLine={timeLine} />
      <Atom className={styles.atom} timeLine={timeLine} />
      <DarkPlanet className={styles.darkPlanet} timeLine={timeLine} />
      <Montgolfier className={styles.montgolfier} timeLine={timeLine} />
      <Palette className={styles.palette} timeLine={timeLine} />
      <Division className={styles.division} timeLine={timeLine} />
      <Plus className={styles.plus} timeLine={timeLine} />
      <ZeroIcon className={styles.zero} />
      <OneIcon className={styles.one} />
      <StarsIcon className={styles.stars} />
    </div>
  );
}

export default forwardRef(Space);
