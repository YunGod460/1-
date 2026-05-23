export interface TutorialStep {
  instruction: string
  command?: string
  note?: string
}

export interface TutorialSection {
  title: string
  steps: TutorialStep[]
}

export interface ToolTutorial {
  prerequisites?: string[]
  sections: TutorialSection[]
  verifyCommand?: string
}

export const tutorials: Record<string, ToolTutorial> = {
  'claude-code': {
    prerequisites: ['Windows 10/11', '管理员权限'],
    sections: [
      {
        title: '安装 Node.js',
        steps: [
          { instruction: '打开 https://nodejs.org 下载 LTS 版本（左边那个）', note: '建议下载 v18 以上版本' },
          { instruction: '双击安装包，一路 Next 到底', note: '安装时勾选 "Add to PATH"' },
          { instruction: '安装完成后，打开 cmd 验证：', command: 'node -v && npm -v' },
        ],
      },
      {
        title: '安装 Git',
        steps: [
          { instruction: '打开 https://git-scm.com/download/win 下载 64-bit 版本' },
          { instruction: '双击安装，一路 Next，全部默认选项' },
          { instruction: '验证安装：', command: 'git --version' },
        ],
      },
      {
        title: '安装 Claude Code',
        steps: [
          { instruction: '打开 cmd，运行：', command: 'npm install -g @anthropic-ai/claude-code', note: '需要等 1-2 分钟下载' },
          { instruction: '安装完成后验证：', command: 'claude --version' },
        ],
      },
      {
        title: '配置 DeepSeek API（国内用户）',
        steps: [
          { instruction: '创建配置文件目录：', command: 'mkdir "%USERPROFILE%\\.claude" 2>nul' },
          { instruction: '运行以下命令自动生成配置文件：', command: 'node -e "var f=require(\'fs\'),s=process.env.USERPROFILE+\'\\\\.claude\\\\settings.json\',c={env:{ANTHROPIC_BASE_URL:\'https://api.deepseek.com/anthropic\',ANTHROPIC_AUTH_TOKEN:\'你的DeepSeekKey\',ANTHROPIC_DEFAULT_OPUS_MODEL:\'deepseek-chat\',ANTHROPIC_DEFAULT_SONNET_MODEL:\'deepseek-chat\',ANTHROPIC_DEFAULT_HAIKU_MODEL:\'deepseek-chat\',CLAUDE_CODE_SUBAGENT_MODEL:\'deepseek-chat\'},permissions:{allow:[\'Bash(npm *)\',\'Bash(git *)\',\'Bash(node *)\',\'Bash(code *)\']}};f.writeFileSync(s,JSON.stringify(c,null,2));console.log(\'OK\')"', note: '把 你的DeepSeekKey 替换成你在 platform.deepseek.com 申请的 Key' },
        ],
      },
      {
        title: '在 VS Code 中使用',
        steps: [
          { instruction: '打开 VS Code，按 Ctrl+Shift+P 打开命令面板' },
          { instruction: '输入 "Claude Code: 启动"，回车' },
          { instruction: '在终端中输入你的问题，开始编程！' },
        ],
      },
    ],
    verifyCommand: 'claude -v',
  },

  cursor: {
    prerequisites: ['Windows 10/11'],
    sections: [
      {
        title: '下载安装 Cursor',
        steps: [
          { instruction: '打开 https://cursor.com 点击下载 Windows 版' },
          { instruction: '双击安装包，安装完成后自动打开' },
          { instruction: '首次打开会提示登录，点 "Skip" 跳过或用 GitHub 登录' },
        ],
      },
      {
        title: '配置中文界面（可选）',
        steps: [
          { instruction: '按 Ctrl+Shift+X 打开扩展面板' },
          { instruction: '搜索 "Chinese Language Pack"，安装' },
          { instruction: '安装后右下角点 "Restart" 重启' },
        ],
      },
      {
        title: '配置 DeepSeek API（国内推荐）',
        steps: [
          { instruction: '按 Ctrl+Shift+P，输入 "settings.json"，打开设置文件' },
          { instruction: '在花括号里粘贴以下配置：', command: '"cursor.cpp.enableImprovedApi": true,\n"cursor.general.enableAiPreview": true,\n"cursor.aiApiBaseUrl": "https://api.deepseek.com",\n"cursor.aiApiKey": "你的DeepSeekKey"', note: '把 你的DeepSeekKey 替换成你的 Key' },
        ],
      },
      {
        title: '开始使用',
        steps: [
          { instruction: '新建或打开一个项目文件夹' },
          { instruction: '按 Ctrl+K 打开 AI 对话窗口' },
          { instruction: '输入你的需求，Cursor 会自动分析代码并给出建议' },
        ],
      },
    ],
  },

  copilot: {
    prerequisites: ['VS Code 已安装', 'GitHub 账号'],
    sections: [
      {
        title: '安装 GitHub Copilot 扩展',
        steps: [
          { instruction: '打开 VS Code，按 Ctrl+Shift+X 打开扩展面板' },
          { instruction: '搜索 "GitHub Copilot"，点击安装' },
          { instruction: '再搜索 "GitHub Copilot Chat"，也安装上' },
        ],
      },
      {
        title: '登录 GitHub 账号',
        steps: [
          { instruction: 'VS Code 右下角会出现 Copilot 图标，点它' },
          { instruction: '选择 "Sign in to GitHub"，浏览器会打开' },
          { instruction: '浏览器中点击 "Authorize"，授权完成后回 VS Code' },
        ],
      },
      {
        title: '订阅 Copilot',
        steps: [
          { instruction: '打开 https://github.com/settings/copilot 开通订阅' },
          { instruction: '选个人版（Personal），$10/月' },
          { instruction: '填写支付信息，开通即用' },
        ],
      },
      {
        title: '开始使用',
        steps: [
          { instruction: '在编辑器中直接写代码，Copilot 会自动补全（灰色提示，按 Tab 接受）' },
          { instruction: '按 Ctrl+I 打开 Copilot Chat 对话' },
          { instruction: '选中代码按 Ctrl+I 可对选中代码提问' },
        ],
      },
    ],
  },

  deepseek: {
    prerequisites: ['能上网的电脑'],
    sections: [
      {
        title: '注册 DeepSeek 账号',
        steps: [
          { instruction: '打开 https://platform.deepseek.com' },
          { instruction: '点右上角 "Sign Up"，用邮箱注册' },
          { instruction: '登录后进入控制台' },
        ],
      },
      {
        title: '获取 API Key',
        steps: [
          { instruction: '在左侧菜单点 "API Keys"' },
          { instruction: '点 "+ Create API Key"' },
          { instruction: '给 Key 起个名字（如 "claude-code"），点创建' },
          { instruction: '复制 Key 并保存好（关闭后不再显示）', note: '保存到记事本里，后面配置要用' },
        ],
      },
      {
        title: '充值（可选，新版有免费额度）',
        steps: [
          { instruction: '左侧菜单点 "Top Up" 进入充值' },
          { instruction: '首次注册一般送 500 万 token，够用很久' },
          { instruction: '如果用完了，最低充值 ¥10' },
        ],
      },
      {
        title: '测试 API',
        steps: [
          { instruction: '打开 cmd，运行以下命令测试：', command: 'curl https://api.deepseek.com/chat/completions -H "Content-Type: application/json" -H "Authorization: Bearer 你的Key" -d \'{"model":"deepseek-chat","messages":[{"role":"user","content":"你好"}],"stream":false}\'', note: '把 你的Key 替换成刚才复制的 Key' },
        ],
      },
    ],
    verifyCommand: 'curl https://api.deepseek.com/v1/models -H "Authorization: Bearer 你的Key"',
  },

  ollama: {
    prerequisites: ['Windows 10/11', '至少 8GB 内存', '20GB 硬盘空间'],
    sections: [
      {
        title: '下载安装 Ollama',
        steps: [
          { instruction: '打开 https://ollama.com/download/Windows 下载安装包' },
          { instruction: '双击安装，一路 Next' },
          { instruction: '安装完成后，右下角任务栏会有 Ollama 图标（小羊驼）' },
        ],
      },
      {
        title: '下载运行模型',
        steps: [
          { instruction: '打开 cmd，运行以下命令下载模型（选一个就行）：', command: 'ollama pull deepseek-r1:7b', note: '7B 模型约 4GB，下载需要几分钟' },
          { instruction: '下载完成后运行模型：', command: 'ollama run deepseek-r1:7b' },
          { instruction: '看到 ">>>" 提示符后，直接输入问题即可对话' },
        ],
      },
      {
        title: '下载其他推荐模型',
        steps: [
          { instruction: 'Qwen2.5（阿里通义，中文强）：', command: 'ollama pull qwen2.5:7b' },
          { instruction: 'Llama 3.1（Meta 通用模型）：', command: 'ollama pull llama3.1:8b' },
          { instruction: '查看已下载的模型列表：', command: 'ollama list' },
        ],
      },
      {
        title: '配置 OpenAI 兼容 API',
        steps: [
          { instruction: 'Ollama 默认在本地提供 API 服务，地址是：', command: 'http://localhost:11434' },
          { instruction: '测试 API 是否正常：', command: 'curl http://localhost:11434/api/tags' },
          { instruction: '在其他工具中配置 API 地址为 http://localhost:11434/v1，即可使用本地模型' },
        ],
      },
    ],
    verifyCommand: 'ollama list',
  },

  dify: {
    prerequisites: ['Windows 10/11', '已安装 Docker Desktop'],
    sections: [
      {
        title: '安装 Docker Desktop（如果没有）',
        steps: [
          { instruction: '打开 https://www.docker.com/products/docker-desktop/ 下载' },
          { instruction: '双击安装，重启电脑' },
          { instruction: '打开 Docker Desktop，等待右下角显示 "Engine running"' },
        ],
      },
      {
        title: '一键部署 Dify',
        steps: [
          { instruction: '打开 cmd，运行：', command: 'git clone https://github.com/langgenius/dify.git' },
          { instruction: '进入 Dify 目录：', command: 'cd dify/docker' },
          { instruction: '复制环境配置：', command: 'cp .env.example .env' },
          { instruction: '启动 Dify（需要等几分钟）：', command: 'docker compose up -d' },
        ],
      },
      {
        title: '访问 Dify',
        steps: [
          { instruction: '打开浏览器，访问 http://localhost:3000' },
          { instruction: '点击 "注册"，创建管理员账号' },
          { instruction: '登录后进入工作台' },
        ],
      },
      {
        title: '配置模型',
        steps: [
          { instruction: '点右上角头像 → "设置" → "模型供应商"' },
          { instruction: '找到 DeepSeek，点 "添加模型"' },
          { instruction: '填入 API Key，保存' },
          { instruction: '现在可以开始创建你的第一个 AI 应用了！' },
        ],
      },
    ],
  },

  coze: {
    prerequisites: ['能上网的电脑', '手机号（注册用）'],
    sections: [
      {
        title: '注册 Coze',
        steps: [
          { instruction: '打开 https://www.coze.cn' },
          { instruction: '点右上角 "登录"，用手机号注册' },
          { instruction: '登录后进入工作台' },
        ],
      },
      {
        title: '创建第一个 Bot',
        steps: [
          { instruction: '点左侧 "+" 或 "创建 Bot"' },
          { instruction: '输入 Bot 名称（如 "客服小助手"）' },
          { instruction: '在 "人设与回复逻辑" 中输入 Bot 的角色设定', note: '例如："你是一个友好的客服助手，回答用户问题简洁明了"' },
          { instruction: '点 "优化" 让 AI 自动优化人设' },
        ],
      },
      {
        title: '添加技能',
        steps: [
          { instruction: '在 "技能" 区域，可以添加：知识库、插件、工作流' },
          { instruction: '点 "知识库" → "新建知识库"，上传文档或输入文本' },
          { instruction: '点 "插件" 可以添加搜索、图片等功能' },
        ],
      },
      {
        title: '发布 Bot',
        steps: [
          { instruction: '右上角点 "发布"' },
          { instruction: '可以选择发布到：微信客服、飞书、API 等方式' },
          { instruction: '发布后获得 API 或分享链接，别人就能用了' },
        ],
      },
    ],
  },

  openclaw: {
    prerequisites: ['Node.js 18+', 'Git'],
    sections: [
      {
        title: '克隆项目',
        steps: [
          { instruction: '打开 cmd，运行：', command: 'git clone https://github.com/openclaw/openclaw.git' },
          { instruction: '进入目录：', command: 'cd openclaw' },
        ],
      },
      {
        title: '安装依赖',
        steps: [
          { instruction: '安装项目依赖：', command: 'npm install' },
          { instruction: '等待安装完成（约 1-2 分钟）' },
        ],
      },
      {
        title: '配置环境变量',
        steps: [
          { instruction: '复制环境配置模板：', command: 'cp .env.example .env' },
          { instruction: '用记事本打开 .env 文件，填入你的 API Key：', command: 'notepad .env' },
          { instruction: '找到 OPENAI_API_KEY= 或对应的字段，填入你的 Key' },
        ],
      },
      {
        title: '启动服务',
        steps: [
          { instruction: '运行：', command: 'npm run dev' },
          { instruction: '打开浏览器访问 http://localhost:3000' },
        ],
      },
    ],
  },

  codex: {
    prerequisites: ['Node.js 18+', 'OpenAI API Key'],
    sections: [
      {
        title: '安装 Codex CLI',
        steps: [
          { instruction: '打开 cmd，运行：', command: 'npm install -g @openai/codex' },
          { instruction: '验证安装：', command: 'codex --version' },
        ],
      },
      {
        title: '配置 API Key',
        steps: [
          { instruction: '设置环境变量：', command: 'set OPENAI_API_KEY=你的OpenAIKey', note: '把 你的OpenAIKey 替换成你在 platform.openai.com 申请的 Key' },
          { instruction: '或者创建 .env 文件：', command: 'echo OPENAI_API_KEY=你的OpenAIKey > .env' },
        ],
      },
      {
        title: '开始使用',
        steps: [
          { instruction: '在项目目录中运行：', command: 'codex' },
          { instruction: '输入你的需求，Codex 会自动分析、编写代码', note: '第一次运行需要授权终端权限' },
          { instruction: 'Codex 会展示它将要执行的操作，按 y 确认执行' },
        ],
      },
      {
        title: '常用命令',
        steps: [
          { instruction: '查看帮助：', command: 'codex --help' },
          { instruction: '指定模型：', command: 'codex --model gpt-4o' },
          { instruction: '指定项目目录：', command: 'codex --path ./my-project' },
        ],
      },
    ],
    verifyCommand: 'codex --version',
  },

  windsurf: {
    prerequisites: ['Windows 10/11'],
    sections: [
      {
        title: '下载安装 Windsurf',
        steps: [
          { instruction: '打开 https://codeium.com/windsurf/download 下载 Windows 版' },
          { instruction: '双击安装，安装完成后自动打开' },
          { instruction: '首次打开会提示创建账号，用邮箱注册或 Google 登录' },
        ],
      },
      {
        title: '配置中文界面',
        steps: [
          { instruction: '按 Ctrl+Shift+X 打开扩展面板' },
          { instruction: '搜索 "Chinese Language Pack"，安装' },
          { instruction: '安装后重启 Windsurf' },
        ],
      },
      {
        title: '配置国内 API（可选）',
        steps: [
          { instruction: '按 Ctrl+Shift+P，打开设置（Preferences: Open Settings JSON）' },
          { instruction: '添加以下配置：', command: '{\n  "windsurf.apiBaseUrl": "https://api.deepseek.com",\n  "windsurf.apiKey": "你的DeepSeekKey"\n}' },
        ],
      },
      {
        title: '开始使用',
        steps: [
          { instruction: '打开项目文件夹' },
          { instruction: '按 Ctrl+L 打开 AI 对话' },
          { instruction: 'Windsurf 内置了代码补全、对话、Debug 等功能' },
        ],
      },
    ],
  },

  crewai: {
    prerequisites: ['Python 3.10+', 'pip（Python 包管理器）'],
    sections: [
      {
        title: '安装 Python（如果没有）',
        steps: [
          { instruction: '打开 https://www.python.org/downloads/ 下载 Python 3.10+', note: '建议下载 3.10 或 3.11 版本' },
          { instruction: '双击安装，**务必勾选** "Add Python to PATH"' },
          { instruction: '验证安装：', command: 'python --version && pip --version' },
        ],
      },
      {
        title: '安装 CrewAI',
        steps: [
          { instruction: '打开 cmd，运行：', command: 'pip install crewai' },
          { instruction: '安装 CrewAI 工具包：', command: 'pip install crewai[tools]' },
          { instruction: '验证安装：', command: 'crewai --version' },
        ],
      },
      {
        title: '创建第一个项目',
        steps: [
          { instruction: '创建新项目：', command: 'crewai create my_first_crew' },
          { instruction: '进入项目目录：', command: 'cd my_first_crew' },
          { instruction: '查看项目结构：', command: 'dir /b' },
        ],
      },
      {
        title: '配置 API Key',
        steps: [
          { instruction: '复制环境配置：', command: 'copy .env.example .env' },
          { instruction: '编辑 .env 文件，填入你的 API Key：', command: 'notepad .env', note: '填入 OPENAI_API_KEY=你的Key' },
        ],
      },
      {
        title: '运行项目',
        steps: [
          { instruction: '运行你的第一个 AI 团队：', command: 'crewai run' },
          { instruction: 'CrewAI 会自动执行预设的任务，多个 AI Agent 协同工作' },
        ],
      },
    ],
  },

  'auto-gpt': {
    prerequisites: ['Python 3.10+', 'Git', 'OpenAI API Key'],
    sections: [
      {
        title: '克隆 AutoGPT',
        steps: [
          { instruction: '打开 cmd，运行：', command: 'git clone https://github.com/Significant-Gravitas/AutoGPT.git' },
          { instruction: '进入目录：', command: 'cd AutoGPT' },
        ],
      },
      {
        title: '安装依赖',
        steps: [
          { instruction: '安装所需包：', command: 'pip install -r requirements.txt' },
          { instruction: '等待安装完成（约 2-3 分钟）' },
        ],
      },
      {
        title: '配置 API Key',
        steps: [
          { instruction: '复制配置模板：', command: 'cp .env.template .env' },
          { instruction: '编辑 .env 文件：', command: 'notepad .env' },
          { instruction: '找到 OPENAI_API_KEY=，填入你的 Key' },
          { instruction: '保存关闭' },
        ],
      },
      {
        title: '启动 AutoGPT',
        steps: [
          { instruction: '运行：', command: 'python -m autogpt' },
          { instruction: '输入你的目标（如 "帮我研究一下 AI Agent 的最新发展"）' },
          { instruction: 'AutoGPT 会自动分解任务、执行、迭代直到完成' },
        ],
      },
    ],
  },
}
