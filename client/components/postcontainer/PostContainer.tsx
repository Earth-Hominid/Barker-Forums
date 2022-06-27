import { useSession } from 'next-auth/react';
import { TopSection, PostHolder, PostInput } from './Styles';
import Avatar from '../avatars/Avatar';

const PostContainer = () => {
  const { data: session } = useSession();

  return (
    <TopSection>
      <form>
        <PostHolder>
          <Avatar />

          <PostInput
            disabled={!session}
            type="text"
            placeholder={
              session
                ? 'Go ahead and bark, we double dog dare you!'
                : 'Want to bark? Sign in to bark!'
            }
          />
        </PostHolder>
      </form>
    </TopSection>
  );
};

export default PostContainer;
