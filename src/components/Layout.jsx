
import { Header } from '@/components/Header'
import { Footer1 } from '@/components/Footer1'

export function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer1 />
    </>
  )
}
