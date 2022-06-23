import styled from "styled-components";

const Container = styled.div`
  margin-top: 14vh;
  display: flex;
  min-height: 86vh;
  margin-left: 6vw;
  margin-right: 6vw;
`;

const ImgContainer = styled.div`
  position: sticky;
  top: 16vh;
  width: 100%;
  display: flex;
  gap: 10px;
  min-width: 300px;
`;

const SelectedImage = styled.img`
  width: 100%;
  background-color: rgb(238, 238, 238);
  transition: all 0.1s ease;

  &:hover {
    background-color: rgb(14, 14, 14, 1);
  }
`;

const ImageDeck = styled.div`
  min-width: 80px;
  max-width: 80px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  overflow: hidden;
  gap: 10px;
`;

const DeckImage = styled.img`
  width: 100%;
  height: 80px;
  object-fit: cover;
  transition: all 0.1s ease;
  background-color: ${(props) =>
    props.selectedImg === props.thisImg ? "rgb(14,14,14)" : "rgb(238,238,238)"};

  &:hover {
    background-color: rgb(14, 14, 14, 1);
  }
`;

const InfoContainer = styled.div`
  padding: 50px 50px 50px 50px;
  flex: 2;
  width: 100%;
  min-width: 260px;
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 40px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterSize = styled.option``;

const FilterMaterial = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(255, 255, 255);
  margin-right: 10px;

  background-color: ${(props) => props.color};
  cursor: pointer;
`;

const ProductCheckoutWrapper = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  flex: 1;
`;

const ProductCheckout = styled.div`
  padding: 20px;
  height: 50vh;
  position: sticky;
  top: 16vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  border: 1px solid rgb(0, 0, 0, 0.2);
  border-radius: 10px;
  background-color: white;
`;

// Styled components for quantity incrementor widget

const SetupBin = styled.div`
  display: flex;
  flex-direction: column;
`;

const ActionBin = styled.div`
  display: flex;
  flex-direction: column;
  align-self: start;
  width: 100%;
`;

const AddContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: top;
  height: 40px;
  width: 100%;
`;

const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: top;
  width: 100%;
  border-bottom: 1px solid rgb(200, 200, 200);
`;

const BulletDesc = styled.div``;

const Specs = styled.div``;

export {
  BulletDesc,
  Specs,
  OptionsWrapper,
  Container,
  ImgContainer,
  SelectedImage,
  InfoContainer,
  Title,
  Price,
  FilterSize,
  ProductCheckoutWrapper,
  FilterMaterial,
  ProductCheckout,
  ActionBin,
  SetupBin,
  AddContainer,
  ImageDeck,
  DeckImage,
};
