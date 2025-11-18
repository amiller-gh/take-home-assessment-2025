"use client"

import "./StateSeal.css";

import { createElement, ReactNode } from 'react';

import { State } from '../../models';

import Alabama from '../../assets/images/state-seals/Alabama.svg';
import Alaska from '../../assets/images/state-seals/Alaska.svg';
import Arizona from '../../assets/images/state-seals/Arizona.svg';
import Arkansas from '../../assets/images/state-seals/Arkansas.svg';
import California from '../../assets/images/state-seals/California.svg';
import Colorado from '../../assets/images/state-seals/Colorado.svg';
import Connecticut from '../../assets/images/state-seals/Connecticut.svg';
import Delaware from '../../assets/images/state-seals/Delaware.svg';
import Florida from '../../assets/images/state-seals/Florida.svg';
import Georgia from '../../assets/images/state-seals/Georgia.svg';
import Hawaii from '../../assets/images/state-seals/Hawaii.svg';
import Idaho from '../../assets/images/state-seals/Idaho.svg';
import Illinois from '../../assets/images/state-seals/Illinois.svg';
import Indiana from '../../assets/images/state-seals/Indiana.svg';
import Iowa from '../../assets/images/state-seals/Iowa.svg';
import Kansas from '../../assets/images/state-seals/Kansas.svg';
import Kentucky from '../../assets/images/state-seals/Kentucky.svg';
import Louisiana from '../../assets/images/state-seals/Louisiana.svg';
import Maine from '../../assets/images/state-seals/Maine.svg';
import Maryland from '../../assets/images/state-seals/Maryland.svg';
import Massachusetts from '../../assets/images/state-seals/Massachusetts.svg';
import Michigan from '../../assets/images/state-seals/Michigan.svg';
import Minnesota from '../../assets/images/state-seals/Minnesota.svg';
import Mississippi from '../../assets/images/state-seals/Mississippi.svg';
import Missouri from '../../assets/images/state-seals/Missouri.svg';
import Montana from '../../assets/images/state-seals/Montana.svg';
import Nebraska from '../../assets/images/state-seals/Nebraska.svg';
import Nevada from '../../assets/images/state-seals/Nevada.svg';
import NewHampshire from '../../assets/images/state-seals/NewHampshire.svg';
import NewJersey from '../../assets/images/state-seals/NewJersey.svg';
import NewMexico from '../../assets/images/state-seals/NewMexico.svg';
import NewYork from '../../assets/images/state-seals/NewYork.svg';
import NorthCarolina from '../../assets/images/state-seals/NorthCarolina.svg';
import NorthDakota from '../../assets/images/state-seals/NorthDakota.svg';
import Ohio from '../../assets/images/state-seals/Ohio.svg';
import Oklahoma from '../../assets/images/state-seals/Oklahoma.svg';
import Oregon from '../../assets/images/state-seals/Oregon.svg';
import Pennsylvania from '../../assets/images/state-seals/Pennsylvania.svg';
import RhodeIsland from '../../assets/images/state-seals/RhodeIsland.svg';
import SouthCarolina from '../../assets/images/state-seals/SouthCarolina.svg';
import SouthDakota from '../../assets/images/state-seals/SouthDakota.svg';
import Tennessee from '../../assets/images/state-seals/Tennessee.svg';
import Texas from '../../assets/images/state-seals/Texas.svg';
import Utah from '../../assets/images/state-seals/Utah.svg';
import Vermont from '../../assets/images/state-seals/Vermont.svg';
import Virginia from '../../assets/images/state-seals/Virginia.svg';
import Washington from '../../assets/images/state-seals/Washington.svg';
import WestVirginia from '../../assets/images/state-seals/WestVirginia.svg';
import Wisconsin from '../../assets/images/state-seals/Wisconsin.svg';
import Wyoming from '../../assets/images/state-seals/Wyoming.svg';

