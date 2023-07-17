'use client';
import { useContext } from 'react';

import { StepComponent, FlowContext } from './UserFlow';

type UserFlowStepProps = { id: string; component: StepComponent };

const UserFlowStep: React.FC<UserFlowStepProps> = ({
  id,
  component: Component,
}) => {
  const { activePage, handleNext, data } = useContext(FlowContext);
  if (!activePage || activePage !== id) return null;
  return <Component onNext={handleNext} data={data} />;
};

export default UserFlowStep;
