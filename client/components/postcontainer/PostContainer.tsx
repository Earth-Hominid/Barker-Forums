import { useState } from 'react';
import { useSession } from 'next-auth/react';
import Avatar from '../avatars/Avatar';
import { PhotographIcon, LinkIcon } from '@heroicons/react/outline';
import { useForm } from 'react-hook-form';
import {
  TopSection,
  PostHolder,
  PostInput,
  IconHolder,
  SecondaryInput,
  ContentHolder,
} from './Styles';

type FormData = {
  postTitle: string;
  postContent: string;
  postImage: string;
  subforum: string;
};

const PostContainer = () => {
  const [imageInputOpen, setImageInputOpen] = useState<boolean>(false);

  const { data: session } = useSession();

  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  return (
    <TopSection>
      <form>
        <PostHolder>
          <Avatar />

          <PostInput
            {...register('postTitle', { required: true })}
            disabled={!session}
            type="text"
            placeholder={
              session
                ? 'Go ahead and bark, we double dog dare you!'
                : 'Want to bark? Sign in to bark!'
            }
          />

          <IconHolder
            className={`${
              imageInputOpen && 'text-blue-600 bg-blue-100 rounded-full'
            }`}
          >
            <PhotographIcon
              onClick={() => setImageInputOpen(!imageInputOpen)}
            />
          </IconHolder>
          <IconHolder>
            <LinkIcon />
          </IconHolder>
        </PostHolder>
        {!!watch('postTitle') && (
          <ContentHolder>
            <div className="flex items-center px-2">
              <p className="min-w-[90px]"> content:</p>
              <SecondaryInput
                {...register('postContent', { required: true })}
                type="text"
                placeholder="Bark, bark, woof, woof"
              />
            </div>
            <div className="flex items-center px-2">
              <p className="min-w-[90px]">sub-barker:</p>

              <SecondaryInput
                {...register('subforum')}
                type="text"
                placeholder="i.e. Dog Nutrition"
              />
            </div>
            {imageInputOpen && (
              <div className="flex items-center px-2">
                <p className="min-w-[90px]"> image url:</p>
                <SecondaryInput
                  {...register('postImage')}
                  type="text"
                  placeholder="Optional..."
                />
              </div>
            )}
          </ContentHolder>
        )}
      </form>
    </TopSection>
  );
};

export default PostContainer;
