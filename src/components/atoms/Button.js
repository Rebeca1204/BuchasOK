import PropTypes from "prop-types";
import styled from "styled-components";

export const ButtonColors = {
  default: "default",
  primary: "primary",
  danger: "danger",
};
export const ButtonVariants = {
  default: "default",
  outlined: "outlined",
  link: "link",
};

const getColor = ({ theme, color }) => {
  switch (color) {
    case ButtonColors.primary:
      return theme.colors.primary.main;
    case ButtonColors.danger:
      return theme.colors.danger.main;
    default:
      return "#e0e0e0";
  }
};
const getDarkColor = ({ theme, color }) => {
  switch (color) {
    case ButtonColors.primary:
      return theme.colors.primary.dark;
    case ButtonColors.danger:
      return theme.colors.danger.dark;
    default:
      return "#5a6268";
  }
};
const getOutlinedTextColor = (props) => {
  if (props.color === ButtonColors.default) {
    return "#212121";
  }
  return getColor(props);
};
const getLinkTextColor = (props) => {
  if (props.color === ButtonColors.default) {
    return "#757575";
  }
  return getColor(props);
};
const getTextColor = ({ theme, color }) => {
  switch (color) {
    case ButtonColors.primary:
      return theme.colors.primary.text;
    case ButtonColors.danger:
      return theme.colors.danger.text;
    default:
      return theme.colors.primary.text;
  }
};
const Button = styled.button`
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  padding: 12px 36px;
  cursor: pointer;
  background-color: ${getColor};
  border: 2px solid ${getColor};
  color: ${getTextColor};
  border-radius: 5px;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:hover:enabled {
    background-color: ${getDarkColor};
    border: ${getDarkColor};
  }
`;

const ButtonOutlined = styled(Button)`
  background-color: transparent;
  color: ${getOutlinedTextColor};

  &:hover:enabled {
    background-color: transparent;
    color: ${getDarkColor};
    border: 2px solid ${getDarkColor};
  }
`;

const ButtonLink = styled(Button)`
  background-color: transparent;
  border-color: transparent;
  color: ${getLinkTextColor};
  padding-left: 0;
  padding-right: 0;
  &:hover:enabled {
    background-color: transparent;
    border-color: transparent;
    color: ${getDarkColor};
  }
`;

const ButtonWrapper = (props) => {
  switch (props.variant) {
    case ButtonVariants.outlined:
      return <ButtonOutlined {...props} />;
    case ButtonVariants.link:
      return <ButtonLink {...props} />;
    default:
      return <Button {...props} />;
  }
};

ButtonWrapper.defaultProps = {
  type: "button",
  children: undefined,
  color: "default",
  variant: "default",
};

ButtonWrapper.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.oneOf(Object.values(ButtonColors)),
  variant: PropTypes.oneOf(Object.values(ButtonVariants)),
};
export default ButtonWrapper;
