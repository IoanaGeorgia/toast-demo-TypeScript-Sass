let elem = document.querySelector<HTMLElement>(".toast");

if (elem) {
  elem.style.display = "none";
}

type ToastObject = {
  icon: string;
  text: string;
  color: string;
};

let successToast: ToastObject = {
  icon: "check_circle",
  text: "Success",
  color: "#4FBF26",
};

let infoToast: ToastObject = {
  icon: "info",
  text: "Info",
  color: "#0096FF",
};

let warningToast: ToastObject = {
  icon: "warning",
  text: "Warning",
  color: "#ff7800",
};

let errorToast: ToastObject = {
  icon: "cancel",
  text: "Error",
  color: "#ff3333",
};

function openToast(toastName: string): void {
  let objectInCause: ToastObject = successToast;

  switch (toastName) {
    case "successToast":
      objectInCause = successToast;
      break;
    case "infoToast":
      objectInCause = infoToast;
      break;
    case "warningToast":
      objectInCause = warningToast;
      break;
    case "errorToast":
      objectInCause = errorToast;
      break;
  }

  let toastElem: any;
  let toastIconElem: any;
  let toastTextElem: any;
  let toastClose: any;

  if (elem) {
    toastElem = elem.cloneNode(true);
    toastIconElem = toastElem.querySelector(".material-icons");
    toastClose = toastElem.querySelector(".toastClose");
    toastTextElem = toastElem.querySelector(".toastText");

    if (toastTextElem) {
      toastTextElem.innerHTML = objectInCause.text;
    }

    if (toastIconElem) {
      toastIconElem.innerHTML = objectInCause.icon;
      toastIconElem.style.color = objectInCause.color;
    }

    if (toastElem) {
      toastElem.classList.add("toastEnter");
      toastElem.style.display = "flex";
      toastElem.style.borderColor = objectInCause.color;

      setTimeout(() => {
        toastElem.classList.remove("toastEnter");
        toastElem.classList.add("toastLeave");

        setTimeout(() => {
          toastElem.style.display = "none";
        }, 300);
      }, 4000);
    }

    if (toastClose) {
      toastClose.addEventListener("click", () => {
        toastElem.classList.add("toastLeave");
        setTimeout(() => {
          toastElem.style.display = "none";
        }, 300);
      });
    }

    if (elem.parentNode) {
      elem.parentNode.insertBefore(toastElem, elem.nextSibling);
    }
  }
}
