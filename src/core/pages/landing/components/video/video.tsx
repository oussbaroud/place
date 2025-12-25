'use client'

// Import
/// Functions
import { useEffect, useRef, useState } from 'react';
import { getVideos, playVideos } from './functions';

/// Styles
import styles from './video.module.css';

// Component
export default function Video () {
  // Use states
  const [ videos, setVideos ] = useState< string [] >( [] );

  // Use refs
  const videoRef = useRef< null | HTMLVideoElement >( null );

  // Use effects
  useEffect( () => {
    // Get
    getVideos( { setVideos } );

  }, [] );

  useEffect( () => {
    // Paly
    playVideos( { videoRef, videos } );

  }, [ videos ] );

  // Return
  return (
    videos.length > 0 &&
    <video
      ref={ videoRef }
      className={ styles.video }
      muted
    />
  );
};