import Link from 'next/link';
import { useQuery } from '@apollo/client';
import { GET_SUBFORUMS } from '../../../../queries/subforumQueries';
import SubforumCard from '../../../subforums/card/SubforumCard';
import { MenuItem, LoadingText } from './Styles';

const MenuList = () => {
  const { loading, error, data } = useQuery(GET_SUBFORUMS);

  if (loading) return <LoadingText>Loading...</LoadingText>;
  if (error) return <p>Oops, Something went wrong</p>;

  return (
    <>
      {!loading && !error && (
        <ul>
          {data.subforums.map((subforum) => (
            <Link href={`/subforums/${subforum.name}`}>
              <MenuItem key={subforum.id}>b/ {subforum.name}</MenuItem>
            </Link>
          ))}
        </ul>
      )}
    </>
  );
};

export default MenuList;
