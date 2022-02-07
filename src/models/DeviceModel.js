import { serverTimestamp } from "firebase/firestore";

class DeviceModel {
  constructor() {
    this.deviceId = "";
    this.deviceName = "";
    this.deviceType = "";
    this.deviceStatus = false;
    this.deviceCreatedAt = "";
    this.deviceUpdatedAt = "";
  }

  set(device) {
    this.deviceId = device.deviceId !== undefined ? device.deviceId : "";
    this.deviceName = device.deviceName !== undefined ? device.deviceName : "";
    this.deviceType = device.deviceType !== undefined ? device.deviceType : "";
    this.deviceStatus = device.deviceStatus !== undefined ? device.deviceStatus : false;
    this.deviceCreatedAt = device.deviceCreatedAt !== undefined ? device.deviceCreatedAt : "";
    this.deviceUpdatedAt = device.deviceUpdatedAt !== undefined ? device.deviceUpdatedAt : "";

    return {
      deviceId: this.deviceId,
      deviceName: this.deviceName,
      deviceType: this.deviceType,
      deviceStatus: this.deviceStatus,
      deviceCreatedAt: this.deviceCreatedAt,
      deviceUpdatedAt: this.deviceUpdatedAt,
    };
  }

  create(device) {
    this.deviceName = device.deviceName !== undefined ? device.deviceName : "";
    this.deviceType = device.deviceType !== undefined ? device.deviceType : "";
    this.deviceStatus = device.deviceStatus !== undefined ? device.deviceStatus : false;
    this.deviceCreatedAt = serverTimestamp();
    this.deviceUpdatedAt = serverTimestamp();

    return {
      deviceName: this.deviceName,
      deviceType: this.deviceType,
      deviceStatus: this.deviceStatus,
      deviceCreatedAt: this.deviceCreatedAt,
      deviceUpdatedAt: this.deviceUpdatedAt,
    };
  }

  update(device) {
    this.deviceName = device.deviceName !== undefined ? device.deviceName : "";
    this.deviceType = device.deviceType !== undefined ? device.deviceType : "";
    this.deviceStatus = device.deviceStatus !== undefined ? device.deviceStatus : false;
    this.deviceUpdatedAt = serverTimestamp();

    return {
      deviceName: this.deviceName,
      deviceType: this.deviceType,
      deviceStatus: this.deviceStatus,
      deviceUpdatedAt: this.deviceUpdatedAt,
    };
  }

  get() {
    return new DeviceModel({
      deviceId: this.deviceId,
      deviceName: this.deviceName,
      deviceType: this.deviceType,
      deviceStatus: this.deviceStatus,
      deviceCreatedAt: this.deviceCreatedAt,
      deviceUpdatedAt: this.deviceUpdatedAt,
    });
  }
}

export { DeviceModel };
