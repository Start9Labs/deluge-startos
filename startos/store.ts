import { setupExposeStore } from '@start9labs/start-sdk'

export const logLevels = {
  info: 'Info',
  warning: 'Warning',
  error: 'Error',
  debug: 'Debug',
  none: 'None',
}

export type Store = {
  DELUGE_LOGLEVEL: keyof typeof logLevels
}

export const initStore: Store = {
  DELUGE_LOGLEVEL: 'warning',
}

export const exposedStore = setupExposeStore<Store>(() => [])
