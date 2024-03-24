import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getAllAdverts, getTotal } from "../../redux/Adverts/operations";
import { selectAdverts, selectIsLoading, selectTotal, selectError } from "../../redux/Adverts/selectors";
import Loader from "../../components/Loader/Loader";
import AdvertCard from "../../components/AdvertCard/AdvertCard";
import { AdvertsList, CardItem, LoadMoreBtn } from "components/AdvertCard/AdvertCard.styled";
import Filter from "components/Filter/Filter";
import {
    ListBtnWrap,
    NoItemsMsg, CatalogContainer
} from "./Catalog.styled"
import { LIMIT } from "components/helpers/limit";


const Catalog = () => {
    
    const [page, setPage] = useState(1);
    const [searchParams, setSearchParams] = useSearchParams();
    const [showLoadMore, setShowLoadMore] = useState(true);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const adverts = useSelector(selectAdverts);
    const total = useSelector(selectTotal);
    const error = useSelector(selectError);
  
  useEffect(() => {
    setShowLoadMore(true);

    if (page >= Math.ceil(total / LIMIT)) {
      setShowLoadMore(false);
    }

    dispatch(getTotal(searchParams));
    dispatch(getAllAdverts({ page, limit: LIMIT, searchParams }));
  }, [dispatch, page, total, searchParams]);

   
    const handleLoadMore = () => {
        if (page >= Math.ceil(total / LIMIT) || adverts.length < LIMIT) {
            setShowLoadMore(false);
            return;
        }
        setShowLoadMore(true);
        setPage((prev) => prev + 1);
    }

  return isLoading ? (
    <Loader />
  ) : (
       <CatalogContainer>    
     <Filter setPage={setPage}
            searchParams={searchParams}
                  setSearchParams={setSearchParams} />
              <ListBtnWrap id="advertBlock">
            {adverts.length < 0 || error === "Not found" ? (
              <NoItemsMsg>No items</NoItemsMsg>
            ) : (
      <AdvertsList>
        {adverts.map((card) => (
                  <CardItem key={card._id}>
                    <AdvertCard card={card} />
                  </CardItem>
                ))}
              </AdvertsList>
)}
                  {showLoadMore && !error && adverts.length > 0 && (
                      <LoadMoreBtn type="button" onClick={handleLoadMore}>
                          Load more
                      </LoadMoreBtn>
            
                  )}
                  </ListBtnWrap>
         </CatalogContainer>   
   
  );
};

export default Catalog;