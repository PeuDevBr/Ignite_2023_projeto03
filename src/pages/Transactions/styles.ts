import styled from 'styled-components'

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  /* Se a tela for menor que 1120px o conteúdo ocupa 100% do expaço, se não for ocupa no máximo 1120px*/
  margin: 4rem auto 0; // centraliza o conteúdo ao meio, 4rem de espaçamento superior e 0 inferior
  padding: 0 1.5rem; // deixa um espaço entre o conteúdo e as laterais
`

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate; // habilita utilizar o border-spacing
  border-spacing: 0 0.5rem; // 0 de espaçamento nas laterias e 0.5rem entre cada linha da tabela
  margin-top: 1.5rem; // espaçamento entre o search e a tabela

  td {
    padding: 1.25rem 2rem;
    background: ${(props) => props.theme['gray-700']};

    &:first-child {
      // primeiro td da linha
      border-top-left-radius: 6px; //borda no lado esquerdo superior
      border-bottom-left-radius: 6px; //borda no lado esquerdo inferior
    }

    &:last-child {
      // último td da linha
      border-top-right-radius: 6px; // borda no lado direito superior
      border-bottom-right-radius: 6px; // borda no lado direito inferior
    }
  }
`

interface PriceHighlightProps {
  variant: 'income' | 'outcome'
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${(props) =>
    props.variant === 'income'
      ? props.theme['green-300']
      : props.theme['red-300']};
`
