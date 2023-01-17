import styled from "styled-components";
import Link from "next/link";
export const Headerstyle = styled.div`
  height: 80px;
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;

  & .inner-container {
    margin: 0 auto;
    display: flex;
    align-items: center;
    width: 90%;
    justify-content: space-between;
    & .avatar-container {
      display: flex;
      align-items: center;
      gap: 5px;
    }

    & .nav-container {
      display: flex;
      align-items: center;
      gap: 60px;

      & div {
        display: flex;
        align-items: center;
        gap: 10px;
      }
    }
  }
`;
export const TitleStyle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #000;
`;
export const NavStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  width: 331px;
`;

export const LinkStyle = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  font-weight: 400;
  color: #000;

  :focus {
    color: #0079d2;
    font-weight: 600;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 296px;
`;
export const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #0079d2;
  display: flex;
  align-items: center;
  justify-content: center;
`;
