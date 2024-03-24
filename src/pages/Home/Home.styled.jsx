import styled from '@emotion/styled';
import MobileImage from "../../images/backgrounds/mobile-camper.jpg";
import TabletImage from "../../images/backgrounds/tablet-camper.jpg";
import DesktopImage from "../../images/backgrounds/camper.jpg";

export const SectionHero = styled.section`
    max-width: 100%;
    height: 400px;
    padding: 60px 20px;

    margin-left: auto;
    margin-right: auto;
    text-align: left;

    background-color: var(--text-button);
    background-image: var(--grad), url(${MobileImage});//
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    @media screen and (min-width: 480px) {
        max-width: 480px;
        padding: 70px 35px;
        background-image: var(--grad), url(${TabletImage});//
    }

    @media screen and (min-width: 768px) {
        max-width: 768px;
        padding: 100px 60px;
        background-image: var(--grad),  url(${DesktopImage});
    }

    @media screen and (min-width: 1200px) {
        max-width: 1800px;
        height: 500px;
        padding: 150px 180px;
    }
`;

export const Title = styled.h1`
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 20px;
    color: var(--text-button);
    font-size: 24px;

    @media screen and (min-width: 768px) {
        font-size: 32px;
    }

    @media screen and (min-width: 1200px) {
        font-size: 42px;
    }
`;

export const Description = styled.p`
    max-width: 450px;
    margin-bottom: 25px;
    color: var( --text-button-color);
    font-size: 14px;

    @media screen and (min-width: 768px) {
        font-size: 16px;
    }
`;

export const Button = styled.button`
    width: 270px;
    height: 44px;

    border-radius: 12px;
    background-color: var(--button-color);
    color: var(--text-button);
    font-size: 14px;
    font-weight: 600;
    line-height: 1.43;
    cursor: pointer;
    transition: background-color var(--transition);

    &:hover,
    &:focus {
        background-color: var(--hover-button);}
`;

export const ReasonSection = styled.section`
    margin-top: 50px;
`;

export const Container = styled.div`
    max-width: 100%;
    padding-left: 15px;
    padding-right: 15px;
    margin-left: auto;
    margin-right: auto;
    // outline: 2px solid tomato;

    @media screen and (min-width: 480px) {
        max-width: 480px;
    } 

    @media screen and (min-width: 768px) {
        max-width: 768px;
    }    

    @media screen and (min-width: 1200px) {
        max-width: 1200px;
    }
`;

export const ReasonsTitle = styled.h2`
    margin-bottom: 30px;
    text-align: center;
    text-transform: uppercase;
    color: var(--primary-text-color);
    font-size: 16px;

    @media screen and (min-width: 768px) {
        font-size: 18px;
    }

    @media screen and (min-width: 1200px) {
        font-size: 20px;
    }
`;

export const ReasonsList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    
    // align-items: center;
    // justify-content: center;
`;

export const ReasonsItem = styled.li`
    width: 100%;
    text-align: justify ;
    margin-bottom: 40px;

    @media screen and (min-width: 768px) {
        width: calc((100% - 30px) / 2);
    }

    @media screen and (min-width: 1200px) {
        flex-basis: calc((100% - 3 * 50px) / 4);
    }

`;





