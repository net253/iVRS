import Swal from "sweetalert2";

export const toastMixin = Swal.mixin({
  toast: true,
  icon: "success",
  title: "General Title",
  position: "top-right",
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

export const toastErrorMixin = Swal.mixin({
  toast: true,
  icon: "error",
  title: "General Title",
  position: "top-right",
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

export const toastWarningMixin = Swal.mixin({
  toast: true,
  icon: "warning",
  title: "General Title",
  position: "top-right",
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

export const toastInfoMixin = Swal.mixin({
  toast: true,
  icon: "info",
  title: "General Title",
  position: "top-right",
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});
