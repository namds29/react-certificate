import { Button } from "antd";
import React from "react";
import useModal from "../../hook/useModal";
import ModalComponent from "../../common/ModalComponent";
import Img1 from "../../assets/download.jpg"

const Exercise2 = React.memo(() => {
    const { value: isShowModal1, showModal: showModal1, hideModal: hideModal1 } = useModal(false);
    const { value: isShowModal3, showModal: showModal3, hideModal: hideModal3 } = useModal(false);

    return (
        <>
            <h1>Exercise 2</h1>
            <Button onClick={() => showModal1()}>
                Open Modal 1
            </Button>

            <Button className="ms-3" onClick={() => showModal3()}>
                Open Dialog
            </Button>

            {/* Modal 1 */}
            <ModalComponent
                isShow={isShowModal1}
                hideFunction={hideModal1}
                isModal={true}
                modalStyle={{ width: "70%" }}
                isAllowClickOutSide={true}
                header={
                    <h2>Modal Header</h2>
                }
                // headerStyle={{
                //     backgroundColor: "green",
                //     color: "white"
                // }}
                // isShowHeaderCloseButton={false}
                body={
                    <>
                        <p>Some text in the Modal Body</p>
                        <p>Some other text...</p>
                    </>
                }
                // bodyStyle
                footer={
                    <h3>Modal Footer</h3>
                }
            // footerStyle={{
            //     backgroundColor: "green",
            //     color: "white"
            // }}
            />


            {/* Modal 2 */}
            <ModalComponent
                isShow={isShowModal3}
                hideFunction={hideModal3}
                isModal={false}
                modalStyle={{ width: "50%", border: "2px solid black" }}
                header={
                    <>
                        <h2>Billions</h2>
                        <hr />
                    </>
                }
                headerStyle={{
                    backgroundColor: "white",
                    color: "black"
                }}
                isShowHeaderCloseButton={true}
                body={
                    <div className="flex">
                        <div className="text-center">
                            <img
                                src={Img1}
                                alt="img1"
                                width='50%'
                            />
                        </div>
                        <div className="text-center">
                            <img
                                src={Img1}
                                alt="img1"
                                width='50%'
                            />
                        </div>
                    </div>
                }
                // bodyStyle
                footer={
                    <>
                        <hr />
                        <h3>Modal Footer</h3>
                        <hr />
                    </>
                }
                footerStyle={{
                    backgroundColor: "white",
                    color: "red"
                }}
            />
        </>
    );
});

export default Exercise2;