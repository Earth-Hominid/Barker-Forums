import {
  CardSection,
  Card,
  SectionHeader,
  CardContainer,
  SmallTitle,
  LargeTitle,
  ContentParagraph,
  FooterContainer,
  FooterText,
  FooterIcons,
} from './Styles';
import Members from '../../../assets/icons/spinner.png';

const SubforumCard = ({ subforum }) => {
  return (
    <CardSection>
      <SectionHeader>Popular Howls</SectionHeader>
      <CardContainer>
        <Card>
          <div>
            <SmallTitle>{`b/${subforum.name} ${subforum.userId.username}`}</SmallTitle>
            <LargeTitle>{subforum.name}</LargeTitle>
            <ContentParagraph>{subforum.description}</ContentParagraph>
            <FooterContainer>
              <FooterIcons alt="members" src={Members}></FooterIcons>
              <FooterText>4.2K Members</FooterText>
            </FooterContainer>
          </div>
        </Card>
      </CardContainer>
    </CardSection>
  );
};

export default SubforumCard;
