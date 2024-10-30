export const dateGuard = (date) => {
    const today = new Date();
    if (date < today) {
        alert("Please choose a future date");
        return false;
    }
    return true;
  }