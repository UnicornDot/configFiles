# 📖 介绍

主要用于记录一些跨平台软件的基本配置

## 🖥️ window 窗口管理器

### 原始软件下载地址

- [glazewm安装地址](https://github.com/glzr-io/glazewm/releases/tag/v3.5.0)
- [zebar](https://github.com/glzr-io/zebar/releases/tag/v2.4.0)

__`glazewm` 最新的标准安装包已经包含了`zebar`, 如果下载的是 `standalong` 版本需要独立安装 `zebar`__


### 🦄 配置说明

- 安装之后如果软件打开会再用户目录下生成默认配置文件夹 `C:\User\unicorn\.glzr`, 使用本仓库的配置，直接将 `glzr` 拷贝到用户目录重命名为`.glzr` 覆盖生成的默认配置，
- 安装之后没有打开, 直接将本仓库`glzr` 复制到用户目录命名为`.glzr` 即可


- glazewm 配置简单说明

  - 窗口管理的快捷键(熟悉 vim 快捷键的用户适合,可以不借助鼠标完成窗口管理)
  - 详细的配置参考 `.glzr/glazewm/config.yaml`

  | 快捷键  | 作用 |  
  | ------------- | -------------- |
  | `Alt` | 辅助键, 很多功能组合键需要配合这个键触发 | 
  | `Alt + h` | 移动窗口焦点向左 |
  | `Alt + l` | 移动窗口焦点向右 |
  | `Alt + j` | 移动窗口焦点向下 |
  | `Alt + k`| 移动窗口焦点向上 | 
  | `Alt + shift + h` | 交换窗口位置向左 |
  | `Alt + shift + l` | 交换窗口位置向右 |
  | `Alt + shift + j` | 交换窗口位置向下 |
  | `Alt + shift + k` | 交换窗口位置向上 |
  | `Alt + shift + p` | 屏蔽所有快捷键设置, 再按一次恢复 |
  | `Alt + shift + {1..9}` | 移动窗口到第几个工作空间 |
  | `Alt + m` | 串口最小化 |
  | `Alt + v` | 垂直分屏和横向分屏切换 |
  | `Alt + f` | 切换窗口全屏 |
  | `Alt + t` | 切换窗口分布状态 |
  | `Alt + r` | 切换为调整窗口大小模式 |
  | `Alt + r` | 切换为调整窗口大小模式  `Esc` 退出调整大小模式 |

- zebar 是窗口渲染借助 `windows` 的 `webview` 来显示状态栏，可以自行使用各种前端组件自定义开发属于自己的 statu bar
- 参考 `.glzr/glazewm/zebar` 文件夹

## 🧰 其他软件配置

....
