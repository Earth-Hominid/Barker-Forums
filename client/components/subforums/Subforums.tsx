import { useQuery } from '@apollo/client';
import { GET_SUBFORUMS } from '../../queries/subforumQueries';
import SubforumCard from './card/SubforumCard';
import Spinner from '../spinner/Spinner';

const Subforums = () => {
  const { loading, error, data } = useQuery(GET_SUBFORUMS);

  if (loading) return <Spinner />;

  if (error) return <p>Oops, something went wrong.</p>;

  return (
    <>
      {data.subforums.length > 0 ? (
        <div>
          {data.subforums.map((subforum) => (
            <SubforumCard key={subforum.id} subforum={subforum} />
          ))}
        </div>
      ) : (
        <p>No barkers have howled.</p>
      )}
    </>
  );
};

export default Subforums;
