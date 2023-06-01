import { HeaderContainer } from './styles'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
  const router = useRouter()

  return (
    <HeaderContainer>
      <Link href="/">Lacrei</Link>

      <div className="menu">
        <Link
          href="/"
          className={router.pathname === '/' ? 'homeRouter' : undefined}
        >
          Home
        </Link>
        <Link
          href="/pessoa-usuario"
          className={
            router.pathname === '/pessoa-usuario'
              ? 'userPersonRouter'
              : undefined
          }
        >
          Pessoa Usuária
        </Link>
        <Link
          href="/profissional"
          className={
            router.pathname === '/profissional'
              ? 'professionalRouter'
              : undefined
          }
        >
          Profissional
        </Link>
      </div>
    </HeaderContainer>
  )
}
