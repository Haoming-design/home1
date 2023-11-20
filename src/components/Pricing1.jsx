import { Fragment } from 'react'
import { CheckIcon, MinusIcon, check, minus } from '@heroicons/react/24/solid'
import { FadeIn } from './FadeIn'

const tiers = [
  {
    name: '试用版',
    id: 'tier-试用版',
    href: '#',
    priceMonthly: '免费',
    description: 'Quis suspendisse ut fermentum neque vivamus non tellus.',
    mostPopular: false,
  },
  {
    name: '专业版',
    id: 'tier-专业版',
    href: '#',
    priceMonthly: '咨询',
    description: 'Quis eleifend a tincidunt pellentesque. A tempor in sed.',
    mostPopular: true,
  },
  {
    name: '组织版',
    id: 'tier-组织版',
    href: '#',
    priceMonthly: '咨询',
    description: 'Orci volutpat ut sed sed neque, dui eget. Quis tristique non.',
    mostPopular: false,
  },
]
const sections = [
  {
    name: '基本功能',
    features: [
      { name: '个性化资讯推送', tiers: { 试用版: true, 专业版: true, 组织版: true } },
      { name: '移动版', tiers: { 试用版: true, 专业版: true, 组织版: true } },
      { name: '收益预测', tiers: {  专业版: '24h/30d', 组织版: '24h/30d'} },
      { name: '最优配置计算', tiers: {  组织版: true } },
      { name: '供应商支持的设备库', tiers: {  组织版: true } },
      { name: '* 真实的设备参数', tiers: {  组织版: true } },
      { name: '* 符合实际的成本测算', tiers: {  组织版: true } },
    ],
  },
  {
    name: '新能源建设规划管理',
    features: [
      { name: '成员角色 / 权限管理', tiers: { 组织版: true } },
      { name: '营销管理工具包', tiers: {  组织版: true } },
      { name: '图纸设计工具包', tiers: { 组织版: true } },
      { name: '金融计算工具包', tiers: { 组织版: true } },
      { name: '电池调度工具包', tiers: { 组织版: true } },
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Pricing1() {
  return (
  
    <div className="bg-gray-900 py-24 sm:py-32">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <FadeIn> 
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-orange-100">产品定价</h2>
          <p className="mt-2  font-semibold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-100 sm:text-5xl">
            为您的团队选择最佳方案
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-orange-100">
        基于云计算、物联网、智能算法等数字技术，提供新能源资产管理的综合解决方案，面向用户侧储能以及分布式新能源场景
        </p>
      </FadeIn>


        {/* xs to lg */}
        <div className="mx-auto mt-12 max-w-md space-y-8 sm:mt-16 lg:hidden">
        <FadeIn> 
          {tiers.map((tier) => (
            <section
              key={tier.id}
              className={classNames(
                tier.mostPopular ? 'rounded-xl bg-white/5 ring-1 ring-inset ring-white/10' : '',
                'p-8'
              )}
            >
              <h3 id={tier.id} className="text-sm font-semibold leading-6 text-white">
                {tier.name}
              </h3>
              <p className="mt-2 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold text-white">{tier.priceMonthly}</span>
                <span className="text-sm font-semibold text-gray-300">/定制</span>
              </p>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? 'bg-orange-500 text-white hover:bg-orange-400 focus-visible:outline-orange-500'
                    : 'bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white',
                  'mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                )}
              >
                立即试用
              </a>
              <ul role="list" className="mt-10 space-y-4 text-sm leading-6 text-white">
                {sections.map((section) => (
                  <li key={section.name}>
                    <ul role="list" className="space-y-4">
                      {section.features.map((feature) =>
                        feature.tiers[tier.name] ? (
                          <li key={feature.name} className="flex gap-x-3">
                            <check className="h-6 w-5 flex-none text-orange-400" aria-hidden="true" />
                            <span>
                              {feature.name}{' '}
                              {typeof feature.tiers[tier.name] === 'string' ? (
                                <span className="text-sm leading-6 text-gray-400">({feature.tiers[tier.name]})</span>
                              ) : null}
                            </span>
                          </li>
                        ) : null
                      )}
                    </ul>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </FadeIn>

        </div>

        {/* lg+ */}
        <div className="isolate mt-20 hidden lg:block">
        <FadeIn>

          <div className="relative -mx-8">
          <div className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl" aria-hidden="true">
        <div
          className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#443A2B] to-[#E6FF4E] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
        </div>
            {tiers.some((tier) => tier.mostPopular) ? (
              <div className="absolute inset-x-4 inset-y-0 -z-10 flex">
                <div
                  className="flex w-1/4 px-4"
                  aria-hidden="true"
                  style={{ marginLeft: `${(tiers.findIndex((tier) => tier.mostPopular) + 1) * 25}%` }}
                >
                  <div className="w-full rounded-t-xl border-x border-t border-white/10 bg-white/5" />
                </div>
              </div>
            ) : null}
            <table className="w-full table-fixed border-separate border-spacing-x-8 text-left">
              <caption className="sr-only">Pricing plan comparison</caption>
              <colgroup>
                <col className="w-1/4" />
                <col className="w-1/4" />
                <col className="w-1/4" />
                <col className="w-1/4" />
              </colgroup>
              <thead>
                <tr>
                  <td />
                  {tiers.map((tier) => (
                    <th key={tier.id} scope="col" className="px-6 pt-6 xl:px-8 xl:pt-8">
                      <div className="text-sm font-semibold leading-7 text-white">{tier.name}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <span className="sr-only">Price</span>
                  </th>
                  {tiers.map((tier) => (
                    <td key={tier.id} className="px-6 pt-2 xl:px-8">
                      <div className="flex items-baseline gap-x-1 text-white">
                        <span className="text-4xl font-bold">{tier.priceMonthly}</span>
                        <span className="text-sm font-semibold leading-6">/定制</span>
                      </div>
                      <a
                        href={tier.href}
                        className={classNames(
                          tier.mostPopular
                            ? 'bg-orange-500 hover:bg-orange-400 focus-visible:outline-orange-600'
                            : 'bg-white/10 hover:bg-white/20 focus-visible:outline-white',
                          'mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                        )}
                      >
                        立即使用
                      </a>
                    </td>
                  ))}
                </tr>
                {sections.map((section, sectionIdx) => (
                  <Fragment key={section.name}>
                    <tr>
                      <th
                        scope="colgroup"
                        colSpan={4}
                        className={classNames(
                          sectionIdx === 0 ? 'pt-8' : 'pt-16',
                          'pb-4 text-sm font-semibold leading-6 text-white'
                        )}
                      >
                        {section.name}
                        <div className="absolute inset-x-8 mt-4 h-px bg-white/10" />
                      </th>
                    </tr>
                    {section.features.map((feature) => (
                      <tr key={feature.name}>
                        <th scope="row" className="py-4 text-sm font-normal leading-6 text-white">
                          {feature.name}
                          <div className="absolute inset-x-8 mt-4 h-px bg-white/5" />
                        </th>
                        {tiers.map((tier) => (
                          <td key={tier.id} className="px-6 py-4 xl:px-8">
                            {typeof feature.tiers[tier.name] === 'string' ? (
                              <div className="text-center text-sm leading-6 text-gray-300">
                                {feature.tiers[tier.name]}
                              </div>
                            ) : (
                              <>
                                {feature.tiers[tier.name] === true ? (
                                  <CheckIcon className="mx-auto h-5 w-5 text-orange-400" aria-hidden="true" />
                                ) : (
                                  <MinusIcon className="mx-auto h-5 w-5 text-gray-500" aria-hidden="true" />
                                )}

                                <span className="sr-only">
                                  {feature.tiers[tier.name] === true ? 'Included' : 'Not included'} in {tier.name}
                                </span>
                              </>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
          
          </FadeIn>

        </div>
      </div>
    </div>
  )
}
