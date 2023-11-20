import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import logoLaravel from '@/images/logos/laravel.svg'
import logoMirage from '@/images/logos/mirage.svg'
import logoStatamic from '@/images/logos/statamic.svg'
import logoStaticKit from '@/images/logos/statickit.svg'
import logoTransistor from '@/images/logos/transistor.svg'
import logoTuple from '@/images/logos/tuple.svg'
import bgImage from '../images/bg.svg'

export function Hero() {
  return (
    <div className="relative max-w-6xl px-4 mx-auto sm:px-6">
      
    <Container className="pb-60 pt-20 text-center lg:pt-32">
      <h1 className="mx-auto max-w-4xl font-display text-7xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-100 ">
        新能源快而准的工具包{' '}
        <span className="relative whitespace-nowrap text-orange-400">
          <svg
            aria-hidden="true"
            viewBox="0 0 418 42"
            className="absolute left-0 top-2/3 h-[0.58em] w-full fill-orange-400"
            preserveAspectRatio="none"
          >
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
          </svg>
          <span className="relative">开箱即用</span>
        </span>{' '}
      
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-xl font-medium  text-orange-100">
      生成符合实际的配置方案，给出财务和运行模型；预测和监控运行，更好地应对停电等紧急情况；优化运行策略，提高设备收益和运行效率。
      </p>
      <div className=" mt-10 flex justify-center gap-x-6">
        <Button href="/register">立即试用</Button>

      </div>

      
    </Container>
    <div className="absolute inset-0 -z-10 -mx-28 rounded-b-[3rem] pointer-events-none " aria-hidden="true">
      <div className="absolute bottom-0 -translate-x-1/2 left-1/2 -z-10">
      <Image
          src={bgImage}
          className="max-w-none"
          alt="Hero background"
          width={2146} height={774}// or other width
          quality={100}
          objectFit="contain"
        />
        <div className="absolute  -translate-x-1/2 left-1/2 -z-10">

      </div>
          </div>
          </div>
  

  </div>
  )
}
