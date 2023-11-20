import React from 'react';
import { FadeIn } from './FadeIn';


export default function Client() {
    return (
      <div className="bg-gray-900 py-24 sm:py-20">
      <FadeIn>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
            <div className="mx-auto w-full max-w-xl lg:mx-0">
              <h2 className="text-3xl font-semibold tracking-tight text-white">我们的合作伙伴</h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
              基于云计算、物联网、智能算法等数字技术，提供新能源资产管理的综合解决方案，面向用户侧储能以及分布式新能源场景
              </p>
              <div className="mt-8 flex items-center gap-x-6">
                <a
                  href="#"
                  className="rounded-full bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  立即试用
                </a>
                <a href="#" className="text-sm font-semibold text-white">
                  联系我们 <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
              <img
                className="max-h-12 w-full object-contain object-left"
                src="https://tailwindui.com/img/logos/tuple-logo-white.svg"
                alt="Tuple"
                width={105}
                height={48}
              />
              <img
                className="max-h-12 w-full object-contain object-left"
                src="https://tailwindui.com/img/logos/reform-logo-white.svg"
                alt="Reform"
                width={104}
                height={48}
              />
              <img
                className="max-h-12 w-full object-contain object-left"
                src="https://tailwindui.com/img/logos/savvycal-logo-white.svg"
                alt="SavvyCal"
                width={140}
                height={48}
              />
              <img
                className="max-h-12 w-full object-contain object-left"
                src="https://tailwindui.com/img/logos/laravel-logo-white.svg"
                alt="Laravel"
                width={136}
                height={48}
              />
              <img
                className="max-h-12 w-full object-contain object-left"
                src="https://tailwindui.com/img/logos/transistor-logo-white.svg"
                alt="Transistor"
                width={158}
                height={48}
              />
              <img
                className="max-h-12 w-full object-contain object-left"
                src="https://tailwindui.com/img/logos/statamic-logo-white.svg"
                alt="Statamic"
                width={147}
                height={48}
              />
            </div>
          </div>
        </div>
        </FadeIn>
      </div>
    )
  }
  