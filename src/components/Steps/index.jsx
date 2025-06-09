import React from 'react';
import {
  CheckCircle,
  Truck,
  FileCheck2,
  Calendar,
  CreditCard,
} from 'lucide-react';

import StepIndicator from './StepIndicator';
import Connector from './Connector';
import StepProgressBar from './StepProgressBar';

const steps = [
  { title: 'Postcode', status: 'completed', icon: CheckCircle },
  { title: 'Waste Type', status: 'completed', icon: CheckCircle },
  { title: 'Select Skip', status: 'current', icon: Truck },
  { title: 'Permit Check', status: 'upcoming', icon: FileCheck2 },
  { title: 'Choose Date', status: 'upcoming', icon: Calendar },
  { title: 'Payment', status: 'upcoming', icon: CreditCard },
];

const Index = () => {
 

  return (
    <div className="">
       <StepProgressBar steps={steps} />
    </div>
  );
};

export default Index;
