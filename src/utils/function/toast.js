import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const mySwal = withReactContent(Swal);

export const Toast = mySwal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1000,
    timerProgressBar: true,
});

export const logoutAlert = (logoutAction) => {
    Swal.fire({
        title: "Are you sure you want to logout?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, logout!",
        cancelButtonText: "No, stay logged in",
    }).then((result) => {
        if (result.isConfirmed) {
            logoutAction();
        } else {
            console.log("Logout canceled");
        }
    });
};
