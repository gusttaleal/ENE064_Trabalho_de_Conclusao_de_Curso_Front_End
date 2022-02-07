module.exports.DeviceService = class DeviceService {
  formatFirestoreDate = (device) => {
    const date = new Date(device.deviceCreatedAt.seconds * 1000).toLocaleString(
      "pt-BR"
    );
    return date;
  };
};
