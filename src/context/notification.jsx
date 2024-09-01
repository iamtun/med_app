/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import Notification from "../components/Notification/Notification";
const NotificationContext = createContext({
  notification: null,
  setNotification: () => {},
});

export const useNotification = () => useContext(NotificationContext);

// eslint-disable-next-line react/prop-types
const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState(null);

  return (
    <NotificationContext.Provider value={{ notification, setNotification }}>
      <main>{children}</main>
      {notification && <Notification {...notification} />}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
