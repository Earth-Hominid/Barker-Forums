import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import {
  TopSection,
  ModalContainer,
  ContentHolder,
  SubforumInput,
} from './Styles';

type FormData = {
  subforumName: string;
};

const AddSubforum = () => {
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
        <ModalContainer>
          <SubforumInput
            {...register('subforumName', { required: true })}
            disabled={!session}
            type="text"
            placeholder={
              session
                ? 'Howl at the moon!'
                : 'Want to howl? You need to sign in first!'
            }
          />
          <ContentHolder></ContentHolder>
        </ModalContainer>
      </form>
    </TopSection>
  );
};

export default AddSubforum;
