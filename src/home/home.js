import Itemlist from "./itemlist/itemlist";
import Search from "../search/search";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
const Home = (props) => {
  const { data } = props;
  const [searchParam, setSearchParam] = useState("");
  const [dataItem, setdataItem] = useState([]);
  const searchQ = (value) => {
    //   console.log(value)
    setSearchParam(value);
  };
  useEffect(() => {
    setdataItem(
      data.filter((x) => {
        if (searchParam === "") return x;
        else if (x.strDrink.toLowerCase().includes(searchParam.toLowerCase())) {
          return x;
        }
      })
    );
  }, [data, searchParam]);
  return (
    <Grid container xs={12} >
      <Grid item xs={12} justifyContent="center" alignItems="center">
        <div>
          <span>
            Find Some Drink ... <Search searchQ={searchQ} />
          </span>
        </div>
      </Grid>
      <Grid item xs={12}>
        <Itemlist data={dataItem} />
      </Grid>
    </Grid>
  );
};
export default Home;
