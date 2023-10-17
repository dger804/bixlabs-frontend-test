import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react";

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
  const navigate = useNavigate()

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      navigate('/welcome');
    }, 5000);

    return () => clearTimeout(redirectTimer);
  }, [navigate]);
  
  return (
    <SplashScreenWrapper>
      <SplashImage src="../src/assets/splash.png" alt="Splash Screen"/>
    </SplashScreenWrapper>
  );
}

export default Splash