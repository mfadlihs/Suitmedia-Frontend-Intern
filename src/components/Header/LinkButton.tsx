import { Dispatch, ReactElement, ReactNode, SetStateAction } from "react";
import { PageState } from ".";
import styled from "@emotion/styled";
import { LinkButtonContainer } from "./styles";

export interface LinkButtonProps {
  children?: ReactNode;
  type: PageState;
  state: PageState;
  onUpdate: (state: PageState) => void;
}

export default function LinkButton({
  children,
  type,
  state,
  onUpdate,
}: LinkButtonProps) {
  return (
    <LinkButtonContainer
      type={type}
      state={state}
      onClick={() => {
        onUpdate(type);
      }}
      className="text-center text-xl font-medium text-white md:text-base md:font-normal md:text"
    >
      {children}
    </LinkButtonContainer>
  );
}
