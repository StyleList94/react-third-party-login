# React Third Party Login

React Thrid Party Login Button Component

## Feature

- Google Sign-In for Websites
- Naver Login
- Kakao Login

## Get Started

At least 16.8 version of `react` must be installed!

```bash
yarn add react-third-party-login

# or npm
npm install react-third-party-login
```

## Usage

### Sign in with Google Button

[Reference Guide](https://developers.google.com/identity/sign-in/web/reference)

```jsx
import { GoogleLoginButton } from 'react-third-party-login';

<GoogleLoginButton
  clientId="your_OAuth_client_id(* Require)"
  cookiepolicy="single_host_origin"
  scope="profile email"
  onSuccessCallback={(googleUser) => {
    const profile = googleUser.getBasicProfile();
    console.log(`Token: ${googleUser.getAuthResponse().id_token}`);
    console.log(`ID: ${profile.getId()}`);
    console.log(`Name: ${profile.getName()}`);
    console.log(`Image URL: ${profile.getImageUrl()}`);
    console.log(`Email: ${profile.getEmail()}`);
  }}
  className="react-third-party-login-button__google"
>
  {/* children(or default styled button) */}
</GoogleLoginButton>;
```

### Naver Login Button

[Reference Guide](https://developers.naver.com/docs/login/api/api.md#%EB%84%A4%EC%9D%B4%EB%B2%84-%EC%95%84%EC%9D%B4%EB%94%94%EB%A1%9C-%EB%A1%9C%EA%B7%B8%EC%9D%B8-api-%EB%AA%85%EC%84%B8)

```jsx
import { NaverLoginButton } from 'react-third-party-login';

<NaverLoginButton
  clientId="your_application_client_id(* Require)"
  redirectUri="redirect_url(* Require)"
  state="state(* Require)"
  isPopupOpen={false}
  popupWindowFeature="width=500, height=700, status"
  className="react-third-party-login-button__naver"
>
  {/* children(or default styled button) */}
</NaverLoginButton>;
```

### Kakao Login Button

[Reference Guide](https://developers.kakao.com/docs/latest/ko/kakaologin/rest-api)

```jsx
import { KakaoLoginButton } from 'react-third-party-login';

<KakaoLoginButton
  clientId="your_application_client_id(* Require)"
  redirectUri="redirect_url(* Require)"
  state="state"
  isPopupOpen={false}
  popupWindowFeature="width=500, height=700, status"
  className="react-third-party-login-button__kakao"
>
  {/* children(or default styled button) */}
</KakaoLoginButton>;
```
