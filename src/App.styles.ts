import styled from "styled-components";

export const Container = styled.div`
  background-color: #00dbde;
  background-image: linear-gradient(80deg, #00dbfe 0%, #fc00ff 80%);
  color: #fff;
  min-height: 100vh;
`;

export const Area = styled.div`
  margin: auto;
  max-width: 1200px;
  padding: 30px 0;
`;

export const Header = styled.h1`
  margin: 0;
  padding: 0;
  text-align: center;
  margin-bottom: 20px;
  margin-top: -20px;
  font-size: 50px;
  font-weight: bolder;
  color: black;
`;

export const ScreenWarnig = styled.div`
  text-align: center;
`;

export const PhotoList = styled.div`
    display:grid;
    grid-template-columns:repeat(4,1fr);
    gap:20px;
}`;

export const UploadForm = styled.form`
  background-color: #000;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 4px;
`;
