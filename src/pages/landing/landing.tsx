// Import
/// Styles
import styles from './landing.module.css';

/// Components
import Hero from './components/hero/hero';
import Video from './components/video/video'

// Component
export default function Landing () {
    // Return
    return (
        <div className={ styles.wrapper }>
            <Video/>
            <Hero/>
        </div>
    );
};