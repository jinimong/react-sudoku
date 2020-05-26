import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`

export const Row = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row;

    &:nth-child(3n-2) {
      div {
        border-top: solid 4px ${theme.colors.black};
      }
    }
    &:last-child {
      div {
        border-bottom: solid 4px ${theme.colors.black};
      }
    }
    div {
      &:nth-child(3n-2) {
        border-left: solid 4px ${theme.colors.black};
      }
      &:last-child {
        border-right: solid 4px ${theme.colors.black};
      }
    }
  `}
`
