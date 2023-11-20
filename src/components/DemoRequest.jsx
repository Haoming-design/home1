import { CalendarDaysIcon, ChatBubbleBottomCenterIcon, HandRaisedIcon } from "@heroicons/react/20/solid";
import { FadeIn } from "./FadeIn";
import { ChatBubbleBottomCenterTextIcon, RocketLaunchIcon, UserIcon } from "@heroicons/react/24/solid";

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export  function DemoRequest() {
        return (
            <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-14 lg:py-20">
            <FadeIn>
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                  <div className="max-w-xl lg:max-w-lg">
                    <h2 className="mt-2  font-semibold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-100 sm:text-5xl">预约一场演示</h2>
                    <p className="mt-4 text-lg leading-8 text-orange-100">
                    我们将安排专人为您演示
                    </p>
                    <div className="mt-6 flex max-w-md gap-x-4">
                      <label htmlFor="email-address" className="sr-only">
                        输入您的邮箱
                      </label>
                      <input
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                        placeholder="输入您的邮箱"
                      />
                      <button
                        type="submit"
                        className="flex-none rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                      >
                        立即预约
                      </button>
                    </div>
                  </div>
                  <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                    <div className="flex flex-col items-start">
                      <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                        <CalendarDaysIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </div>
                      <dt className="mt-4 font-semibold text-orange-500">人工服务</dt>
                      <dd className="mt-2 leading-7 text-gray-400">
                      工作时段 1v1 在线支持
                      </dd>
                    </div>
                    <div className="flex flex-col items-start">
                      <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                        <UserIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </div>
                      <dt className="mt-4 font-semibold text-orange-500">售前专家</dt>
                      <dd className="mt-2 leading-7 text-gray-400">
                      根据您的需求，制定解决方案
                      </dd>
                    </div>
                    <div className="flex flex-col items-start">
                      <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                        <RocketLaunchIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </div>
                      <dt className="mt-4 font-semibold text-orange-500">技术支持</dt>
                      <dd className="mt-2 leading-7 text-gray-400">
                      根据您的需求，制定解决方案
                      </dd>
                    </div>
                    <div className="flex flex-col items-start">
                      <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                        <ChatBubbleBottomCenterTextIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </div>
                      <dt className="mt-4 font-semibold text-orange-500">咨询团队</dt>
                      <dd className="mt-2 leading-7 text-gray-400">
                      提供组织管理升级、咨询服务
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
              <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
                <div
                  className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#2B2E20] to-[#FFB64E] opacity-20"
                  style={{
                    clipPath:
                      'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                  }}
                />
              </div>
              </FadeIn>
            </div>
          )
        }