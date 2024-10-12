import { AdvancedFooter } from "@/components/advanced-footer"
import { ModernPricingPlans } from "@/components/modern-pricing-plans"


export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#083239] to-[#051e22]">
      <ModernPricingPlans />
      <AdvancedFooter />
    </div>
  )
}
