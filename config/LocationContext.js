import React, { createContext, useContext, useState } from 'react';

const LocationContext = createContext();

export const useLocation = () => {
  return useContext(LocationContext);
};

export const LocationProvider = ({ children }) => {
  const [userLocation, setUserLocation] = useState(null);

  const updateLocation = (locationData) => {
    setUserLocation(locationData);
  };

  return (
    <LocationContext.Provider
      value={{
        userLocation,
        updateLocation,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
