import { useId } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import screenshotContacts from '@/images/screenshots/contacts.png'
import screenshotInventory from '@/images/screenshots/inventory.png'
import screenshotProfitLoss from '@/images/screenshots/profit-loss.png'
import bg2 from '../images/bg2.svg'
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid'
import { FadeIn } from './FadeIn'

const features = [
  {
    name: '特性占位符',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
    icon: CloudArrowUpIcon,
  },
  {
    name: '特性占位符',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
  {
    name: '特性占位符',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.',
    icon: ArrowPathIcon,
  },
  {
    name: '特性占位符',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
    icon: FingerPrintIcon,
  },
  {
    name: '特性占位符',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: Cog6ToothIcon,
  },
  {
    name: '特性占位符',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. ',
    icon: ServerIcon,
  },
]

export function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for simplifying everyday business tasks"
      className="relative pb-20 pt-20 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
    <div className="w-full h-auto -z-10 mx-auto">
      <Image
        className="object-cover w-full h-full max-w-none"
        src={bg2}
        alt="Hero background"
        width={2146} height={774} // or other width
        quality={100}
      />
    </div>
  </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-base font-semibold leading-7 text-orange-100">分布式新能源计算平台</h2>
          <p className="mt-2 text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-100 sm:text-5xl">未来的新能源运营</p>
          <p className="mt-6 text-lg leading-8 text-orange-100">
           结合市场情报，从而筛选投资标的、设计新能源资产配置方案、建立更科学的项目投资回报模型
          </p>
        </div>
        </FadeIn>
        <div className="relative overflow-hidden pt-16">
        <FadeIn>
        <div className="mx-auto max-w-7xl -z-10 px-6 lg:px-8">
          <img
            src="https://images.unsplash.com/photo-1454779132693-e5cd0a216ed3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3271&q=80s"
            alt="App screenshot"
            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10"
            width={2432}
            height={1442}
          />          
          <div className="relative" aria-hidden="true">
            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-gray-900 pt-[7%]" />
          </div>
        </div>
        </FadeIn>
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
      <FadeIn>
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">

          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold text-white">
                <feature.icon className="absolute left-1 top-1 h-5 w-5 text-orange-400" aria-hidden="true" />
                {feature.name}
              </dt>{' '}
              <dd className="inline">{feature.description}</dd>
            </div>
          ))}
        </dl>
        </FadeIn>
      </div>
    </div>
    </section>
  )
}
