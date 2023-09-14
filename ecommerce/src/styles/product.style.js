import { css } from '@emotion/css';

export const productStyle = css`
    width: 250px;
    min-height: 300px;
    font-size: 24px;
    border-radius: 4px;
    border: 1px solid #ccc;
    display: inline-block;
    vertical-align: top;
    margin: 15px;
    padding: 5px;
    &:hover {
        font-weight: bold;
    }
    img {
        max-width: 100%;
        max-height: 100px;
    }
    p {
        font-size: 20px;
    }
    button {
        background-color: hotpink;
        color: white;
        border: 1px solid pink;
        border-radius: 5px;
        padding: 10px 15px;
        &:hover {
            background-color: pink;
        }
    }
`;

export const productDetailStyle = css`
width: 100%;
min-height: 300px;
font-size: 24px;
border-radius: 4px;
border: 1px solid #ccc;
display: inline-block;
vertical-align: top;
margin: 15px;
padding: 5px;
&:hover {
    font-weight: bold;
}
img {
    max-width: 100%;
    max-height: 100px;
}
p {
    font-size: 20px;
}
`;
