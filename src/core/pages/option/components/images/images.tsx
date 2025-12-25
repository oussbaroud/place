// Import
/// Types
import { ImagesProps } from './types';

/// Styles
import styles from './images.module.css';

// Component
export default function Images ( props: ImagesProps ) {
    // Return
    return (
        <div
            className={ styles.wrapper }
        >
            <div
                className={ styles.container }
            >{
                props.srcs?.map( ( image, index ) => (
                    <img
                        key={ index }
                        className={ styles.image }
                        src={ image }
                        onError={
                            ( error ) => {
                                error.currentTarget.onerror = null;
                                error.currentTarget.src = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='200'><rect width='100%' height='100%' fill='%23f5f5f5'/></svg>`;
                            }
                        }
                    />
                ) )
            }</div>
        </div>
    );
};