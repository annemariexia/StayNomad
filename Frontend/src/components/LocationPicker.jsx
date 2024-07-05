import React, { useEffect, useState } from "react";
import "./LocationPicker.css";
import { regions, countries, cityStates } from "../LocationData.js";

const LocationPicker = ( {updateFunction} ) => {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [data, setData] = updateFunction;

  console.log(selectedCountry);

  const [regionCountries, setRegionCountries] = useState([]);
  const [countryCityStates, setCountryCityStates] = useState([]);

  useEffect(() => {
    // Set initial countries and city states based on the selected region
    setRegionCountries(countries[selectedRegion]?.split("|") || []);
  }, [selectedRegion]);

  const handleRegionChange = (e) => {
    const region = e.target.value;
    setSelectedRegion(region);
    setSelectedCountry("");
  };

  const handleCountryChange = (e) => {
    const country = e.target.value;
    setSelectedCountry(country);
    setCountryCityStates(cityStates[country].split("|"));
  };


  const handleCityChange = (e) => {
    const city = e.target.value;
    setSelectedCity(city);
    setData({...data, location: city})
  };

  return (
    <div id="location-picker-section" className="location-container">
      <div id="location-picker-container">
        <div id="location-picker-title">
          <h4>Discover your next home location</h4>
          <main>
            <form className="location-form">
              <select
                className="location-selection"
                onChange={handleRegionChange}
                value={selectedRegion}
                id="region"
              >
                <option value="">SELECT REGION</option>
                {regions.map((region) => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))}
              </select>

              <select
                className="location-selection"
                name="country"
                onChange={handleCountryChange}
                value={selectedCountry}
              >
                <option value="">SELECT COUNTRY</option>
                {regionCountries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>

              <select className="location-selection" name="city" value={selectedCity} onChange={handleCityChange}>
                <option value="">SELECT NEAREST DIVISION</option>
                {countryCityStates.map((cityState) => (
                  <option key={cityState} value={cityState}>
                    {cityState}
                  </option>
                ))}
              </select>
            </form>
          </main>
        </div>
      </div>
    </div>
  );
};

export default LocationPicker;
