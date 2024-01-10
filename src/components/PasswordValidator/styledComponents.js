// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #24263c;
  min-height: 100vh;
`

export const PasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #475569;
  border-radius: 8px;
  width: 60vw;
  padding-top: 30px;
`

export const Heading = styled.h1`
  font-size: 40px;
  font-family: 'Roboto';
  font-weight: bold;
  color: #ffffff;
  margin: auto;
  @media screen and (min-width: 768px) {
    font-size: 58px;
  }
`

export const Text = styled.p`
  color: #f8fafc;
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 1.2;
  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 1.5;
  }
`

export const ErrorMsg = styled.p`
  color: #ef4444;
  font-family: 'Roboto';
  font-size: 12px;
  margin-top: 2px;
  margin-bottom: 90px;
  line-height: 1.2;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    margin-bottom: 68px;
    line-height: 1.5;
  }
`
export const InputElememt = styled.input`
  color: #24263c;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 16px;
  width: 400px;
  background-color: #edeeff;
  border: none;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 12px;
  cursor: pointer;
  outline: none;
  line-height: 1.5;
  @media screen and (min-width: 768px) {
    margin-top: 18px;
    margin-bottom: 18px;
  }
`
