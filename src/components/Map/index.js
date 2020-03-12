import React, { useEffect, useState, useRef } from "react";

import svg from "./garden.svg";

const links = [
  {
    coords: { lat: 52.4862, lng: -1.8104 }, // required: latitude & longitude at which to display the marker
    title: `Another Tree`, // optional
    image: svg
  },
  {
    coords: { lat: 52.5762, lng: -2.0204 }, // required: latitude & longitude at which to display the marker
    title: `Another Tree`, // optional
    image: svg
  },
  {
    coords: { lat: 52.5177, lng: -1.9952 }, // required: latitude & longitude at which to display the marker
    title: `Another Tree`, // optional
    image: svg
  },
  {
    coords: { lat: 52.5362, lng: -2.0104 }, // required: latitude & longitude at which to display the marker
    title: `Another Tree`, // optional
    image: svg
  },
  {
    coords: { lat: 52.4062, lng: -1.5504 }, // required: latitude & longitude at which to display the marker
    title: `Another Tree`, // optional
    image: svg
  },
  {
    coords: { lat: 52.6999, lng: -2.0204 }, // required: latitude & longitude at which to display the marker
    title: `Another Tree`, // optional
    image: svg
  },
  {
    coords: { lat: 52.4929, lng: -1.9652 }, // required: latitude & longitude at which to display the marker
    title: `Another Tree`, // optional
    image: svg
  },
  {
    coords: { lat: 52.4119, lng: -1.7752 }, // required: latitude & longitude at which to display the marker
    title: `Another Tree`, // optional
    image: svg
  },
  {
    coords: { lat: 52.4597, lng: -1.9612 }, // required: latitude & longitude at which to display the marker
    title: `Another Tree`, // optional
    image: svg
  },
  {
    coords: { lat: 52.4897, lng: -1.8902 }, // required: latitude & longitude at which to display the marker
    title: `Another Tree`, // optional
    image: svg
  },
  {
    coords: { lat: 52.4608, lng: -1.915 }, // required: latitude & longitude at which to display the marker
    title: `Another Tree`, // optional
    image: svg
  }
];

function addMarkers(map, links) {
  links.forEach(link => {
    const marker = new window.google.maps.Marker({
      map,
      position: link.coords,
      title: link.title,
      icon: link.image
    });
    marker.addListener(`click`, () => {
      window.location.href = link.url;
    });
  });
}

function Map({ options, onMount, className, onMountProps }) {
  const ref = useRef();
  const [map, setMap] = useState();

  console.log(map);

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

  return (
    <div
      style={{
        height: `60vh`,
        width: `60vh`,
        margin: `1em 0`,
        borderRadius: `0.5em`
      }}
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
