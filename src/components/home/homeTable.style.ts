import styled from "styled-components";
import Image from "next/image";
export const TableWrapperStyle = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 0 auto;
`;
export const TabStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
  justify-content: center;
`;
export const TabLinkStyle = styled.button`
  border: none;
  outline: none;
  font-size: 12px;
  line-height: 18px;
  cursor: pointer;
  font-weight: 400;
  color: #0B2F59;
  text-decoration: none;
  background-color:transparent;
  padding: 0;

  &:focus{
font-weight:600;
    color: #0079D2;
    border-bottom: 2px solid #0079D2;
  }

`;

export const ImageContainerStyle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-items: center;
  gap: 10px;
  margin: 0 auto;
  padding: 0;
  min-width: 193px;
  width: 194px;

  & .check {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  &:nth-child(2) {
    width: 225px;
    min-width: 225px;
  }
`;
export const ImageStyle = styled(Image)`
  ${(props) => props.width && "width: " + props.width + "px"};
  ${(props) => props.height && "height: " + props.height + "px"};
  border-radius: 5px;
`;

export const TableStyle = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  background-color: #fff;
  & thead {
    border-bottom: 1px solid #e5e5e5;

    & th {
      padding: 0;
      margin: 0;
      font-size: 12px;

      &:first-child {
        padding: 9px;
        font-size: 12px;
        line-height: 18px;
        font-weight: 800;
        color: #0b2f59;
        text-align: left;
        background-color: #f0f4f8;
        width: 193px !important;
        min-width: 193px !important;
        /* border-right: 1px solid #e5e5e5 */
      }
      &:last-child {
        border-right: none;
      }
    }
  }
  & tr {
    border-bottom: 1px solid #e5e5e5;
    &:last-child {
      border-bottom: none;
    }

    & td {
      padding: 10px;
      font-size: 12px;
      line-height: 18px;
      font-weight: 400;
      color: #0b2f59;
      text-align: left;
      width: 225px;
      min-width: 225px;
      border: 1px solid #e5e5e5;
      &:first-child {
        font-weight: 700;
        width: 192px;
        min-width: 192px;
      }
      &:last-child {
        border-right: none;
      }
    }
  }
  & tr:nth-child(odd) {
    background-color: #f8f9fb;
  }

  &:first-of-type {
    position: sticky;
    top: 0;
  }
  & tbody {
    & th {
      padding: 10px;
      font-size: 12px;
      min-width: 192px !important;
      width: 192px !important;
    }
  }
`;

export const TableContainerStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ThImageStyle = styled.th`
  border-left: 1px solid #e5e5e5;
  background-color: #f0f4f8;
  width: 245px;
  min-width: 245px;

  &:first-child {
    width: 193px !important;
    min-width: 193px !important;
  }
`;
export const FileInputStyle = styled.input.attrs({
  type: "file",
  accept: "image/*",
})`
  display: none;
  ${(props) => props.disabled && ` cursor: not-allowed;`}
`;

export const FileLabelStyle = styled.label`
  cursor: not-allowed !important;
  height: 150px;
  width: 198.75px;
  border: 4px dotted #e5e5e5;
  display: flex;
`;
export const GreaterStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
