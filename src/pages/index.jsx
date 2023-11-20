import Head from 'next/head';
import { Hero } from '@/components/Hero';
import { DemoRequest } from '@/components/DemoRequest';
import { SecondaryFeatures } from '@/components/SecondaryFeatures';
import Client from '@/components/Client';
import Pricing1 from '@/components/Pricing1';
import { Resources } from '@/components/Resources';

export default function Home() {
  return (
    <>
      <Head>
        <title>因方科技丨新能源计算丨光伏储能丨快而准开箱即用</title>
        <meta
          name="description"
          content="生成符合实际的配置方案，给出财务和运行模型；预测和监控运行，更好地应对停电等紧急情况；优化运行策略，提高设备收益和运行效率。"
        />
      </Head>
      <Hero />
      <Client />
      <SecondaryFeatures />
      <Resources />
      <DemoRequest />
      <Pricing1 />
    </>
  );
}
