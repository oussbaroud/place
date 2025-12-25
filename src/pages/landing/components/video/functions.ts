// Import
/// Types
import { GetVideosParams, PlayVideosParams, ShuffleVideosParams } from './types';

/// Actions
import { getSrcs } from './actions'

// Functions
/// Get
export async function getVideos ( { setVideos }: GetVideosParams ) {
    // Get
    const srcs = await getSrcs();

    // Set state
    setVideos( () => srcs );
};

/// Shuffle
function shuffleVideos ( { videos }: ShuffleVideosParams ) {
    // Copy
    const newVideos = [ ...videos ];

    // Shuffle
    for ( let index = newVideos.length - 1; index > 0; index-- ) {
        // Random
        const random = Math.floor( Math.random() * ( index + 1 ) );

        // Switch
        [ newVideos[ index ], newVideos[ random ] ] = [ newVideos[ random ], newVideos[ index ] ];
    };

    // Return
    return newVideos;
};

/// Play
export function playVideos ( { videoRef, videos }: PlayVideosParams ) {
    // Ref
    const player = videoRef.current;

    // If video ref null
    // Or videos empty
    if ( !player || videos.length === 0 ) return;

    // Variables
    let index = 0;
    let shuffled = shuffleVideos( { videos } );

    // Play next
    const playNext = () => {
        // If played last video
        if ( index + 1 > shuffled.length ) {
            index = 0;
            shuffled = shuffleVideos( { videos } );
        };

        // Play
        player.src = shuffled[ index ];
        player.load();
        player.play();

        // Update index
        index++;
    };

    // Listen
    player.onended = playNext;

    // Start
    playNext();
};