import { useSelector } from 'react-redux';
import { FaRegCopyright } from 'react-icons/fa';

import {
  HomeMain,
  HomeTitle,
  Container,
  ContainerUnlogged,
  HomeTitleUnlogged,
  Footer,
  Copyright,
  CopyrightText,
} from './Homepage.styled';
import { getLogStatus, getUserName } from 'redux/authSelectors';

const Homepage = () => {
  const isLoggedIn = useSelector(getLogStatus);
  const name = useSelector(getUserName);
  return (
    <HomeMain>
      {isLoggedIn ? (
        <Container>
              <HomeTitle>
            Hey, <span>{name}</span>, let's check your PHONEBOOK !{' '}
            <br />
            Here we go!
          </HomeTitle>
        </Container>
      ) : (
        <ContainerUnlogged>
          <HomeTitleUnlogged>
            Welcome to PHONEBOOK ! <br />
            Keep your contacts well organized!
          </HomeTitleUnlogged>
        </ContainerUnlogged>
      )}
      <Footer>
        <Copyright>
          <CopyrightText>
            Copyright
            <FaRegCopyright size={16} />
            2023 <br /> All rights reserved
          </CopyrightText>
        </Copyright>
      </Footer>
    </HomeMain>
  );
};

export default Homepage;
