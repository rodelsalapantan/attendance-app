import Swal from 'sweetalert2'

export const useToast = () => {
    const ToastWithTimer = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true
    });

    const AlertDialog = Swal.mixin({
        showCancelButton: true,
        confirmButtonColor: '#008f20',
        cancelButtonColor: '#d90404',
        confirmButtonText: 'Confirm'
    })

    const AlertCenterLoading = Swal.mixin({
        allowOutsideClick: false,
        didOpen: () => {
            Swal.showLoading()
        },
    })

    return {
        Swal,
        ToastWithTimer,
        AlertDialog,
        AlertCenterLoading,
    };
}