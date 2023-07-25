import ProjetosSection from '@/components/screens/ProjetosSection'
import Layout from '../../components/Layout'

export default function Projetos() {
  return (
    <div>
      <div className="fade-in-visibility absolute z-50 h-screen w-screen bg-white "></div>
      <Layout local="projetos">
        <ProjetosSection />
      </Layout>
    </div>
  )
}
