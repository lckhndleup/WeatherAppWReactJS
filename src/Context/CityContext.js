
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CityContext = createContext();

const CityProvider = ({ children }) => {
  const cities = [
    "Adana", "Adıyaman", "Afyon", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin", "Aydın", "Balıkesir", "Bilecik",
    "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Edirne",
    "Elazığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkari", "Hatay", "Isparta",
    "İçel (Mersin)", "İstanbul", "İzmir", "Kars", "Kastamonu", "Kayseri", "Kırklareli", "Kırşehir", "Kocaeli", "Konya",
    "Kütahya", "Malatya", "Manisa", "Kahramanmaraş", "Mardin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", "Rize",
    "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Şanlıurfa", "Uşak", "Van",
    "Yozgat", "Zonguldak", "Aksaray", "Bayburt", "Karaman", "Kırıkkale", "Batman", "Şırnak", "Bartın", "Ardahan", "Iğdır",
    "Yalova", "Karabük", "Kilis", "Osmaniye", "Düzce"
  ];

  const apiKey = "ecb42379be5425190106092d699c577f";
  const [cityData, setCityData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const loadMoreCities = () => {
    if (!loading) {
      setLoading(true);
      const startIndex = (page - 1) * 10;
      const endIndex = startIndex + 10;
      const requests = cities.slice(startIndex, endIndex).map(city => {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        return axios.get(apiUrl)
          .then(response => response.data)
          .catch(error => {
            console.log("bu şehir verisinde bir sorun çıktı", city, error);
            return null;
          });
      });
      Promise.all(requests).then(responses => {
        const updatedCityData = cityData.concat(responses.filter(Boolean));
        setCityData(updatedCityData);
        setLoading(false);
        setPage(page + 1);
      });
    }
  };

  useEffect(() => {
    loadMoreCities();
  }, []);


  const values = {cityData,loading,loadMoreCities} // göndermek istediğimiz veriler
  return (
    <CityContext.Provider value={values}>
      {children}
    </CityContext.Provider>
  );
};

export default CityProvider;
