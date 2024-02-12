import ContatoSection from '@/screens/ContatoSection'
import Layout from '../../Layout'

export default function Contato() {
  return (
    <div>
      <div className="fade-in-visibility absolute z-50 h-screen w-screen bg-white"></div>
      <Layout local="contato">
        <ContatoSection />
      </Layout>
    </div>
  )
}
