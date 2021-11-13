import Item from "../item/item";
import { Grid,Box } from "@mui/material";
import "./itemlist.css";
const Itemlist = (props) => {
  const { data } = props;
  
  return (
    <Box className="container">
      <Grid container  direction="row" spacing={2}>
        {data.map((val,key) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3}  key={key} > 
            {/* style={{display: 'flex'}} */}
              <Item data={val} xs={12} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
export default Itemlist;
