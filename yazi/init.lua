require("yaziline"):setup {
	separator_style = "curvy",
	select_symbol = "",
	yank_symbol = "󰆐",
	filename_max_length = 24, -- trim when filename > 24
	filename_trim_length = 6 -- trim 6 chars from both ends
}
require("starship"):setup {
	config_file = "~/.config/yazi/starship.toml",
}

-- 在状态栏中显示符号链接
Status:children_add(function(self)
	local h = self._current.hovered
	if h and h.link_to then
		return " -> " .. tostring(h.link_to)
	else
		return ""
	end
end, 3300, Status.LEFT)

-- 在状态栏中显示用户/文件组
Status:children_add(function()
	local h = cx.active.current.hovered
	if h == nil or ya.target_family() ~= "unix" then
		return ui.Line {}
	end

	return ui.Line {
		ui.Span(ya.user_name(h.cha.uid) or tostring(h.cha.uid)):fg("magenta"),
		ui.Span(":"),
		ui.Span(ya.group_name(h.cha.gid) or tostring(h.cha.gid)):fg("magenta"),
		ui.Span(" "),
	}
end, 500, Status.RIGHT)

-- 显示文件的git状态
require("git"):setup {}

require("yamb"):setup {
	cli = "fzf",
}

-- 智能进入目录或打开文件
require("smart-enter"):setup {
	open_multi = true,
}
