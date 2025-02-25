import { Slide, toast } from 'react-toastify';

const toastFailed = (message: string) => {
    toast.error(message, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        transition: Slide,
    });
};

export default toastFailed;