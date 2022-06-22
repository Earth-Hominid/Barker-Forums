import {
  SectionHolder,
  MainContainer,
  HeaderContainer,
  SecondaryContainer,
  HeaderText,
} from './Styles';

const SubforumFeed = ({ data }) => {
  return (
    <SectionHolder>
      <MainContainer>
        <SecondaryContainer>
          <HeaderContainer>
            <HeaderText>Popular Subforums</HeaderText>
          </HeaderContainer>
        </SecondaryContainer>
      </MainContainer>
    </SectionHolder>
  );
};

export default SubforumFeed;
