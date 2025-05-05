import { sdk } from '../sdk'
import { setLogLevel } from './setLogLevel'

export const actions = sdk.Actions.of().addAction(setLogLevel)
