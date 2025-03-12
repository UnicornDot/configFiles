Add-Type -TypeDefinition @"
    using System;
    using System.Runtime.InteropServices;
    public class WinAPI {
        [DllImport("user32.dll")]
        public static extern void keybd_event(byte bVk, byte bScan, uint dwFlags, UIntPtr dwExtraInfo);
    }
"@

# 模拟按下 Win 键
[WinAPI]::keybd_event(0x5B, 0, 0, [UIntPtr]::Zero)

# 模拟按下 N 键
[WinAPI]::keybd_event(0x4E, 0, 0, [UIntPtr]::Zero)

# 模拟释放 N 键
[WinAPI]::keybd_event(0x4E, 0, 0x0002, [UIntPtr]::Zero)

# 模拟释放 Win 键
[WinAPI]::keybd_event(0x5B, 0, 0x0002, [UIntPtr]::Zero)
