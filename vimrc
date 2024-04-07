syntax on
set mouse=a
set ttyfast
set nowrap 
set autochdir
set lazyredraw
set visualbell
set virtualedit=block
set clipboard=unnamedplus
set completeopt=longest,noinsert,menuone,noselect,preview
set viewoptions=cursor,folds,slash,unix

set list
set listchars=tab:│→,extends:⟩,precedes:⟨,trail:·,nbsp:␣

set number
set relativenumber
set showcmd
set showmode
set wildmenu
set scrolloff=8

set foldlevel=6
set foldmethod=indent
set foldenable

set timeoutlen=300
set updatetime=100

set smartcase
set ignorecase
set incsearch
set hlsearch


set textwidth=99
set tabstop=4
set softtabstop=4
set shiftwidth=4
set expandtab
set autoindent
set smartindent
set indentexpr=


set cursorline
:highlight cursorline cterm=bold ctermbg=black

" colorschema
colorscheme zaibatsu

let mapleader=" "

imap jj <ESC>
imap jk <ESC>
inoremap <C-a> <ESC>a
inoremap <C-o> <ESC>o
inoremap <C-j> pumvisible() ? "\<C-n>" : "\<C-j>"
inoremap <C-k> pumvisible() ? "\<C-p>" : "\<C-k>"

noremap H 0
noremap L $
noremap J 5j
noremap K 5k
noremap Y y$
noremap Y "+y

noremap s <nop>

" indent
noremap < <<
noremap > >>
noremap <leader>- :lN<CR>
noremap <leader>= :lne<CR>
noremap \s :%s//g<left><left>


vnoremap <M-k> :move '<-2<CR>gv-gv'
vnoremap <M-j> :move '>+1<CR>gv-gv'

noremap <leader><CR> :nohlsearch<CR>


" windown control
noremap <C-j> <C-w>j
noremap <C-k> <C-w>k
noremap <C-h> <C-w>h
noremap <C-l> <C-w>l

" win resize
noremap <up> :resize +5<CR>
noremap <down> :resize -5<CR>
noremap <left> :vertical resize-5<CR>
noremap <right> :vertical resize+5<CR>

" change ui file tab indent rule
augroup ui
    autocmd!
    autocmd FileType javascript,typescript,css,html,xml,json,vue setlocal ai
    autocmd FileType javascript,typescript,css,html,xml,json,vue setlocal tabstop=2
    autocmd FileType javascript,typescript,css,html,xml,json,vue setlocal softtabstop=2
    autocmd FileType javascript,typescript,css,html,xml,json,vue setlocal shiftwidth=2
augroup end

" Auto change directory to current dir
au BufEnter * silent! lcd %:p:h

" Keep laest position when next enter this file
au BufReadpost * if line("'\"") > 1 && line("'\"") <= line("$") | exe "normal! g'\"" | endif

" remove trailing whitespace from Python file
au BufWritePre *.py :%s/\s\+$//e
