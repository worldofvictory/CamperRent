import { useEffect, useState, useRef } from "react";
import { Title, CLoseBtn, ModalBackdrop, Window, ModalContainer, PicsList, Description } from "./Modal.styled";
import  Tabs  from "../../components/Tab/TabList";
import { createPortal } from "react-dom";
import { CloseIcon } from "../icons";
const Modal = ({ card, isModalShown, closeModal, clickToReviews,   activeTab,
  setActiveTab, }) => {
    const [modalShown, setModalShown] = useState(isModalShown);
    const tabsRef = useRef();
    useEffect(() => {
        setModalShown(isModalShown);



    }, [isModalShown]);
    
    useEffect(() => {
        const handleESCClose = (e) => {
            if (e.code === "Escape") closeModal();
        };

        window.addEventListener("keydown", handleESCClose);

        return () => window.removeEventListener("keydown", handleESCClose);
    }, [closeModal]);

    useEffect(() => {
    clickToReviews &&
      tabsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        duration: 1000,
      });
  }, [clickToReviews]);
    const handleBackdropClose = ({ target, currentTarget }) => {
        if (target === currentTarget) {
            closeModal();
            document.body.style.overflow = "visible";
        }
    };

    if (!modalShown) return null;

    return createPortal(
        <ModalBackdrop $isShown={isModalShown} onClick={handleBackdropClose}>
            <ModalContainer name="modal" onClick={handleBackdropClose}>
                <Window $isShown={isModalShown}>
                     <CLoseBtn
          type="button"
          aria-label="Close modal"
          onClick={() => {
            closeModal();
            document.body.style.overflow = "";
          }}
        >
          <CloseIcon width={20} height={20} />
        </CLoseBtn>
                    <Title>{card.name}</Title>
                    <div>
                        <p>Rating: {card.rating}</p>
                        <p>Location: {card.location}</p>
                    </div>
                    <p>Price: €{card.price}</p>
                    
                         <PicsList>
              {card.gallery.length > 0 &&
                card.gallery.map((link, i) => (
                  <li key={`${card._id}/${i}`}>
                    <img src={link} alt={card.name} />
                  </li>
                ))}
            </PicsList>
                    
                    <Description>{card.description}</Description>
                    <div ref={tabsRef}>
              <Tabs
                card={card}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            </div>
                </Window>
            </ModalContainer>
        </ModalBackdrop>,
        document.getElementById("modal-root")
    );
};
 
export default Modal;