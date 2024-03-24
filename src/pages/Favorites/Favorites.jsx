import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/Adverts/selectors";
import AdvertCard from "../../components/AdvertCard/AdvertCard";
import { AdvertsList, CardItem } from "../../components/AdvertCard/AdvertCard.styled";
import { Background } from "./Favorites.styled";

const Favorites = () => {
  const favorites = useSelector(selectFavorites);
  return (
    <>
        {favorites.length > 0 ? (
          <AdvertsList>
            {favorites.map((fav) => (
              <CardItem key={fav._id}>
                <AdvertCard card={fav} />
              </CardItem>
            ))}
          </AdvertsList>
        ) : (
                  <div>
         <Background>You haven't added anything to favorites.</Background>
                  </div>
        )}
    
    </>
  );
};

export default Favorites;