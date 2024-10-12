import { AdvancedFooter } from "@/components/advanced-footer"
import { ContactPageComponent } from "@/components/contact-page"
import { Header } from "@/components/header"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#083239] to-[#051e22]">
        <Header/>
   <div className="pt-20">
   <ContactPageComponent />
   </div>
   <AdvancedFooter />
    </div>
  )
}
