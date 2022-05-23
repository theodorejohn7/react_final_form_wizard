import styled, { css } from "styled-components";

const btn = (light, dark) => css`
  white-space: nowrap;
  display: inline-block;
  box-shadow: 0px 15px 50px 10px rgba(0, 0, 0, 0.75);
  text-shadow: 5px 1px 5px rgba(0, 0, 0, 0.54);

  border-radius: 5px;
  padding: 5px 15px;
  font-size: 16px;
  color: white;
  &:visited {
    color: white;
  }
  background-image: linear-gradient(${light}, ${dark});
  border: 1px solid ${dark};
  &:hover {
    background-image: linear-gradient(${light}, ${dark});
    &[disabled] {
      background-image: linear-gradient(${light}, ${dark});
    }
  }
  &:visited {
    color: black;
  }
  &[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const btnDefault = css`
  ${btn("#ffffff", "#d5d5d5")} color: #555;
`;

const btnPrimary = btn("#4f93ce", "#285f8f");
const btnDanger = btn("#e27c79", "#c9302c");

export default styled.div`
  font-family: sans-serif;

  h1 {
    display: inline-block;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    background: skyblue;
    box-shadow: 0px 0px 30px 15px rgba(0, 0, 0, 0.59);
    text-shadow: 5px 1px 5px rgba(00, 0, 0, 0.54);

    border-radius: 20px;
    padding: 10px;
    color: white;
  }

  h2 {
    text-align: center;
    color: #222;
  }

  & > div {
    text-align: center;
  }

  a {
    display: block;
    text-align: center;
    color: #222;
    margin-bottom: 10px;
  }

  p {
    max-width: 500px;
    margin: 10px auto;
    & > a {
      display: inline;
    }
  }

  form {
    max-width: 500px;
    margin: 10px auto;
    border: 1px solid #ccc;
    padding: 20px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    box-shadow: 10px 10px 151px 25px rgba(0, 0, 100, 0.59);
    border: 5px double #ff6550;
    background: #ffffff;
    position: relative;

    .loading {
      text-align: center;
      display: block;
      position: absolute;
      background: url("https://media.giphy.com/media/130AxGoOaR6t0I/giphy.gif")
        center center;
      background-size: fill;
      font-size: 2em;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 50px 0 0 0;
      z-index: 2;
    }

    & > div {
      display: flex;
      flex-flow: row nowrap;
      line-height: 2em;
      margin: 5px;
      position: relative;
      & > label {
        color: #333;
        width: 110px;
        min-width: 60px;
        box-shadow: 3px 10px 35px 12px rgba(0, 0, 0, 0.45);
        border-radius: 12px;
        padding: 12px;
        font-size: 1em;
        line-height: 32px;
      }
      & > input,
      & > select,
      & > textarea {
        flex: 1;
        padding: 10px 5px;
        font-size: 1em;
        margin-left: 15px;
        margin-top: 10px;
        border: 1px solid #ccc;

        box-shadow: 3px 10px 35px 14px rgba(0, 0, 0, 0.45);

        border-radius: 30px;
      }
      & > input[type="checkbox"] {
        margin-top: 7px;
      }
      & > div {
        margin-left: 16px;
        & > label {
          display: block;
          & > input {
            margin-right: 3px;
          }
        }
      }
      & > span {
        line-height: 32px;
        margin-left: 10px;
        color: #800;
        font-weight: bold;
      }
      & > button.remove {
        ${btnDanger};
      }
    }
    & > .buttons {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      margin-top: 15px;
    }

    .error {
      display: flex;
      font-weight: bold;
      color: #800;
      flex-flow: row nowrap;
      justify-content: center;
    }
    pre {
      position: relative;
      border: 1px solid #ccc;
      background: rgba(0, 0, 0, 0.1);
      box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.2);
      padding: 20px;
    }
  }
  button {
    margin: 0 10px;
    &[type="submit"] {
      ${btnPrimary};
    }
    &[type="button"] {
      ${btnDefault};
    }
  }
`;
