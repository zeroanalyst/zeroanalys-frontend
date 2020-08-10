import { createChainedFunction } from "@material-ui/core";
import {
  statusCondition,
  dateCondition,
  rangeCondition,
  singleCheckCondition,
  multiCheckCondition,
} from "./filterConditions";

export class Filter {
  filter = (filterObj) => {
    console.log(filterObj);
  };
}

export function insightsFilter(data, filterObj) {
  var filtParams = Object.getOwnPropertyNames(filterObj);
  var newData = [];
  data.map((dataEntry) => {
    let isValid = true;
    let i = 0;
    while (isValid && i < filtParams.length) {
      if (filtParams[i] == "status") {
        isValid = statusCondition(dataEntry["status"], filterObj["status"]);
      } else if (filtParams[i] == "date") {
        isValid = dateCondition(dataEntry["creationdate"], filterObj["date"]);
      } else if (filtParams[i] == "tpScore") {
        isValid = rangeCondition(dataEntry["tpscore"], filterObj["tpScore"]);
      } else if (filtParams[i] == "KCPList") {
        isValid = singleCheckCondition(
          dataEntry["killchainphase"],
          filterObj["KCPList"]
        );
      } else if (filtParams[i] == "complianceList") {
        isValid = multiCheckCondition(
          dataEntry["affectedcompliance"],
          filterObj["complianceList"]
        );
      }
      // default:
      //   break;

      i++;
    }

    if (isValid) {
      newData.push(dataEntry);
    }
  });
  return newData;
}
