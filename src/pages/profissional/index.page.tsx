import { MainPageInfo } from '@/components/MainPageInfo'
import { ProfessionalContainer } from './styles'
import Image from 'next/image'
import professionalCoverImage from '@/assets/professionalCover.svg'

export default function Professional() {
  return (
    <ProfessionalContainer>
      <MainPageInfo
        title="Profissional"
        infoText="A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora."
      />
      <Image
        src={professionalCoverImage}
        alt="Imagem ilustrativa de profissionais da área da saúde em diálogo entre si."
      />
    </ProfessionalContainer>
  )
}
