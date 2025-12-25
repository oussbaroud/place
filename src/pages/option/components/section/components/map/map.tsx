// Import
/// Types
import { MapProps } from './types';

/// Styles
import styles from './map.module.css';

// Component
export default function Map ( props: MapProps ) {
    // Return
    return (
        <iframe
            className={ styles.map }
            src={ props.url }
            loading={ 'lazy' }
        />
    );
};