import Script from 'next/script';
import React, { useEffect, useRef } from 'react';
import { entries } from './entries';
import { quadrants, rings, VisualizationConfig } from './types';

declare global {
  interface Window {
    radar_visualization: (visConfig: VisualizationConfig) => void;
  }
}

export function Radar() {
  const svgRef = useRef<SVGSVGElement>();

  useEffect(() => {
    const svgElement = svgRef.current;

    window.radar_visualization({
      svg_id: 'radar',
      width: 1450,
      height: 1000,
      colors: {
        background: '#fff',
        grid: '#bbb',
        inactive: '#ddd'
      },
      title: 'GS&F Tech Radar — 2023.04',
      quadrants: quadrants,
      rings: rings,
      print_layout: true,
      entries: entries
    });

    return () => {
      if (svgElement) {
        svgElement.childNodes.forEach(node => node.remove());
      }
    };
  }, []);

  return (
    <>
      <Script
        strategy="beforeInteractive"
        src="https://d3js.org/d3.v4.min.js"
      />

      <Script
        strategy="beforeInteractive"
        src="https://zalando.github.io/tech-radar/release/radar-0.6.js"
      />

      <svg id="radar" ref={svgRef} />
    </>
  );
}
