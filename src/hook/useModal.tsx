import { useState } from "react";

const useModal = (isOpen: boolean) => {
    const [value, setValue] = useState<boolean>(isOpen);

    const showModal = () => setValue(true);
    const hideModal = () => setValue(false);

    return { value, showModal, hideModal };
}

export default useModal;