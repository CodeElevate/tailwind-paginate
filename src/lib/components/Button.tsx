import React, { Component, ReactNode } from 'react';


interface ButtonProps {
    rel?: string;
    children: ReactNode;
    className?: string;
    disabled?: boolean;
    onClick?: () => void;
    show?: boolean;
    
}

class PaginationButton extends Component<ButtonProps> {

    render(): ReactNode {
        const { rel, children, className, disabled, onClick, show = true, ...rest } = this.props;
        if (!show) {
            return null;
        }
        return (
            <button rel={rel} className={className} disabled={disabled} onClick={onClick} {...rest}>
                {children}
            </button>
        );
    }
}

export default PaginationButton;
