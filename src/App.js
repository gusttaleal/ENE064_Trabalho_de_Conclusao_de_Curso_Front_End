import { useState, useEffect } from "react";
import { DeviceModel } from "./models/DeviceModel";
import { createDevice, readDevice, updateDevice, deleteDevice } from "./repositories/DeviceRepository";

function App() {
  const [devices, setDevice] = useState([]);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    const getDevices = async () => {
      let result = await readDevice();
      const devices = result.map((_device) => {
        const device = new DeviceModel();
        return device.set(_device);
      });
      setDevice(devices);
    };
    getDevices();
  }, [flag]);

  return (
    <div className="App">
      {devices.map((device) => {
        const model = new DeviceModel();
        return (
          <section key={device.deviceId}>
            <p>deviceId: {device.deviceId}</p>
            <p>deviceName: {device.deviceName}</p>
            <p>deviceType: {device.deviceType}</p>
            <button
              onClick={() => {
                updateDevice(device.deviceId, model.update({ ...device, deviceName: "NEO-7M" }));
                setFlag(!flag);
              }}
            >
              Change deviceName
            </button>{" "}
            <button
              onClick={async () => {
                await deleteDevice(device.deviceId);
                setFlag(!flag);
              }}
            >
              Delete
            </button>
          </section>
        );
      })}
      <button
        onClick={async () => {
          const device = new DeviceModel();
          await createDevice(device.create({ deviceName: "NEO-7M", deviceType: "GNSS", deviceStatus: true }));
          setFlag(!flag);
        }}
      >
        Create
      </button>
    </div>
  );
}

export default App;
