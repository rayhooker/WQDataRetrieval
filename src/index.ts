import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to WQData.web.ts
// and on native platforms to WQData.ts
import WQDataModule from './WQDataModule';
import WQDataView from './WQDataView';
import { ChangeEventPayload, WQDataViewProps } from './WQData.types';

// Get the native constant value.
export const PI = WQDataModule.PI;

export function hello(): string {
  return WQDataModule.hello();
}

export async function setValueAsync(value: string) {
  return await WQDataModule.setValueAsync(value);
}

const emitter = new EventEmitter(WQDataModule ?? NativeModulesProxy.WQData);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { WQDataView, WQDataViewProps, ChangeEventPayload };
