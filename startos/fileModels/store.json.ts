import { matches, FileHelper } from '@start9labs/start-sdk'

const { object, oneOf, literal } = matches

const shape = object({
  DELUGE_LOGLEVEL: oneOf(
    literal('info'),
    literal('warning'),
    literal('error'),
    literal('debug'),
    literal('none'),
  ).onMismatch('warning'),
})

export const store = FileHelper.json(
  {
    volumeId: 'main',
    subpath: '/store.json',
  },
  shape,
)

export const logLevels = {
  info: 'Info',
  warning: 'Warning',
  error: 'Error',
  debug: 'Debug',
  none: 'None',
}
