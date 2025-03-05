import React, { createContext, useState, useEffect } from "react";

// Create a context
export const DataContext = createContext();

// Data Provider Component
export const DataProvider = ({ children }) => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);



  const fetchData = async () => {
        
    try {
      const LeadsResponse = await fetch(
        "https://buyinteriorapp-d0adf77e7c33.herokuapp.com/api/leads/"
      );
      const LeadsData = await LeadsResponse.json();
      const reversedLeads = LeadsData.reverse();
      setLeads(reversedLeads);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DataContext.Provider
      value={{ loading, error, leads , fetchData}}
    >
      {children}
    </DataContext.Provider>
  );
};
