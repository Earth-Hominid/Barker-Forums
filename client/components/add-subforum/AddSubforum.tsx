import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useMutation, useQuery } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { ADD_SUBFORUM } from '../../mutations/SubforumMutations';

import {
  TopSection,
  ModalContainer,
  ContentHolder,
  SubforumInput,
  SecondaryInput,
  PageTitle,
  ButtonHolder,
  PrimaryButton,
} from './Styles';

type FormData = {
  subforumName: string;
  subforumDescription: string;
};

const AddSubforum = () => {
  const { data: session } = useSession();
  const [AddSubforum] = useMutation(ADD_SUBFORUM);

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
      <PageTitle>
        Create a Howl! <i className="text-base">(sub-forum)</i>
      </PageTitle>
      <form onSubmit={onSubmit}>
        <ModalContainer>
          <SubforumInput
            {...register('subforumName', { required: true })}
            disabled={!session}
            type="text"
            placeholder={
              session ? 'Title' : 'Want to howl? You need to sign in first!'
            }
          />
        </ModalContainer>
        {!!watch('subforumName') && (
          <ContentHolder>
            <div className="flex items-center px-2">
              <SecondaryInput
                {...register('subforumDescription', { required: true })}
                type="text"
                placeholder="Description (optional)"
              />
            </div>
            {Object.keys(errors).length > 0 && (
              <div>
                {errors.subforumName?.type === 'required' && (
                  <p>Your howl needs a name.</p>
                )}
              </div>
            )}

            {!!watch('subforumName') && (
              <ButtonHolder>
                <PrimaryButton type="submit" className="">
                  howl at the moon!
                </PrimaryButton>
              </ButtonHolder>
            )}
          </ContentHolder>
        )}
      </form>
    </TopSection>
  );
};

export default AddSubforum;
