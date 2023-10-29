export function getColor(value) {
  
  if (value <= 0) {
    return "#EDEDED";
  } else if (value <= 9) {
    return "#ACD5F2";
  } else if (value <= 19) {
    return "#7FA8C9";
  } else if (value <= 29) {
    return "#527BA0";
  } else  {
    return "#254E77";
  } 
}