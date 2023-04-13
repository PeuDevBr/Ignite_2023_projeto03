import { HeaderContent, HeaderContianer, NewTransactionButton } from './styles'

import logoImg from '../../assets/Logo.svg'

export function Header() {
  return (
    <HeaderContianer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <NewTransactionButton>Nova transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContianer>
  )
}
