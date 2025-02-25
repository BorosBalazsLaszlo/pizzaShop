import { Slide, toast } from 'react-toastify';

const toastSuccess = (message: string) => {
    toast.success(message,{
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
        });
};

export default toastSuccess;