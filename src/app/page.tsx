import Image from 'next/image';
import Banner from "@/components/Banner";
import Card from "@/components/Card";
import styles from './page.module.css'
import PromoteCard from '@/components/PromoteCard';
import HomeCard from '@/components/HomeCard';

export default function Home() {
  return (
    <main>
      <Banner/>
      <PromoteCard></PromoteCard>
      <HomeCard></HomeCard>
    </main>
  );
}
