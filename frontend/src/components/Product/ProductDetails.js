import React, { Fragment, useEffect, useState } from "react";

//redux imports
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails, clearErrors } from "../../actions/productActions";

import { Space, Button, Typography, Rate } from "antd";
import { HeartFilled, ShoppingFilled } from "@ant-design/icons";

//app components
import Loader from "../Layout/AppLoader";
import MetaData from "../layout/MetaData";

const ProductDetails = ({ match }) => {
  const dispatch = useDispatch();

  const [qty, setQty] = useState(1);

  const { loading, error, product } = useSelector(
    (state) => state.productDetails
  );

  useEffect(() => {
    dispatch(getProductDetails(match.params.id));
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, alert, error, match.params.id]);
  const handleAdd = () => {
    if (qty >= product.stock) {
      return alert.error(`only ${product.stock} item is avaiable!!`);
    } else {
      setQty(qty++);
    }
  };

  const handleRemove = () => {
    if (qty <= 1) {
      return alert.error(`You can not choose less then 1`);
    } else {
      setQty(qty--);
    }
  };

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={product.name} />
        </Fragment>
      )}
    </Fragment>
  );
};

export default ProductDetails;

// <Grid container alignItems="flex-start" spacing={5} zeroMinWidth>
//             <Grid item xs={12} sm={12} md={12} lg={6}>
//               <Carousel
//                 easing="cubic-bezier(1,.15,.55,1.54)"
//                 tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
//                 transitionMs={700}
//               >
//                 {product.images &&
//                   product.images.map((image) => (
//                     <div key={image.public_id}>
//                       <img src={image.url} alt={product.title} height={500} />
//                     </div>
//                   ))}
//               </Carousel>
//             </Grid>
//             <Grid item xs={12} sm={12} md={12} lg={6}>
//               <Card>
//                 <CardContent mb={30}>
//                   <Typography display="block" variant="h4" gutterBottom>
//                     {product.name}
//                   </Typography>
//                   <Typography display="block" variant="caption" gutterBottom>
//                     Product # {product._id}
//                   </Typography>
//                   <Rating name="read-only" value={product.ratings} readOnly />
//                 </CardContent>
//                 <CardContent>
//                   <Typography
//                     display="block"
//                     variant="h4"
//                     gutterBottom
//                     color="secondary"
//                   >
//                     Rs.{product.price}
//                   </Typography>
//                 </CardContent>
//                 <Divider variant="middle" light />
//                 <CardContent>
//                   <Typography
//                     display="block"
//                     variant="body1"
//                     gutterBottom
//                     color="textSecondary"
//                   >
//                     Status:
//                     <span
//                       className={
//                         product.stock > 0 ? "text-success" : "text-danger"
//                       }
//                     >
//                       {product.stock > 0
//                         ? ` ${product.stock} In strock`
//                         : `out of stock`}
//                     </span>
//                   </Typography>
//                 </CardContent>

//                 <CardActions>
//                   <IconButton
//                     aria-label="add"
//                     color="secondary"
//                     onClick={handleRemove}
//                   >
//                     <RemoveIcon />
//                   </IconButton>

//                   <OutlinedInput
//                     size="small"
//                     margin="dense"
//                     readOnly
//                     className={classes.qtyInput}
//                     value={qty}
//                   />

//                   <IconButton
//                     aria-label="add"
//                     color="primary"
//                     onClick={handleAdd}
//                   >
//                     <AddIcon />
//                   </IconButton>
//                   <Box component="span" style={{ marginLeft: "auto" }}>
//                     <Button
//                       variant="contained"
//                       aria-label="add to cart"
//                       color="primary"
//                       onClick={handleAdd}
//                     >
//                       Add to Cart
//                     </Button>
//                     <IconButton aria-label="Favorite" onClick={handleAdd}>
//                       <FavoriteIcon />
//                     </IconButton>
//                   </Box>
//                 </CardActions>
//                 <Divider variant="middle" light />
//                 <CardContent>
//                   <div className={classes.accordionRoot}>
//                     <Accordion>
//                       <AccordionSummary
//                         expandIcon={<ExpandMoreIcon />}
//                         aria-controls="panel1a-content"
//                         id="panel1a-header"
//                       >
//                         <Typography className={classes.heading}>
//                           Short Description
//                         </Typography>
//                       </AccordionSummary>
//                       <AccordionDetails>
//                         <Typography>{product.shortDescription}</Typography>
//                       </AccordionDetails>
//                     </Accordion>
//                     <Accordion>
//                       <AccordionSummary
//                         expandIcon={<ExpandMoreIcon />}
//                         aria-controls="panel1a-content"
//                         id="panel1a-header"
//                       >
//                         <Typography className={classes.heading}>
//                           Description
//                         </Typography>
//                       </AccordionSummary>
//                       <AccordionDetails>
//                         <Typography>{product.description}</Typography>
//                       </AccordionDetails>
//                     </Accordion>
//                   </div>
//                 </CardContent>
//                 <CardActions>
//                   <Typography
//                     style={{ marginLeft: "auto", padding: 20 }}
//                     display="block"
//                     variant="caption"
//                     gutterBottom
//                   >
//                     {product.reviews} Reviews
//                   </Typography>
//                   <Button
//                     variant="outlined"
//                     aria-label="add to cart"
//                     color="primary"
//                     onClick={handleAdd}
//                   >
//                     Submit Review
//                   </Button>
//                 </CardActions>
//               </Card>
//             </Grid>
//           </Grid>
