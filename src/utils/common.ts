import axios from "axios"

export const fetchAutoSuggestions = async (query: string) => {
  try {
    const response = await axios.get(
      `https://cabs.makemytrip.com/autocomplete/v3?query=${query}&tripType=$OW&requestFor=pickup&isCorporate=false&ohl=no`,
      {
        headers: {
          'x-gommt-brand': 'MMT',
          'X-Akamai-Edgescape': 'georegion=104,country_code=IN,region_code=DL,city=NEWDELHI,lat=13.19,long=77.70,timezone=GMT+5.50,continent=AS,throughput=vhigh,bw=5000,asnum=133982,location_id=0'
        },
      }
    );

    if (response.data.status === 'SUCCESS') {
      const formattedSuggestions = response.data.response.map((suggestion: any) => ({
        address: suggestion.address,
        mainText: suggestion.main_text,
        secondaryText: suggestion.secondary_text,
        placeId: suggestion.place_id
      }));
      return formattedSuggestions;
    } else {
      return []
    }
  } catch (error) {
    console.error('Error fetching suggestions:', error);
  }
};