export const statusCondition = (dataStatus, askedStatus) => {
  return dataStatus == askedStatus || askedStatus == "" ? true : false;
};

export const dateCondition = (dataPoint, askedDateRange) => {
  let dataDate = new Date(dataPoint);
  let from = askedDateRange["from"];
  let to = askedDateRange["to"];

  let defaultCondition = from.getTime() == to.getTime();
  let mainCondition =
    from.getTime() <= dataDate.getTime() && dataDate.getTime() <= to.getTime();
  return mainCondition || defaultCondition ? true : false;
};

export const rangeCondition = (dataPoint, askedScoreRange) => {
  let dataScore = dataPoint;
  let from = askedScoreRange["from"];
  let to = askedScoreRange["to"];

  let defaultCondition = to == 0 && from == 0;
  let mainCondition = from <= dataScore && dataScore <= to;
  return mainCondition || defaultCondition ? true : false;
};

export const singleCheckCondition = (dataPoint, CheckList) => {
  let dataCheckPoint = dataPoint;
  let mainCondition = CheckList[dataCheckPoint];
  return mainCondition ? true : false;
};

export const multiCheckCondition = (dataPoint, CheckList) => {
  let dataChecksString = dataPoint;
  let dataChecks = dataChecksString.split(",");
  for (let i = 0; i < dataChecks.length; i++) {
    let element = dataChecks[i].trim();
    if (CheckList[element]) {
      return true;
    }
  }
  return false;
};
