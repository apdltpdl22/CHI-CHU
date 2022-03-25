import * as React from 'react';
import Stack from '@mui/material/Stack';
import ButtonUnstyled, {
  buttonUnstyledClasses,
  ButtonUnstyledProps,
} from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';
import { useRecoilValue } from 'recoil';
import { UserGender } from '../../../recoil/UserGender';
import { UserAge } from '../../../recoil/UserAge';
import { CustomButtonRoot } from './styles';

function CustomButton(props: ButtonUnstyledProps) {
  return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
}

function Button() {
  const userAge = useRecoilValue(UserAge);
  const userGender = useRecoilValue(UserGender);
  console.log(userAge, userGender);
  return (
    <Stack spacing={2} direction="row">
      {/* <CustomButton>Button</CustomButton> */}
      <CustomButton disabled={userAge && userGender != null ? false : true}>
        보험 찾아보기
      </CustomButton>
    </Stack>
  );
}
export default Button;