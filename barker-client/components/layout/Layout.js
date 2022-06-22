import NavigationSection from '../navigation/NavigationSection';
import MainSection from '../main-section/MainSection';
import FooterSection from '../footer/FooterSection';

export default function Layout({ children }) {
  return (
    <>
      <NavigationSection />
      <MainSection>{children}</MainSection>
      <FooterSection></FooterSection>
    </>
  );
}
