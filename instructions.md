# Instructions for Hello Moon

## Enabling Inbound Connections (recommended)

With inbound connections enabled, your Deluge client will have greater access to the network.

### Option 1

Use this option if you do not mind exposing your home IP address to the network.

1. Open port 6881 on your router and forward to `<your-server-ip>:6881`.

### Option 2

Use this option if you want to mask your home IP from the network.

1. Follow instructions to set up a wireguard reverse tunnel: https://staging.docs.start9.com/user-manual/connecting-remotely/clearnet.html#option-2-vps-reverse-tunneling

1. Go to your Deluge "Inbound" service interface.

1. Click "Make Public"
