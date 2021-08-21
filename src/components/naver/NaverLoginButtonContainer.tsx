import React, { useCallback } from 'react';

import NaverLoginButton from './NaverLoginButton';

type Props = {
  /** client id를 지정할 떄 사용합니다(필수) */
  clientId: string;
  /** redirect uri를 지정할 떄 사용합니다(필수) */
  redirectUri: string;
  /** state를 지정할 떄 사용합니다(필수) */
  state: string;
  /** popup창으로 열 때 지정합니다 */
  isPopupOpen?: boolean;
  /** popup창의 windowFeatures를 지정합니다  */
  popupWindowFeature?: string;
  /** children을 지정합니다, 지정하지 않으면 기본 버튼 스타일이 렌더링 됩니다  */
  children?: React.ReactNode;
  /** class name을 지정합니다 */
  className?: string;
};

/** 네이버 아이디로 로그인 버튼 */
export const NaverLoginButtonContainer = ({
  clientId,
  redirectUri,
  state,
  isPopupOpen = false,
  popupWindowFeature = 'width=500, height=700, status',
  children,
  className,
}: Props) => {
  const handleClick = useCallback(() => {
    const requestUrl = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}`;
    if (isPopupOpen) {
      window.open(requestUrl, '_blank', popupWindowFeature);
    } else {
      window.location.href = requestUrl;
    }
  }, []);

  return (
    <NaverLoginButton className={className} handleClick={handleClick}>
      {children}
    </NaverLoginButton>
  );
};

export default NaverLoginButtonContainer;
