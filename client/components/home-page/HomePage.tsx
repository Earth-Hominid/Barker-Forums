import { useState, useEffect } from 'react';
import CreateSubforumModal from '../modals/CreateSubforumModal';
import PostContainer from '../postcontainer/PostContainer';

function HomePage() {
  const [initialPage, setInitialPage] = useState(true);
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
    setInitialPage(false);
  };

  const closeModal = () => {
    setModal(false);
    setInitialPage(true);
  };

  return (
    <>
      <div className="my-7 mx-auto max-w-5xl">
        {initialPage && <PostContainer openModal={openModal} />}
        {modal && <CreateSubforumModal closeModal={closeModal} />}
      </div>
    </>
  );
}

export default HomePage;
