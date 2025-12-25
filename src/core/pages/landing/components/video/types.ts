// Import
/// Types
import { RefObject } from 'react';
import { DispatchSetState } from '@/core/types';

// Types
export type GetVideosParams = {
    setVideos: DispatchSetState< string [] >;
};

export type ShuffleVideosParams = {
    videos: string [];
};

export type PlayVideosParams = {
    videos: string [];
    videoRef: RefObject< null | HTMLVideoElement >;
};