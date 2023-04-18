import { ReactNode, createContext, useEffect, useState } from 'react'

interface TransactionProps {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

interface TransactionContextType {
  transactions: TransactionProps[]
  // retorna uma lista de transações do tipo TransactionProps
  fetchTransactions: (search?: string) => Promise<void>
  // Promisse: função assíncrona - <void>: sem retorno
}

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionProps[]>([])

  async function fetchTransactions(search?: string) {
    const url = new URL('http://localhost:3333/transactions')

    if (search) {
      url.searchParams.append('q', search)
    }

    const response = await fetch(url)
    const data = await response.json()

    console.log(data)

    setTransactions(data)
  }
  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionContext.Provider value={{ transactions, fetchTransactions }}>
      {children}
    </TransactionContext.Provider>
  )
}
