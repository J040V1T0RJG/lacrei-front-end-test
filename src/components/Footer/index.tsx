import Link from 'next/link'
import { FooterContainer } from './styles'
import { useRouter } from 'next/router'
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
} from '@phosphor-icons/react'

export default function Footer() {
  const router = useRouter()

  return (
    <FooterContainer>
      <div className="border" />
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
      <div className="socialMedia">
        <Link href="https://www.instagram.com/lacrei.saude/" target="_blank">
          <FacebookLogo size={24} />
        </Link>
        <Link href="https://www.facebook.com/lacrei.saude" target="_blank">
          <InstagramLogo size={24} />
        </Link>
        <Link href="https://www.linkedin.com/company/lacrei/" target="_blank">
          <LinkedinLogo size={24} />
        </Link>
      </div>
      <p>Desafio Front-end Lacrei</p>
    </FooterContainer>
  )
}
