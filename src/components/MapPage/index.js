import React, { useEffect, useState, useRef } from "react";

import svg from "./garden.svg";

const links = [
  {
    coords: { lat: 52.4862, lng: -1.8904 }, // required: latitude & longitude at which to display the marker
    title: `Life, the Universe and Everything`, // optional
    url: `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.7v7HW8kaMsxEVJP9HsPjhQHaHa%26pid%3DApi&f=1` // optional
  }
];

function addMarkers(map, links) {
  links.forEach((link, index) => {
    const marker = new window.google.maps.Marker({
      map,
      position: link.coords,
      label: `${index + 1}`,
      title: link.title,
      icon: svg
    });
    marker.addListener(`click`, () => {
      window.location.href = link.url;
    });
  });
}

function Map({ options, onMount, className, onMountProps }) {
  const ref = useRef();
  const [map, setMap] = useState();

  useEffect(() => {
    const onLoad = () =>
      setMap(new window.google.maps.Map(ref.current, options));
    if (!window.google) {
      const script = document.createElement(`script`);
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyB8EPkJkBv6UZMCP8xtrt9eFcWv5Mb6moc`;
      document.head.append(script);
      script.addEventListener(`load`, onLoad);
      return () => script.removeEventListener(`load`, onLoad);
    } else onLoad();
  }, [options]);

  if (map && typeof onMount === `function`) onMount(map, onMountProps);

  //
  return (
    <div
      style={{ height: `60vh`, margin: `1em 0`, borderRadius: `0.5em` }}
      {...{ ref, className }}
    />
  );
}

Map.defaultProps = {
  options: {
    center: { lat: 52.4862, lng: -1.8904 },
    zoom: 15
  },
  onMount: addMarkers,
  onMountProps: links
};

export default Map;
