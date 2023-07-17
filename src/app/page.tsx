import Image from 'next/image';
import styles from './page.module.css';
import { Container, Input, Layout } from '@uala/abra';
import LayoutAbra from '../components/LayoutAbra';
import UserFlow, { UserFlowStep } from '@/components/FlowStep';
import ResetPassword from '@/components/ResetPassword';

export default function Home() {
  return (
    <>
      <UserFlow startWith="reset-form">
        <UserFlowStep id="reset-form" component={ResetPassword} />
        {/* <UserFlowStep id="success" component={} />
        <UserFlowStep id="failed" component={} /> */}
      </UserFlow>
    </>
  );
}
