import { MainPageInfoContainer } from './styles'

interface MainPageInfoProps {
  title: string
  infoText: string
}

export function MainPageInfo({ title, infoText }: MainPageInfoProps) {
  return (
    <MainPageInfoContainer>
      <h1>{title}</h1>
      <h3>{infoText}</h3>
    </MainPageInfoContainer>
  )
}
