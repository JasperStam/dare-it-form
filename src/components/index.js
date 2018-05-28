import styled, { css } from 'react-emotion';

export const Background = styled('div')`
    background: linear-gradient(165deg, #352cab 10%, #dc6acf);
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export const Container = styled('div')`
    background: white;
    width: 400px;
    margin: auto;
    border-radius: 10px;
`;

export const Form = styled('form')`
    display: flex;
    flex-direction: column;
    padding: 20px 40px;
`;

export const Header = styled('h2')`
    color: #2a347b;
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
`;

export const Label = styled('label')`
    display: block;
    text-transform: uppercase;
`;
