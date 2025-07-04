import { sdk } from './sdk'
import { T } from '@start9labs/start-sdk'
import { uiPort } from './utils'

export const main = sdk.setupMain(async ({ effects, started }) => {
  /**
   * ======================== Setup (optional) ========================
   *
   * In this section, we fetch any resources or run any desired preliminary commands.
   */
  console.info('Starting Deluge!')

  /**
   * ======================== Additional Health Checks (optional) ========================
   *
   * In this section, we define *additional* health checks beyond those included with each daemon (below).
   */

  const additionalChecks: T.HealthCheck[] = []

  /**
   * ======================== Daemons ========================
   *
   * In this section, we create one or more daemons that define the service runtime.
   *
   * Each daemon defines its own health check, which can optionally be exposed to the user.
   */
  return sdk.Daemons.of(effects, started, additionalChecks).addDaemon(
    'primary',
    {
      subcontainer: await sdk.SubContainer.of(
        effects,
        { imageId: 'deluge' },
        sdk.Mounts.of().mountVolume({
          volumeId: 'main',
          subpath: null,
          mountpoint: '/config',
          readonly: false,
        }),
        'deluge-sub',
      ),
      exec: {
        command: ['/init'],
        runAsInit: true,
        env: {
          PUID: '1000',
          PGID: '1000',
          TZ: 'Etc/UTC',
        },
      },
      ready: {
        display: 'Web Interface',
        fn: () =>
          sdk.healthCheck.checkPortListening(effects, uiPort, {
            successMessage: 'The web interface is ready',
            errorMessage: 'The web interface is unreachable',
          }),
      },
      requires: [],
    },
  )
})
