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
  ButtonHolder,
  PrimaryButton,
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

  const onSubmit = handleSubmit(async (FormData) => {
    console.log(FormData);
  });

  return (
    <TopSection>
      <form onSubmit={onSubmit}>
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
              <label className="min-w-[90px]">sub-barker:</label>

              <SecondaryInput
                {...register('subforum')}
                type="text"
                placeholder="i.e. Dog Nutrition"
              />
            </div>
            {imageInputOpen && (
              <div className="flex items-center px-2">
                <label className="min-w-[90px]"> image url:</label>
                <SecondaryInput
                  {...register('postImage')}
                  type="text"
                  placeholder="Optional..."
                />
              </div>
            )}

            {/* Errors */}

            {Object.keys(errors).length > 0 && (
              <div>
                {errors.postTitle?.type === 'required' && (
                  <p>You bark needs a title.</p>
                )}
                {errors.postContent?.type === 'required' && (
                  <p className="text-rose-600">You bark needs some content.</p>
                )}
              </div>
            )}

            {!!watch('postTitle') && (
              <ButtonHolder>
                <PrimaryButton type="submit" className="">
                  bark!
                </PrimaryButton>
              </ButtonHolder>
            )}
          </ContentHolder>
        )}
      </form>
    </TopSection>
  );
};

export default PostContainer;
