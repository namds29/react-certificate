import React, { FC, useCallback } from "react";
import styles from "../storefront/excercise-2/index.module.scss";

interface ModalComponentProps {
    isShow: boolean;
    isModal?: boolean;
    modalStyle?: React.CSSProperties;
    isAllowClickOutSide?: boolean;
    header?: React.ReactNode;
    headerStyle?: React.CSSProperties;
    isShowHeaderCloseButton?: boolean;
    body?: React.ReactNode;
    bodyStyle?: React.CSSProperties;
    footer?: React.ReactNode;
    footerStyle?: React.CSSProperties;
    hideFunction: () => void;
}
const ModalComponent: FC<ModalComponentProps> = ({
    isShow,
    isModal = true,
    modalStyle,
    isAllowClickOutSide = true,
    header,
    headerStyle,
    isShowHeaderCloseButton = true,
    body,
    bodyStyle,
    footer,
    footerStyle,
    hideFunction,
}) => {
    console.log(isShow)
    const hideModal = useCallback((e: any) => {
        hideFunction();
        e.stopPropagation();
    }, [hideFunction]);

    const ignoreOnClick = useCallback((e: any) => {
        e.stopPropagation();
    }, []);

    const Modal = () => {
        return (
            <div
                className={styles.modalContent}
                style={modalStyle}
                onClick={ignoreOnClick}
            >
                {/* Modal Header */}
                {header &&
                    <div
                        className={styles.modalHeader}
                        style={headerStyle}
                        onClick={ignoreOnClick}
                    >
                        {isShowHeaderCloseButton &&
                            <div
                                className={styles.close}
                                onClick={hideModal} >
                                &times;
                            </div>
                        }
                        {header}
                    </div>
                }
                {/* Modal Body */}
                {body &&
                    <div
                        className={styles.modalBody}
                        style={bodyStyle}
                        onClick={ignoreOnClick}
                    >
                        {body}
                    </div>
                }
                {/* Modal Footer */}
                {footer &&
                    <div className={styles.modalFooter}
                        style={footerStyle}
                        onClick={ignoreOnClick}
                    >
                        {footer}
                    </div>
                }
            </div>
        );
    };

    if (!isShow) {
        return <></>;
    }

    return (
        <>
            {isModal ?
                <div
                    className={styles.modal}
                    onClick={isAllowClickOutSide ? hideModal : undefined}>
                    <Modal />
                </div>
                :
                <Modal />
            }
        </>
    );
};

export default ModalComponent;