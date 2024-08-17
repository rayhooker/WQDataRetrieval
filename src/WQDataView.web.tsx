import * as React from 'react';

import { WQDataViewProps } from './WQData.types';

export default function WQDataView(props: WQDataViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
