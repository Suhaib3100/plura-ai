import { onGetSubscriptionPlan } from '@/actions/settings'
import React from 'react'
import { Section } from '../section-label'
import { Card, CardContent, CardDescription } from '../ui/card'
import { Check, Plus } from 'lucide-react'
import { pricingCards } from '@/constants/landing-page'

type Props = {}

const BillingSettings = async (props: Props) => {
  const plan = await onGetSubscriptionPlan()
  const planFeatures = pricingCards.find(
    (card) => card.title.toUpperCase() === plan?.toUpperCase()
  )?.features
  if (!planFeatures) return

  console.log(planFeatures)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
      <div className="lg:col-span-1">
        <Section
          label="Billing Settings"
          message="Add Payment Information, Upgrade and modify your plan"
        />
      </div>

      <div className="lg:col-span-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="lg:col-span-1 flex justify-start lg:justify-center">
            <Card className="border-dashed bg-cream border-gray-400 w-full cursor-pointer h-[270px] flex justify-center items-center">
              <CardContent className="flex gap-2 items-center">
                <div className="rounded-full border-2 p-1">
                  <Plus className="text-gray-400" />
                </div>
                <CardDescription className="font-semibold">
                  Upgrade Plan
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold mb-2">Current Plan</h3>
            <p className="text-sm font-semibold">{plan}</p>
            {planFeatures.map((feature) => (
              <div key={feature} className="flex gap-2 items-center">
                <Check className="text-green-500" />
                <p>{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BillingSettings
