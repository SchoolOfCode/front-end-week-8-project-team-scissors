import React, { useState } from "react";

import css from "./MapPage.module.css";

import Map from "../Map";
import Title from "../Title";

const title = { type: "title", title: "What We've Achieved Together" };

const mapOptions = {
  birmingham: {
    center: { lat: 52.4862, lng: -1.8904 },
    zoom: 15
  },
  coventry: {
    center: { lat: 52.4068, lng: -1.5197 },
    zoom: 15
  },
  dudley: {
    center: { lat: 52.5123, lng: -2.0811 },
    zoom: 15
  },
  sandwell: {
    center: { lat: 52.5362, lng: -2.0108 },
    zoom: 15
  },
  solihull: {
    center: { lat: 52.4118, lng: -1.7776 },
    zoom: 15
  },
  walsall: {
    center: { lat: 52.5862, lng: -1.9829 },
    zoom: 15
  },
  wolverhampton: {
    center: { lat: 52.587, lng: -2.1284 },
    zoom: 15
  }
};

function MapPage() {
  const [authority, setAuthority] = useState(mapOptions.birmingham);

  function changeMap(area) {
    setAuthority(area);
  }

  return (
    <section className={css.mapPage}>
      <Title grid={css.titleGrid1} {...title} />
      <section className={css.mapGrid}>
        <Map options={authority} />
      </section>
      <section className={css.contentGrid1}>
        <p>Click on each authority to focus the map on your local area.</p>
      </section>
      <section className={css.contentGrid2}>
        <p>
          The map below shows the location of each tree that we have planted.
        </p>
      </section>
      <table className={css.tableGrid}>
        <tr>
          <th>Local Authority</th>
          <th>Trees Planted</th>
        </tr>
        <tr>
          <td onClick={() => changeMap(mapOptions.birmingham)}>Birmingham</td>
          <td>489</td>
        </tr>
        <tr>
          <td onClick={() => changeMap(mapOptions.coventry)}>Coventry</td>
          <td>376</td>
        </tr>
        <tr>
          <td onClick={() => changeMap(mapOptions.dudley)}>Dudley</td>
          <td>532</td>
        </tr>
        <tr>
          <td onClick={() => changeMap(mapOptions.sandwell)}>Sandwell</td>
          <td>342</td>
        </tr>
        <tr>
          <td onClick={() => changeMap(mapOptions.solihull)}>Solihull</td>
          <td>230</td>
        </tr>
        <tr>
          <td onClick={() => changeMap(mapOptions.walsall)}>Walsall</td>
          <td>871</td>
        </tr>
        <tr>
          <td onClick={() => changeMap(mapOptions.wolverhampton)}>
            Wolverhampton
          </td>
          <td>944</td>
        </tr>
      </table>
    </section>
  );
}

export default MapPage;
