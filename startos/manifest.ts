import { setupManifest } from '@start9labs/start-sdk'

export const manifest = setupManifest({
  id: 'deluge',
  title: 'Deluge',
  license: 'GPL',
  // @TODO links and descriptions
  wrapperRepo: 'https://github.com/Start9Labs/hello-world-wrapper',
  upstreamRepo: 'https://github.com/Start9Labs/hello-world',
  supportSite: 'https://docs.start9.com/',
  marketingSite: 'https://start9.com/',
  donationUrl: null,
  description: {
    short: 'Bare bones example of a StartOS service with dependencies',
    long: 'Hello Moon is a bare-bones service with dependencies that launches a web interface to say "Hello Moon", and nothing more.',
  },
  volumes: ['main'],
  images: {
    deluge: {
      source: {
        dockerTag: 'linuxserver/deluge:2.2.0',
      },
    },
  },
  hardwareRequirements: {},
  alerts: {
    install: null,
    update: null,
    uninstall: null,
    restore: null,
    start: null,
    stop: null,
  },
  dependencies: {},
})
