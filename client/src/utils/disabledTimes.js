export const disabledTimes = (date, dateLists, days) => {
  let day = new Date(date["$d"]).getDay();
  let hour = date["$H"];

  const formattedDate = `${date["$y"]}${
    date["$M"] + 1 < 10 ? "0" + (date["$M"] + 1) : date["$M"] + 1
  }${date["$D"] < 10 ? "0" + date["$D"] : date["$D"]}`;

  if (
    days[day] === "Sunday" &&
    !dateLists.dateObjectList?.dates.includes(Number(formattedDate))
  ) {
    if (!(hour >= 9 && hour <= 16)) {
      return true;
    }
  } else if (
    days[day] === "Sunday" &&
    dateLists.dateObjectList?.dates.includes(Number(formattedDate))
  ) {
    let minute = date["$m"];

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

    if (!(hour >= 9 && hour <= 16)) {
      return true;
    } else if (selectedDateTimes[hour]?.includes(minute)) {
      return true;
    } else if (selectedDateTimes[hour].length === 2) {
      return true;
    }
  } else {
    return false;
  }
};
