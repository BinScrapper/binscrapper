import { platform, version } from 'os'

export const platformComands = {
    os: platform(),
    version: version(),
    platform: {
        linux: {
           screen: "xdpyinfo | awk '/dimensions/{print $2}'"
        },
        win32: {
            screen: "Get-WmiObject -Class Win32_VideoController | Select-Object CurrentHorizontalResolution, CurrentVerticalResolution"
        }
    }
}

export const platforms = {
    linux: 'linux',
    windows: 'win32'
}