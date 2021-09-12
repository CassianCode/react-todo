import styled from '@emotion/styled';
import styling from './styling/styling';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    padding: ${styling.gaps.gap};
    background-color: ${styling.colors.neutral};
`