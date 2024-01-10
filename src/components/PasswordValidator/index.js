// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  PasswordContainer,
  Heading,
  Text,
  ErrorMsg,
  InputElememt,
} from './styledComponents'

const PasswordValidator = () => {
  const [isValid, setIsValid] = useState(false)
  const [pass, setPass] = useState('')
  const errorTxt = isValid ? '' : 'Your password must be at least 8 characters'
  const onPasswordChange = event => {
    setPass(event.target.value)
    if (pass.length >= 7) {
      setIsValid(true)
      console.log(pass, errorTxt)
    }
  }

  return (
    <MainContainer>
      <PasswordContainer>
        <Heading>Password Validator</Heading>
        <Text>Check how strong and secure is your password</Text>
        <InputElememt
          type="password"
          value={pass}
          onChange={onPasswordChange}
        />
        <ErrorMsg>{errorTxt}</ErrorMsg>
      </PasswordContainer>
    </MainContainer>
  )
}

export default PasswordValidator
