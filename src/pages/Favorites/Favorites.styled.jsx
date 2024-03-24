import styled from '@emotion/styled';
import Not from "../../images/backgrounds/not.jpeg"

export const Background = styled.section`
    max-width: 100%;
    height: 600px;
    padding: 60px 20px;

    margin-left: auto;
    margin-right: auto;
    text-align: left;

    background-color: var(--borders-color);
    background-image: var(--grad), url(${Not});
    font-size: 30px;
    text-align: right;
    color: var(--input)
    `;