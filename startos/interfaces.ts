import { sdk } from './sdk'
import { inboundPort, uiPort } from './utils'

export const setInterfaces = sdk.setupInterfaces(async ({ effects }) => {
  // ui
  const uiMulti = sdk.MultiHost.of(effects, 'uimulti')
  const uiMultiOrigin = await uiMulti.bindPort(uiPort, { protocol: 'http' })
  const ui = sdk.createInterface(effects, {
    name: 'Web UI',
    id: 'webui',
    description: 'The web interface of Deluge',
    type: 'ui',
    schemeOverride: null,
    masked: false,
    username: null,
    path: '',
    search: {},
  })
  const uiReceipt = await uiMultiOrigin.export([ui])

  // inbound
  const inboundMulti = sdk.MultiHost.of(effects, 'inboundmulti')
  const inboundMultiOrigin = await inboundMulti.bindPort(inboundPort, {
    protocol: null,
    addSsl: null,
    secure: { ssl: false },
    preferredExternalPort: inboundPort,
  })
  const inbound = sdk.createInterface(effects, {
    name: 'Inbound Connections',
    id: 'inbound',
    description: 'Used for accepting inbound traffic, requires clearnet',
    type: 'p2p',
    schemeOverride: null,
    masked: false,
    username: null,
    path: '',
    search: {},
  })
  const inboundReceipt = await inboundMultiOrigin.export([inbound])

  return [uiReceipt, inboundReceipt]
})
