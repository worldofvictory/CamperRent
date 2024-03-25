import { useNavigate } from "react-router-dom";
//import { Helmet, HelmetProvider } from "react-helmet";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import {  Button, Container, Description, ReasonSection, ReasonsItem, ReasonsList, ReasonsTitle, SectionHero, Title } from "./Home.styled";

const Home = () => {
    const navigate = useNavigate();

    const handleStart = () => {
        navigate('/catalog')
    }

    return (
        <main>
            <HelmetProvider>
            <Helmet>
                
                    <title>Home</title>
                       </Helmet>
                    </HelmetProvider>
         
            <SectionHero>
                <Title>Where does your freedom start?</Title>
                <Description>Travel across Ukraine in a mobile home. You can stop at any moment and in any place. Feel the freedom of choice in your life. Your comfort and safety are our priority. Just choose camper in catalog and enjoy your travel.  </Description>
                <Button onClick={handleStart}>Lets Go</Button>
            </SectionHero>

            <ReasonSection>
                <Container>
                    <ReasonsTitle>Why choose us?</ReasonsTitle>
                    <ReasonsList>
                        <ReasonsItem>
                          Wide Selection of Campers: Our rental service offers a diverse range of campers to suit various preferences and needs, ensuring there's something for everyone, from compact vans to spacious motorhomes.
                        </ReasonsItem>
                        <ReasonsItem>
                          Affordable Pricing Options: We provide competitive and flexible pricing options, allowing customers to find a rental solution that fits their budget without compromising on quality or comfort.
                        </ReasonsItem>
                        <ReasonsItem>
                           Exceptional Customer Service: Our dedicated team is committed to delivering exceptional customer service, from the moment you inquire about renting a camper to the completion of your trip. 
                        </ReasonsItem>
                        <ReasonsItem>
                             Convenient Booking Process: With our user-friendly online platform, booking a camper rental is quick, easy, and convenient. 
                        </ReasonsItem>
                    </ReasonsList>
                </Container>
                </ReasonSection>
        </main>
    )
};

export default Home;