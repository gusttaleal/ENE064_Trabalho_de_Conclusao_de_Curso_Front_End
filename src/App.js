import { useState, useEffect } from "react";
import { db } from "./firebase-config";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  GeoPoint,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";

import "./App.css";

function App() {
  const [devices, setDevice] = useState([]);

  useEffect(() => {}, [devices]);

  console.log(devices.map((device) => device.id));

  const getDevices = async () => {
    try {
      const data = await getDocs(
        query(collection(db, "devices"), orderBy("deviceCreatedAt", "asc"))
      );
      setDevice(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    } catch (error) {
      throw error;
    }
  };

  const createDevice = async () => {
    try {
      await addDoc(collection(db, "devices"), {
        deviceName: "NEO-7M",
        deviceType: "GNSS",
        deviceStatus: true,
        deviceCreatedAt: serverTimestamp(),
      });
      await getDevices();
    } catch (error) {
      throw error;
    }
  };

  const recivedData = async (id) => {
    const ref = collection(db, "devices/" + id + "/transmittedData");
    try {
      await addDoc(ref, {
        location: new GeoPoint(-40.5, 25.0),
        createdAt: serverTimestamp(),
      });
    } catch (error) {
      throw error;
    }
  };

  const deleteDevice = async (id) => {
    const reference = doc(db, "devices", id);
    try {
      await deleteDoc(reference);
      await getDevices();
    } catch (error) {
      throw error;
    }
  };

  const formatFirestoreDate = (device) => {
    const date = new Date(device.deviceCreatedAt.seconds * 1000).toLocaleString(
      "pt-BR"
    );
    return date;
  };

  return (
    <div className="App">
      {devices.map((device) => {
        return (
          <section key={device.id}>
            <p>id: {device.id}</p>
            <p>deviceCreatedAt: {formatFirestoreDate(device)}</p>
            <p>deviceName: {device.deviceName}</p>
            <p>deviceType: {device.deviceType}</p>
            <p>deviceStatus: {device.deviceStatus.toString()}</p>

            <button onClick={() => recivedData(device.id)}>recivedData</button>
            <button onClick={() => deleteDevice(device.id)}>Delete</button>
          </section>
        );
      })}
      <button onClick={createDevice}>Create</button>
    </div>
  );
}

export default App;
