const RestaurantDetails = ({ restaurant }) => {
  return (
    <>
      <div className="details">
        <img src={restaurant.image_url} />
        <h1>{restaurant.name}</h1>
        <h1>{restaurant.location.city}</h1>
        <p>{restaurant.categories[0].title}</p>
        <h1>
          {restaurant.location.address1}, {restaurant.location.zip_code}
        </h1>
      </div>
    </>
  );
};

export default RestaurantDetails;
