import styled from 'react-emotion';

export const Background = styled('div')`
    background: linear-gradient(165deg, #352cab 10%, #dc6acf);
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export const Container = styled('div')`
    background: white;
    width: 360px;
    margin: auto;
    border-radius: 10px;
`;

export const InnerContainer = styled('div')`
    display: flex;
    flex-direction: column;
    padding: 20px 40px;
`;

export const Form = InnerContainer.withComponent('form');

export const Header = styled('h2')`
    color: #2a347b;
    font-size: 24px;
    letter-spacing: -0.3px;
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
`;

export const Label = styled('label')`
    color: #2a347b;
    font-weight: bold;
    font-size: 0.8em;
    margin-bottom: 20px;
    letter-spacing: 1px;
    display: block;
    text-transform: uppercase;
`;

export const RadioLabel = styled('label')`
    text-transform: capitalize;
`;

export const RadioGroup = styled('div')`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    input {
        ${props =>
            props.checkboxStyling
                ? `
                -webkit-appearance: checkbox;
                -moz-appearance: checkbox;
                -ms-appearance: checkbox;`
                : ''} margin-right: 15px;
    }
`;

export const FlexRow = styled('div')`
    display: flex;

    > div {
        flex: 1;
    }
`;

export const TextInput = styled('input')`
    border: none;
    background: #eee;
    margin-bottom: 20px;
    font-size: 13px;
    padding: 10px;
    border-radius: 3px;
    border: 1px solid transparent;

    ${props =>
        props.hasError
            ? `
    border: 1px solid red;
    color: red;
    `
            : ''};
`;

export const Button = styled('button')`
    background-color: #0a78e4;
    border: none;
    font-size: 16px;
    color: white;
    padding: 10px;
    border-radius: 3px;
`;

export const InlineButton = styled('button')`
    background: none;
    border: none;
    color: #999;
    padding: 10px;

    &:after {
        margin-left: 10px;
        content: '❯';
    }
`;

export const Attribute = styled('bold')`
    text-transform: capitalize;
`;
