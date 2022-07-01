import Image from 'next/image';
import Users from '../../users/Users';

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
  ImageContainer,
} from './Styles';

const BarkerDog = require('../../../public/icons/spinner.png');

const SubforumCard = ({ subforum }) => {
  return (
    <CardSection>
      <SectionHeader>All Howls</SectionHeader>
      <CardContainer>
        <Card>
          <div>
            <SmallTitle>
              {`b/${subforum.name} creator: ${subforum.userId.username}`}
            </SmallTitle>
            <LargeTitle>{subforum.name}</LargeTitle>
            <ContentParagraph>{subforum.description}</ContentParagraph>
            <FooterContainer>
              <ImageContainer>
                <Image
                  alt="barker dog"
                  src={BarkerDog}
                  objectFit="contain"
                  priority={true}
                />
              </ImageContainer>
              <FooterText>{Users.length} members</FooterText>
            </FooterContainer>
          </div>
        </Card>
      </CardContainer>
    </CardSection>
  );
};

export default SubforumCard;
