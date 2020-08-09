import { Version } from './version-utils';

// When a new version of powershell comes out, add the various downloads to this list.
export const versions: ReadonlyArray<Readonly<Version>> = [
    {
        version: '6.2.0-preview.1',
        versionOutput: 'PowerShell v6.2.0-preview.1',
        isPrerelease: true,
        builds: [
            {
                platform: 'linux',
                arch: 'x64',
                extension: '.tar.gz',
                sha256: '6A9E95C7C7B36F63DB909B5C65DB7B67C9C6E7AA7FC03B9A7B533AD52E85DB54',
                url: 'https://github.com/PowerShell/PowerShell/releases/download/v6.2.0-preview.1/powershell-6.2.0-preview.1-linux-x64.tar.gz',
                bin: 'pwsh'
            },
            {
                platform: 'darwin',
                arch: 'x64',
                extension: '.tar.gz',
                sha256: '9621B0BB56C8F24BC9E2B5D03A862AAB4A63DD1B34B8F2C45BAB81CEF9766FC8',
                url: 'https://github.com/PowerShell/PowerShell/releases/download/v6.2.0-preview.1/powershell-6.2.0-preview.1-osx-x64.tar.gz',
                bin: 'pwsh'
            },
            {
                platform: 'win32',
                arch: 'x64',
                extension: '.zip',
                sha256: 'E07B5DF326AA9CF02C08A15C6DE9C7ADC48F1A0725EA648CE046BA9867AF781E',
                url: 'https://github.com/PowerShell/PowerShell/releases/download/v6.2.0-preview.1/PowerShell-6.2.0-preview.1-win-x64.zip',
                bin: 'pwsh.exe'
            },
            {
                platform: 'win32',
                arch: 'ia32',
                extension: '.zip',
                sha256: '7B14A260EC292F1177BE1B855F25BDF5E231D071FEA5D409D7BC046077C91049',
                url: 'https://github.com/PowerShell/PowerShell/releases/download/v6.2.0-preview.1/PowerShell-6.2.0-preview.1-win-x86.zip',
                bin: 'pwsh.exe'
            }
        ]
    },
    {
        version: '6.1.0',
        versionOutput: 'PowerShell v6.1.0',
        isPrerelease: false,
        builds: [
            {
                platform: 'linux',
                arch: 'x64',
                extension: '.tar.gz',
                sha256: '68674CFBA84ABF759C7E10EF6FCD926CBC125D9958E11A1926AF7CF7F604506C',
                url: 'https://github.com/PowerShell/PowerShell/releases/download/v6.1.0/powershell-6.1.0-linux-x64.tar.gz',
                bin: 'pwsh'
            },
            {
                platform: 'darwin',
                arch: 'x64',
                extension: '.tar.gz',
                sha256: 'F3DBC06EC6AA8615179A98765AC110CE63EC982239C5F3BE6FC52C434DDD9EF8',
                url: 'https://github.com/PowerShell/PowerShell/releases/download/v6.1.0/powershell-6.1.0-osx-x64.tar.gz',
                bin: 'pwsh'
            },
            {
                platform: 'win32',
                arch: 'x64',
                extension: '.zip',
                sha256: 'CA4ED36E663AB5F7FD32F636F9D274B1544173CEA05B8A78481EB51C3F23163D',
                url: 'https://github.com/PowerShell/PowerShell/releases/download/v6.1.0/PowerShell-6.1.0-win-x64.zip',
                bin: 'pwsh.exe'
            },
            {
                platform: 'win32',
                arch: 'ia32',
                extension: '.zip',
                sha256: 'B214DBA4E4FB3AFC8A4B946BCBEF95E8FBEC0E313214663938D57ECCD8B068B9',
                url: 'https://github.com/PowerShell/PowerShell/releases/download/v6.1.0/PowerShell-6.1.0-win-x86.zip',
                bin: 'pwsh.exe'
            }
        ]
    },
    {
        version: '6.1.0-rc.1',
        isPrerelease: true,
        versionOutput: 'PowerShell v6.1.0-rc.1',
        builds: [{
            platform: 'linux',
            arch: 'x64',
            extension: '.tar.gz',
            sha256: '575AAEB937007C96EF0E792DDE930BB85DD4612FE68B9381C77A3BBD8C0FABDA',
            url: 'https://github.com/PowerShell/PowerShell/releases/download/v6.1.0-rc.1/powershell-6.1.0-rc.1-linux-x64.tar.gz',
            bin: 'pwsh'
        },
        {
            platform: 'darwin',
            arch: 'x64',
            extension: '.tar.gz',
            sha256: '536FFE89DBDF9F0CC77CA95629602D2430B953CECE2AF4037EA718E82EDC20CA',
            url: 'https://github.com/PowerShell/PowerShell/releases/download/v6.1.0-rc.1/powershell-6.1.0-rc.1-osx-x64.tar.gz',
            bin: 'pwsh'
        },
        {
            platform: 'win32',
            arch: 'x64',
            extension: '.zip',
            sha256: '3A51CAFD2BEDFD9FAB52D043A67BC134E45FA45C4F9A1E0A0E678EB170D7D233',
            url: 'https://github.com/PowerShell/PowerShell/releases/download/v6.1.0-rc.1/PowerShell-6.1.0-rc.1-win-x64.zip',
            bin: 'pwsh.exe'
        },
        {
            platform: 'win32',
            arch: 'ia32',
            extension: '.zip',
            sha256: 'E0BF9A4CB2ED10B3543596B0CB2523B0489734729D85322C5755E903E0E6672C',
            url: 'https://github.com/PowerShell/PowerShell/releases/download/v6.1.0-rc.1/PowerShell-6.1.0-rc.1-win-x86.zip',
            bin: 'pwsh.exe'
        }
        ]
    },
    {
        version: '6.0.4',
        versionOutput: 'PowerShell v6.0.4',
        isPrerelease: false,
        builds: [{
            platform: 'win32',
            arch: 'x64',
            extension: '.zip',
            sha256: '0B04B63D2B63D4631CF5BD6E531F26B60F3CC1B1DB41C8B5360F14776E66F797',
            url: 'https://github.com/PowerShell/PowerShell/releases/download/v6.0.4/PowerShell-6.0.4-win-x64.zip',
            bin: 'pwsh.exe'
        },
        {
            platform: 'win32',
            arch: 'ia32',
            extension: '.zip',
            sha256: '787FBECBA57CD385428DBF4F4A0B7E16F92EECEE3E6ADAE65D1AB04CA8CF41DD',
            url: 'https://github.com/PowerShell/PowerShell/releases/download/v6.0.4/PowerShell-6.0.4-win-x86.zip',
            bin: 'pwsh.exe'
        },
        {
            platform: 'darwin',
            arch: 'x64',
            extension: '.tar.gz',
            sha256: '7CF6E229831A1F167D20646ACA2768D53D5EEA280727459171F03E497D154906',
            url: 'https://github.com/PowerShell/PowerShell/releases/download/v6.0.4/powershell-6.0.4-osx-x64.tar.gz',
            bin: 'pwsh'
        },
        {
            platform: 'linux',
            arch: 'x64',
            extension: '.tar.gz',
            sha256: 'BF085C3C8B6288C3FD64F0B0D757DCD54212FA3643DAA48CD77C67BD779EFCE2',
            url: 'https://github.com/PowerShell/PowerShell/releases/download/v6.0.4/powershell-6.0.4-linux-x64.tar.gz',
            bin: 'pwsh'
        }
        ]
    },
    {
        version: '6.0.3',
        versionOutput: 'PowerShell v6.0.3',
        isPrerelease: false,
        builds: [
            {
                platform: 'linux',
                arch: 'x64',
                extension: '.tar.gz',
                sha256: 'A43D3056688FABC442BFBE0FD7A096F7E28036759EFF9D6EBE8CB9155C9D9AAB',
                url: 'https://github.com/PowerShell/PowerShell/releases/download/v6.0.3/powershell-6.0.3-linux-x64.tar.gz',
                bin: 'pwsh'
            },
            {
                platform: 'darwin',
                arch: 'x64',
                extension: '.tar.gz',
                sha256: '9161416723031CA9C5422A707376660EF2F5D6D64D3B8A94B107EB1AABF3D2F0',
                url: 'https://github.com/PowerShell/PowerShell/releases/download/v6.0.3/powershell-6.0.3-osx-x64.tar.gz',
                bin: 'pwsh'
            },
            {
                platform: 'win32',
                arch: 'x64',
                extension: '.zip',
                sha256: 'DFFBB84E3E474E00100F6E51F36F7CC1146C70E68CAB72F94AA91AB35CB24AC7',
                url: 'https://github.com/PowerShell/PowerShell/releases/download/v6.0.3/PowerShell-6.0.3-win-x64.zip',
                bin: 'pwsh.exe'
            },
            {
                platform: 'win32',
                arch: 'ia32',
                extension: '.zip',
                sha256: '51A3FB4AF86C72E300B3C9AAD93BE1665CE67E1077CF109B72CC57F4F8AC539C',
                url: 'https://github.com/PowerShell/PowerShell/releases/download/v6.0.3/PowerShell-6.0.3-win-x86.zip',
                bin: 'pwsh.exe'
            }
        ]
    },
    {
        version: '6.0.2',
        versionOutput: 'PowerShell v6.0.2',
        isPrerelease: false,
        builds: [
            {
                platform: 'linux',
                arch: 'x64',
                extension: '.tar.gz',
                sha256: '092F628A7F1672C8FB46EC0D7EC90590B8CD372188DE3243E2E18660C9EC6F29',
                url: 'https://github.com/PowerShell/PowerShell/releases/download/v6.0.2/powershell-6.0.2-linux-x64.tar.gz',
                bin: 'pwsh'
            },
            {
                platform: 'darwin',
                arch: 'x64',
                extension: '.tar.gz',
                sha256: 'F2311BDA90CA02251D9AD930BE2167B6B906B3EA6B62EF323CA79FA4B5AA3B31',
                url: 'https://github.com/PowerShell/PowerShell/releases/download/v6.0.2/powershell-6.0.2-osx-x64.tar.gz',
                bin: 'pwsh'
            },
            {
                platform: 'win32',
                arch: 'x64',
                extension: '.zip',
                sha256: '8CB153E540ED9D9A7FE00CB3D1FE94A0ED089B574FD02E816AB2BB066F4C4F89',
                url: 'https://github.com/PowerShell/PowerShell/releases/download/v6.0.2/PowerShell-6.0.2-win-x64.zip',
                bin: 'pwsh.exe'
            },
            {
                platform: 'win32',
                arch: 'ia32',
                extension: '.zip',
                sha256: '87048B0A2DBD56AA8FE1F92DDB7D7BBF8E904F8D54EE2A62443C7B31AE9E55F8',
                url: 'https://github.com/PowerShell/PowerShell/releases/download/v6.0.2/PowerShell-6.0.2-win-x86.zip',
                bin: 'pwsh.exe'
            }
        ]
    },
    {
        version: '6.0.0-rc.2',
        versionOutput: 'PowerShell v6.0.0-rc.2',
        isPrerelease: true,
        builds: [
            {
                platform: 'linux',
                arch: 'x64',
                extension: '.tar.gz',
                sha256: 'D5E9389A1FBB275AC2EDD98A28A3D57AC174EE36B211BD34442653E830AE53BE',
                url: 'https://github.com/PowerShell/PowerShell/releases/download/v6.0.0-rc.2/powershell-6.0.0-rc.2-linux-x64.tar.gz',
                bin: 'pwsh'
            },
            {
                platform: 'darwin',
                arch: 'x64',
                extension: '.tar.gz',
                sha256: '1615D48FD665FBFD758F86A31CC078513736245F529A654B02353838EF06D505',
                url: 'https://github.com/PowerShell/PowerShell/releases/download/v6.0.0-rc.2/powershell-6.0.0-rc.2-osx-x64.tar.gz',
                bin: 'pwsh'
            },
            {
                platform: 'linux',
                arch: 'arm',
                extension: '.tar.gz',
                sha256: '4A5D1012FF1FEF82B29A6BDBC14B40B5481D94D63CA71F889F0BDF1E18066BED',
                url: 'https://github.com/PowerShell/PowerShell/releases/download/v6.0.0-rc.2/powershell-6.0.0-rc.2-linux-arm32.tar.gz',
                bin: 'pwsh'
            },
            {
                platform: 'win32',
                arch: 'x64',
                extension: '.zip',
                sha256: 'D225B274923E554E14E4B64EA63E470F44ACF11B050C8C12AFDFD7E54677C443',
                url: 'https://github.com/PowerShell/PowerShell/releases/download/v6.0.0-rc.2/PowerShell-6.0.0-rc.2-win-x64.zip',
                bin: 'pwsh.exe'
            },
            {
                platform: 'win32',
                arch: 'ia32',
                extension: '.zip',
                sha256: 'D47FB1B7067FC720B9D44B17563FE2232CDC52F90F97B0E84DB1EB90A866AF19',
                url: 'https://github.com/PowerShell/PowerShell/releases/download/v6.0.0-rc.2/PowerShell-6.0.0-rc.2-win-x86.zip',
                bin: 'pwsh.exe'
            }
        ]
    }
];
