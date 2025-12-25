// Import
/// Types
import { NextButtonProps } from './next/types';
import { SubmitButtonProps } from './submit/types';
import { CustomButtonProps } from './custom/types';

/// Styles
import styles from './button.module.css';

// Functions
/// Class names
//// Disabled
export function handleDisabledClassName ( params: NextButtonProps | SubmitButtonProps | CustomButtonProps ) {
    const className = !params.isActive ? styles.btnDisabled : '';
    return className;
}

//// Pending
export function handlePendingClassName ( params: NextButtonProps | SubmitButtonProps | CustomButtonProps ) {
    const className = params.isPending ? styles.btnPending : '';
    return className;
}