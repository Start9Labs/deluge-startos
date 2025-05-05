import { sdk } from '../sdk'
import { logLevels } from '../store'

const { InputSpec, Value } = sdk

export const inputSpec = InputSpec.of({
  DELUGE_LOGLEVEL: Value.select({
    name: 'Log Level',
    default: 'warning',
    values: logLevels,
  }),
})

export const setLogLevel = sdk.Action.withInput(
  // id
  'set-log-level',

  // metadata
  async ({ effects }) => ({
    name: 'Set Log Level',
    description: 'Set Deluge log level for increased or decreased verbosity',
    warning: null,
    allowedStatuses: 'any',
    group: null,
    visibility: 'enabled',
  }),

  // form input specification
  inputSpec,

  // optionally pre-fill the input form
  async ({ effects }) => ({
    DELUGE_LOGLEVEL: await sdk.store
      .getOwn(effects, sdk.StorePath.DELUGE_LOGLEVEL)
      .const(),
  }),

  // the execution function
  async ({ effects, input }) => {
    sdk.store.setOwn(
      effects,
      sdk.StorePath.DELUGE_LOGLEVEL,
      input.DELUGE_LOGLEVEL,
    )
  },
)
