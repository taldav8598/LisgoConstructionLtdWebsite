export const disabledDates = (date, dateLists, days) => {
  let day = new Date(date["$d"]).getDay();
  const formattedDate = `${date["$y"]}${
    date["$M"] + 1 < 10 ? "0" + (date["$M"] + 1) : date["$M"] + 1
  }${date["$D"] < 10 ? "0" + date["$D"] : date["$D"]}`;

  let numberDate = Number(formattedDate.split("-").join(""));

  if (days[day] === "Saturday") {
    return true;
  } else if (days[day] === "Sunday") {
    const indicesArr = dateLists.dateObjectList?.dates
      .map((date, index) => {
        if (date === Number(formattedDate)) {
          return index;
        }
      })
      .filter((element) => element !== undefined);

    const selectedDateTimes = {
      9: [],
      10: [],
      11: [],
      12: [],
      13: [],
      14: [],
      15: [],
      16: [],
    };

    for (let i = 0; i < indicesArr?.length; i++) {
      const timeStr = String(dateLists.dateObjectList.dateTimes.start[i]);
      const minutes = Number(timeStr.at(-4) + timeStr.at(-3));

      selectedDateTimes[
        (
          dateLists.dateObjectList.dateTimes.start[indicesArr[i]] / 10000
        ).toFixed()
      ].push(minutes);
    }

    const allTimesBooked = Object.values(selectedDateTimes).every(
      (arr) => arr.length === 2
    );

    if (allTimesBooked) {
      return true;
    } else {
      return false;
    }
  } else {
    return dateLists.dateObjectList?.dates.includes(numberDate);
  }
};