// https://www.behance.net/gallery/151772135/50-US-states-lettering
const SVGS: Partial<Record<State, { src: string } | null>> = {
  [State.AL]: Alabama,
  [State.AK]: Alaska,
  [State.AS]: null,
  [State.AZ]: Arizona,
  [State.AR]: Arkansas,
  [State.CA]: California,
  [State.CO]: Colorado,
  [State.CT]: Connecticut,
  [State.DE]: Delaware,
  [State.DC]: null,
  [State.FM]: null,
  [State.FL]: Florida,
  [State.GA]: Georgia,
  [State.GU]: null,
  [State.HI]: Hawaii,
  [State.ID]: Idaho,
  [State.IL]: Illinois,
  [State.IN]: Indiana,
  [State.IA]: Iowa,
  [State.KS]: Kansas,
  [State.KY]: Kentucky,
  [State.LA]: Louisiana,
  [State.ME]: Maine,
  [State.MH]: null,
  [State.MD]: Maryland,
  [State.MA]: Massachusetts,
  [State.MI]: Michigan,
  [State.MN]: Minnesota,
  [State.MS]: Mississippi,
  [State.MO]: Missouri,
  [State.MT]: Montana,
  [State.NE]: Nebraska,
  [State.NV]: Nevada,
  [State.NH]: NewHampshire,
  [State.NJ]: NewJersey,
  [State.NM]: NewMexico,
  [State.NY]: NewYork,
  [State.NC]: NorthCarolina,
  [State.ND]: NorthDakota,
  [State.MP]: null,
  [State.OH]: Ohio,
  [State.OK]: Oklahoma,
  [State.OR]: Oregon,
  // [State.PW]: Palau,
  [State.PA]: Pennsylvania,
  [State.PR]: null,
  [State.RI]: RhodeIsland,
  [State.SC]: SouthCarolina,
  [State.SD]: SouthDakota,
  [State.TN]: Tennessee,
  [State.TX]: Texas,
  // [State.UM]: United States Minor Outlying Islands,
  [State.UT]: Utah,
  [State.VT]: Vermont,
  // [State.VI]: VirginIslands,
  [State.VA]: Virginia,
  [State.WA]: Washington,
  [State.WV]: WestVirginia,
  [State.WI]: Wisconsin,
  [State.WY]: Wyoming,
};

export function hasStateNameSvg(state: State | null): boolean {
  return !!Object.hasOwnProperty.call(SVGS, `${state}`);
}

export default function StateSeal({ state, county }: { state: State | null, county?: string | null}): ReactNode | null {
  return state ? <figure 
    className="state-seal"
    style={{backgroundImage: `url('${SVGS[state]?.src || ''}')` }}
  >
  {createElement('svg', {
    className: 'state-seal__county',
    x: "0%",
    y: "0%",
    width: "100%",
    height: `100%`,
    viewBox: `0 0 60 60`,
    preserveAspectRatio: "xMinYMin",
    dangerouslySetInnerHTML: {
      __html: `
        <path id="stamp-circle" style="fill: transparent;" d="M 5, 29 a 25,25 1 1,0 50,1 a 25,25 1 1,0 -50,1" />
        <text dy="0" dx="6">
          <textPath
            href="#stamp-circle"
            style="stroke: white; stroke-width: 0.4rem; letter-spacing: 0.04rem; font-size: 0.44rem; fill: var(--slate-0); font-weight: 600; text-transform: uppercase;"
            startOffset="0px"
          >
            ${county || ''}
          </textPath>
        </text>
        <text dy="0" dx="6">
          <textPath
            href="#stamp-circle"
            style="font-size: 0.44rem; letter-spacing: 0.04rem;  fill: var(--slate-0); font-weight: 600; text-transform: uppercase;"
            startOffset="0px"
          >
            ${county || ''}
          </textPath>
        </text>
      `,
    },
  })}
  </figure> : null;
}
