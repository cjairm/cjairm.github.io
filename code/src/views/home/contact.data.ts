import appData from "../../app.data";

const data = {
  location: appData.currentLocation,
  email: appData.email,
  phoneNumber: appData.phone,
} as const;

export default data;
