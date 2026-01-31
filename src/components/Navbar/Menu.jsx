import styled from 'styled-components';

const Menu = ({ isOpen, onClick }) => {
  return (
    <StyledWrapper>
      <label className="burger" htmlFor="burger" onClick={(e) => { e.preventDefault(); onClick?.(); }}>
        <input id="burger" checked={isOpen} readOnly type="checkbox" />
        <span />
        <span />
        <span />
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: none;
  align-items: center;
  justify-content: center;

  input {
    display: none;
  }

  @media (max-width: 768px) {
    display: flex;

    .burger {
      position: relative;
      width: 40px;
      height: 30px;
      background: transparent;
      cursor: pointer;
      display: block;
    }

    .burger input {
      display: none;
    }

    .burger span {
      display: block;
      position: absolute;
      height: 5px;
      width: 100%;
      background: #982598;
      border-radius: 9px;
      opacity: 1;
      left: 0;
      transform: rotate(0deg);
      transition: .25s ease-in-out;
    }

    .burger span:nth-of-type(1) {
      top: 0px;
      transform-origin: left center;
    }

    .burger span:nth-of-type(2) {
      top: 50%;
      transform: translateY(-50%);
      transform-origin: left center;
    }

    .burger span:nth-of-type(3) {
      top: 100%;
      transform-origin: left center;
      transform: translateY(-100%);
    }

    .burger input:checked ~ span:nth-of-type(1) {
      transform: rotate(45deg);
      top: 0px;
      left: 5px;
    }

    .burger input:checked ~ span:nth-of-type(2) {
      width: 0%;
      opacity: 0;
    }

    .burger input:checked ~ span:nth-of-type(3) {
      transform: rotate(-45deg);
      top: 28px;
      left: 5px;
    }
  }
`;

export default Menu;
