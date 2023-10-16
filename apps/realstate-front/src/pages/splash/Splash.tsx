import styled from "styled-components"

const SplashScreenWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #246bfd;
`;

const SplashImage = styled.img`
  max-width: 735px;  
  height: 100vh;
`;

const Splash = () => {
  
  return (
    <SplashScreenWrapper>
      <SplashImage src="../src/assets/splash.png" alt="Splash Screen"/>
    </SplashScreenWrapper>
  );
}

export default Splash