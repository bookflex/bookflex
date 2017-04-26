/**
 * Created by Joy on 2017. 4. 17..
 */
export const fetchData = () => {
  return {
    type: "FETCH_DATA"
  };
};

export const onClickTab = (key) => {
  return {
    type: "CLICK_TAB",
    key: key
  };
};

