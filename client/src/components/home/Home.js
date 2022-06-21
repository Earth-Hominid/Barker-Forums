import Trending from './trending/Trending';
import Popular from './popular/Popular';

const Home = () => {
  return (
    <>
      <div className="bg-stone-200 h-screen">
        <Trending />
        <Popular />
      </div>
    </>
  );
};

export default Home;
