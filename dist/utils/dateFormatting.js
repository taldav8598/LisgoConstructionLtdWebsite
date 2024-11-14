import axios from "axios";
export const dateFormatting = async (apiUrl, setDateLists) => {
  const date = new Date();
  const formattedMinDate = date.toISOString();
  try {
    const {
      data
    } = await axios.get(`${apiUrl}&timeMin=${formattedMinDate}`);
    const {
      items
    } = data;
    let dateObjectList = {
      dates: [],
      dateTimes: {
        start: [],
        end: []
      }
    };
    items.forEach(item => {
      if (item.start.dateTime) {
        const date = new Date(item.start.dateTime);
        const endDate = new Date(item.end.dateTime);
        const localeString = date.toLocaleTimeString("en-UK");
        const localeStringEnd = endDate.toLocaleTimeString("en-UK");
        let shortenedDate = `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1}-${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}`;
        dateObjectList.dates.push(Number(shortenedDate.replaceAll("-", "")));
        dateObjectList.dateTimes.start.push(Number(localeString.split(":").join("")));
        dateObjectList.dateTimes.end.push(Number(localeStringEnd.split(":").join("")));
      }
    });
    return setDateLists(prevState => ({
      ...prevState,
      dateObjectList
    }));
  } catch (err) {
    console.log(err);
  }
};