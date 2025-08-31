import { axiosInstance } from "../../utils/axiosInstance";
import { useState, useEffect, createContext } from "react";

export const PropertyContext = createContext();

const PropertyProvider = ({ children }) => {
  const [loading, setIsLoading] = useState(false);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [allProperties, setAllProperties] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fetchProperties = async () => {
    setIsLoading(true);

    try {
      const response = await axiosInstance.get("/allProperty/allproperty");
      const { data } = response;
      const property = data.allProperties;
      console.log(property);
      setAllProperties(property);
      setFilteredProperties(property);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  const propertySearch = (query) => {
    setIsSubmitting(true);

    if (!(query.bedrooms && query.location)) {
      setFilteredProperties(allProperties);
    }

    const filteredResult = allProperties.filter((property) => {
      const { location = "", bedrooms } = property;

      const matchedLocation = query.location
        ? location.toLowerCase().includes(query.location.toLowerCase())
        : true;

      const matchedBedrooms = query.bedrooms
        ? Number(bedrooms) === Number(query.bedrooms)
        : true;

      return matchedLocation && matchedBedrooms;
    });
    setFilteredProperties(filteredResult);
    setIsSubmitting(false);
  };

  return (
    <PropertyContext.Provider
      value={{
        loading,
        allProperties,
        filteredProperties,
        propertySearch,
        isSubmitting,
      }}
    >
      {" "}
      {children}
    </PropertyContext.Provider>
  );
};

export default PropertyProvider;
