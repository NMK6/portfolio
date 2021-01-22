export const addVisuallyHidden = (oldClass) => {
  document.querySelector(oldClass).classList.add('visually-hidden');
};
export const removeVisuallyHidden = (oldClass) => {
  document.querySelector(oldClass).classList.remove('visually-hidden');
};
