import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { WQDataViewProps } from './WQData.types';

const NativeView: React.ComponentType<WQDataViewProps> =
  requireNativeViewManager('WQData');

export default function WQDataView(props: WQDataViewProps) {
  return <NativeView {...props} />;
}
