# yaziline.yazi

Simple lualine-like status line for yazi.

Read more about features and configuration [here](#features).

![preview](https://github.com/llanosrocas/yaziline.yazi/blob/master/.github/images/preview.png)

## Requirements

- yazi version >= [26.1.22](https://github.com/sxyazi/yazi/releases/tag/v26.1.22).
- Font with symbol support. For example [Nerd Fonts](https://www.nerdfonts.com/).

## Compatibility

To keep the plugin up to date, there are two branches: `main` and `nightly`.
The `main` branch follows major yazi releases, while `nightly` is linked to specific yazi commits or changes.

This setup allows shipping stable versions on time, while giving early access to "cutting-edge" changes. See matrix below.

<details close>
<summary>Compatibility matrix</summary>

|                                  yaziline                                  | yazi                                                                                      |
| :------------------------------------------------------------------------: | ----------------------------------------------------------------------------------------- |
| [v2.5.2](https://github.com/llanosrocas/yaziline.yazi/releases/tag/v2.5.2) | [v26.1.22](https://github.com/sxyazi/yazi/releases/tag/v26.1.22)                          |
| [v2.5.2](https://github.com/llanosrocas/yaziline.yazi/releases/tag/v2.5.2) | [2f66561](https://github.com/sxyazi/yazi/commit/2f66561a8251f8788b2b0fd366af90555ecafc86) |
| [v2.5.2](https://github.com/llanosrocas/yaziline.yazi/releases/tag/v2.5.2) | [6cfa92f](https://github.com/sxyazi/yazi/commit/6cfa92f11205d212155579b5b76d4cbabe723829) |
| [v2.5.2](https://github.com/llanosrocas/yaziline.yazi/releases/tag/v2.5.2) | [917e1f5](https://github.com/sxyazi/yazi/commit/917e1f54a10445f2e25147c4b81a3c77d8233632) |
| [v2.5.1](https://github.com/llanosrocas/yaziline.yazi/releases/tag/v2.5.1) | [917e1f5](https://github.com/sxyazi/yazi/commit/917e1f54a10445f2e25147c4b81a3c77d8233632) |
| [v2.5.0](https://github.com/llanosrocas/yaziline.yazi/releases/tag/v2.5.0) | [v25.5.28](https://github.com/sxyazi/yazi/releases/tag/v25.5.28)                          |
| [v2.4.0](https://github.com/llanosrocas/yaziline.yazi/releases/tag/v2.4.0) | [v25.4.8](https://github.com/sxyazi/yazi/releases/tag/v25.4.8)                            |

</details>

## Installation

```sh
ya pkg add llanosrocas/yaziline
```

Or manually copy `main.lua` to the `~/.config/yazi/plugins/yaziline.yazi/main.lua`

## Usage

Add this to your `~/.config/yazi/init.lua`:

```lua
require("yaziline"):setup()
```

Optionally, configure line:

```lua
require("yaziline"):setup({
  color = "#98c379", -- main theme color
  secondary_color = "#5A6078", -- secondary color
  default_files_color = "darkgray", -- color of the file counter when it's inactive
  selected_files_color = "white",
  yanked_files_color = "green",
  cut_files_color = "red",

  separator_style = "angly", -- "angly" | "curvy" | "liney" | "empty"
  separator_open = "",
  separator_close = "",
  separator_open_thin = "",
  separator_close_thin = "",
  separator_head = "",
  separator_tail = "",

  select_symbol = "",
  yank_symbol = "󰆐",

  filename_max_length = 24, -- truncate when filename > 24
  filename_truncate_length = 6, -- leave 6 chars on both sides
  filename_truncate_separator = "..." -- the separator of the truncated filename
})
```

```
 MODE  size  long_file...name.md  S 0 Y 0
|  |   |   |  |           |         | |   |
|  |   |   |  |           |         | |   └─── yank_symbol
|  |   |   |  |           |         | └─────── select_symbol
|  |   |   |  |           |         └───────── separator_close_thin
|  |   |   |  |           └─────────────────── filename_truncate_separator
|  |   |   |  └─────────────────────────────── separator_close
|  |   |   └────────────────────────────────── secondary_color
|  |   └────────────────────────────────────── separator_close
|  └────────────────────────────────────────── color
└───────────────────────────────────────────── separator_head
```

## Features

### Preconfigured separators

Choose your style:

- `angly`
  ![angly](https://github.com/llanosrocas/yaziline.yazi/blob/master/.github/images/angly.png)
- `curvy`
  ![curvy](https://github.com/llanosrocas/yaziline.yazi/blob/master/.github/images/curvy.png)
- `liney`
  ![liney](https://github.com/llanosrocas/yaziline.yazi/blob/master/.github/images/liney.png)
- `empty`
  ![empty](https://github.com/llanosrocas/yaziline.yazi/blob/master/.github/images/empty.png)

### Separator customization

You can provide your own symbols for separators combined with preconfigured separators. For example:

```lua
require("yaziline"):setup({
  -- Optinal config
  separator_style = "angly", -- preconfigured style
  separator_open = "", -- instead of 
  separator_close = "", -- instead of 
  separator_open_thin = "", -- change to anything
  separator_close_thin = "", -- change to anything
  separator_head = "", -- to match the style
  separator_tail = "" -- to match the style
})
```

![empty](https://github.com/llanosrocas/yaziline.yazi/blob/master/.github/images/separator-combination.png)

_You can find more symbols [here](https://www.nerdfonts.com/cheat-sheet)_

### File actions icons

You can provide your own symbols for `select` and `yank`. For example:

```lua
require("yaziline"):setup({
  -- Optinal config
  select_symbol = "", -- "S" by default
  yank_symbol = "󰆐" -- "Y" by default
})
```

![empty](https://github.com/llanosrocas/yaziline.yazi/blob/master/.github/images/file-actions.png)

_You can find more symbols [here](https://www.nerdfonts.com/cheat-sheet)_

### Colors and font weight

By default yaziline uses color values from your `theme.toml` (or flavor) but you can set custom colors in the `init.lua`:

```lua
require("yaziline"):setup({
  color = "#98c379",
  default_files_color = "darkgray",
  selected_files_color = "white",
  yanked_files_color = "green",
  cut_files_color = "red",
})
```

For example, here is how my line looks like:

![preview-2](https://github.com/llanosrocas/yaziline.yazi/blob/master/.github/images/preview-2.png)

### Selected and Yanked Counter

Displays the number of selected ('S') and yanked ('Y') files on the left. If files are cut, the yank counter changes color, since its `yank --cut` under the hood.

### Truncated filename

Displays the truncated filename on the left, which is useful for smaller windows or long filenames. By default, it's 24 characters with trimming to 12 (6 + 6). Adjust in the `setup`.

```lua
require("yaziline"):setup({
  filename_max_length = 24, -- truncate when filename > 24
  filename_truncate_length = 6, -- leave 6 chars on both sides
  filename_truncate_separator = "..." -- the separator of the truncated filename
})
```

### ISO Date for 'Modified'

On the right, you'll find the date and time the file was modified, formatted in an [ISO](https://en.wikipedia.org/wiki/ISO_8601)-like string for universal date representation. Adjust in the `Status:date` function.

## Credits

- [yazi source code](https://github.com/sxyazi/yazi)
- [yatline.yazi](https://github.com/imsi32/yatline.yazi/tree/main)
- [lualine.nvim](https://github.com/nvim-lualine/lualine.nvim)
