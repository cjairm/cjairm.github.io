import { animateCSS, scrollToViewById } from "../utils";

const IS_ACTIVE = "is-active";

export const toogleMenuHandler = async ({
  buttonTogglerElement,
  menuWrapperElement,
}: {
  buttonTogglerElement: HTMLButtonElement;
  menuWrapperElement: HTMLDivElement | HTMLElement;
}) => {
  if (!buttonTogglerElement && !menuWrapperElement) {
    return;
  }

  if (
    buttonTogglerElement?.classList?.contains(IS_ACTIVE) ||
    menuWrapperElement?.classList?.contains(IS_ACTIVE)
  ) {
    await animateCSS(menuWrapperElement, "fadeOutUp").then(() => {
      closeMenu(buttonTogglerElement, menuWrapperElement);
    });
  } else {
    openMenu(buttonTogglerElement, menuWrapperElement);
    await animateCSS(menuWrapperElement, "fadeInDown");
  }
};

const closeMenu = (
  buttonTogglerElement: HTMLButtonElement,
  menuWrapperElement: HTMLDivElement | HTMLElement
) => {
  buttonTogglerElement.classList.remove(IS_ACTIVE);
  menuWrapperElement.classList.remove(IS_ACTIVE);
};

const openMenu = (
  buttonTogglerElement: HTMLButtonElement,
  menuWrapperElement: HTMLDivElement | HTMLElement
) => {
  buttonTogglerElement.classList.add(IS_ACTIVE);
  menuWrapperElement.classList.add(IS_ACTIVE);
};

export const goToViewAndCloseMenu = ({
  buttonTogglerElement,
  menuWrapperElement,
  viewId,
}: {
  buttonTogglerElement: HTMLButtonElement;
  menuWrapperElement: HTMLDivElement | HTMLElement;
  viewId: string;
}) => {
  closeMenu(buttonTogglerElement, menuWrapperElement);
  scrollToViewById(viewId);
};
