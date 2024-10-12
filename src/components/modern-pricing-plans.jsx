'use client'

import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "./header"

export function ModernPricingPlans() {
  const plans = [
    {
      name: "Core",
      price: "100₹",
      description: "Essential features for secure identity management.",
      features: [
        "Real-time scam detection",
        "Access to scam database",
        "Standard customer support",
        "Standard security features",
      ],
      included: [true, true, true, true, false, false, false, false, false, false],
    },
    {
      name: "Plus",
      price: "200₹",
      description: "For companies that want access to best-in-class resources.",
      features: [
        "Real-time scam detection",
        "Private assistance",
        "Standard security features",
      ],
      included: [true, true, true, true, true, true, false, false, false],
      popular: true,
    },
    {
      name: "Pro",
      price: "400₹",
      description: "For those who want access to a consultant whenever needed.",
      features: [
        "Real-time scam detection",
        "Access to scam database",
        "Private assistance",
        "Standard security features",
      ],
      included: [true, true, true, true, true, true, true, true, true, true],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#083239] to-[#051e22] py-24 sm:py-32">
      <Header />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-[#ddff00]">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Choose Your Plan
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Select the perfect plan for your needs and take your security to the next level.
          </p>
        </div>
        <div className="isolate mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
          {plans.map((plan, index) => (
            <Card
              key={plan.name}
              className={`flex flex-col justify-between rounded-3xl p-8 ring-1 transition-all duration-300 ${
                index === 1
                  ? "bg-[#ddff00] text-gray-900 ring-gray-900/10 hover:bg-[#c5e600] hover:ring-gray-900/20"
                  : "bg-white/5 backdrop-blur-sm ring-white/10 hover:bg-white/10 hover:ring-white/20"
              } ${plan.popular ? "lg:scale-105 border-primary" : ""} ${
                plan.popular ? "border-2" : "border border-white/10"
              }`}>
              <CardHeader>
                <CardTitle
                  className={`text-2xl font-bold ${index === 1 ? "text-gray-900" : "text-white"}`}>
                  {plan.name}
                </CardTitle>
                {plan.popular && (
                  <span
                    className="inline-flex items-center rounded-full bg-primary px-2.5 py-0.5 text-xs font-medium text-white">
                    Most Popular
                  </span>
                )}
              </CardHeader>
              <CardContent className="flex-1">
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span
                    className={`text-5xl font-bold tracking-tight ${index === 1 ? "text-gray-900" : "text-white"}`}>
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm font-semibold leading-6 ${index === 1 ? "text-gray-600" : "text-gray-300"}`}>
                    /year
                  </span>
                </p>
                <p
                  className={`mt-4 text-sm leading-6 ${index === 1 ? "text-gray-600" : "text-gray-300"}`}>
                  {plan.description}
                </p>
                <ul
                  role="list"
                  className={`mt-8 space-y-3 text-sm leading-6 ${index === 1 ? "text-gray-600" : "text-gray-300"}`}>
                  {plan.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex gap-x-3">
                      {plan.included[featureIdx] ? (
                        <Check
                          className={`h-6 w-5 flex-none ${index === 1 ? "text-gray-900" : "text-primary"}`}
                          aria-hidden="true" />
                      ) : (
                        <X
                          className={`h-6 w-5 flex-none ${index === 1 ? "text-gray-400" : "text-gray-500"}`}
                          aria-hidden="true" />
                      )}
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="mt-8">
                <Button
                  className={`w-full transition-colors duration-300 ${
                    index === 1 ? "bg-gray-900 text-white hover:bg-gray-800" : ""
                  }`}
                  variant={plan.popular ? "default" : "outline"}>
                  Get started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#ddff00]/30 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ddff00]/30 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#ddff00]/20 rounded-full filter blur-3xl animate-pulse animation-delay-1000"></div>
    </div>
  );
}
