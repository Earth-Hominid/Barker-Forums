import Trending from './trending/Trending';
import Popular from './popular/Popular';
import PopularSubforums from './popular-subforums/PopularSubforums';

const Home = () => {
  return (
    <>
      <div className="bg-stone-200 h-screen">
        <Trending />
        <Popular />
        <PopularSubforums />
      </div>
    </>
  );
};

export default Home;
