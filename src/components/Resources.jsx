import Link from 'next/link';
import { useEffect } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { Button } from './Button'
import { Logo } from './Logo'
import { FadeIn } from './FadeIn'

const resources = [
  {
    href: '',
    name: '3D 建设提案',
    description:
      '描述文字占位描述文字占位，描述文字占位描述文字占位描述文字占位，描述文字占位',
    icon: Logo,

  },
  {
    href: '',
    name: '计算平台',
    description:
      '描述文字占位描述文字占位，描述文字占位描述文字占位描述文字占位，描述文字占位',
    icon: Logo,

  },
  {
    href: '',
    name: 'CRM 工具',
    description:
      '描述文字占位描述文字占位，描述文字占位描述文字占位描述文字占位，描述文字占位',
    icon: Logo,

  },
  {
    href: '',
    name: '资讯',
    description:
      '描述文字占位描述文字占位，描述文字占位描述文字占位描述文字占位，描述文字占位',
    icon: Logo,

  },
]

function ResourceIcon({ icon: Icon }) {
  return (
    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900/5 ring-1 ring-zinc-900/25 backdrop-blur-[2px] transition duration-300 group-hover:bg-white/50 group-hover:ring-zinc-900/25 dark:bg-white/7.5 dark:ring-white/15 dark:group-hover:bg-emerald-300/10 dark:group-hover:ring-emerald-400">
      <Icon className="h-5 w-5 fill-zinc-700/10 stroke-zinc-700 transition-colors duration-300 group-hover:stroke-zinc-900 dark:fill-white/10 dark:stroke-zinc-400 dark:group-hover:fill-emerald-300/10 dark:group-hover:stroke-emerald-400" />
    </div>
  )
}

function ResourcePattern({ mouseX, mouseY }) {
  let maskImage = useMotionTemplate`radial-gradient(180px at ${mouseX}px ${mouseY}px, white, transparent)`
  let style = { maskImage, WebkitMaskImage: maskImage }

  useEffect(() => {
    console.log(style);
  }, [style, maskImage]);

  return (
    <div className="pointer-events-none">
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r  opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#2B2E20] dark:to-[#342F28]"
        style={style}
      />
    </div>
  )
}

function Resource({ resource }) {
  let mouseX = useMotionValue(0)
  let mouseY = useMotionValue(0)

  function onMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect()
  
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)

    console.log(mouseX.get(), mouseY.get());
  }

  return (
    <div
      key={resource.href}
      onMouseMove={onMouseMove}
      className="group relative flex rounded-2xl  transition-shadow bg-orange-100/2.5 hover:shadow-black/5"
    >
      <ResourcePattern {...resource.pattern} mouseX={mouseX} mouseY={mouseY} />
      <div className="absolute inset-0 rounded-2xl ring-2 ring-inset ring-orange-100/10 group-hover:ring-orange-100/20" />
      <div className="relative rounded-4xl px-4 pb-4 pt-12">
        <ResourceIcon icon={resource.icon} />
        <h2 className="mt-4 text-2xl font-semibold leading-7 text-white">
          <Link href={resource.href}>
            <span className="absolute inset-0 rounded-2xl" />
            {resource.name}
          </Link>
        </h2>
        <p className="mt-3 text-sm leading-6 text-zinc-400">
          {resource.description}
        </p>
        <div className="mt-4">
        <a href="#" className="text-sm font-semibold text-white">
          了解更多 <span aria-hidden="true">&rarr;</span>
        </a>
        </div>
      </div>  
    </div>
  )
}

export function Resources() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
      {/* <FadeIn>
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-base font-semibold leading-7 text-orange-100">产品矩阵</h2>
          <p className="mt-2 text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-100 sm:text-5xl">为新能源建设提供全方位服务</p>
          <p className="mt-6 text-lg leading-8 pb-20 text-orange-100">
           结合市场情报，从而筛选投资标的、设计新能源资产配置方案、建立更科学的项目投资回报模型
          </p>
        </div>
      </FadeIn>
      <FadeIn> */}
        <div className="not-prose grid grid-cols-1 gap-8  sm:grid-cols-2 xl:grid-cols-4">
          {resources.map((resource) => (
            <Resource key={resource.href} resource={resource} />
          ))}
        </div>
       {/* </FadeIn> */}
    </div>
  )
}
