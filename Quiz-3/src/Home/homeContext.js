import React, { useState, createContext } from "react";

export const DaftarBukuContext = createContext();

export const DaftarBukuProvider = props => {
  const [DaftarBuku, setDaftarBuku] = useState({
    lists: null,
    selectedId: 0,
    statusForm: "create"
  });

  return (
    <DaftarBukuContext.Provider value={[DaftarBuku, setDaftarBuku]}>
      {props.children}
    </DaftarBukuContext.Provider>
  );
};
