import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { tools } from '../data/tools'

const pageContent: Record<string, { intro: string; features: string[]; install: string; links: { label: string; url: string }[] }> = {
  cursor: {
    intro: 'Cursor 是一款 AI-first 的代码编辑器，基于 VS Code 构建，内置了 ChatGPT 功能。支持 Claude、GPT-4 等多种模型，能理解整个代码库上下文，适合各种规模的项目。',
    features: [
      '内置 AI 对话，选中代码即可提问',
      '支持 Claude / GPT-4 / DeepSeek 等多模型切换',
      '理解整个项目的代码上下文',
      '代码补全、重构、Debug 一条龙',
      '兼容 VS Code 扩展和主题',
    ],
    install: `1. 打开 https://cursor.com 下载安装包
2. 安装后打开 Cursor
3. 按 Ctrl+Shift+P → Preferences: Open Settings (JSON)
4. 添加 API 配置（国内用户可使用 DeepSeek API 中转）`,
    links: [
      { label: '官网下载', url: 'https://cursor.com' },
      { label: '官方文档', url: 'https://docs.cursor.com' },
    ],
  },
  copilot: {
    intro: 'GitHub Copilot 是微软和 OpenAI 联合推出的 AI 编程助手，深度集成在 VS Code 中，提供实时代码补全和建议，是目前用户最多的 AI 编程工具之一。',
    features: [
      '实时代码补全，Tab 即用',
      '支持多种编程语言',
      '聊天模式，直接对话式编程',
      '代码审查建议',
      '终端命令建议',
    ],
    install: `1. 打开 VS Code → 扩展 → 搜索 GitHub Copilot
2. 安装 GitHub Copilot 和 GitHub Copilot Chat
3. 点击状态栏的 Copilot 图标登录 GitHub 账号
4. 需要付费订阅（¥70/月 或 ¥1400/年）
5. 国内正常使用，无需科学上网`,
    links: [
      { label: 'VS Code 扩展', url: 'https://marketplace.visualstudio.com/items?itemName=GitHub.copilot' },
      { label: '官方文档', url: 'https://docs.github.com/copilot' },
    ],
  },
  deepseek: {
    intro: 'DeepSeek 是深度求索推出的国产大模型，API 价格极低（约为 GPT-4 的 1/50），中文能力出色，是 Claude Code、Cursor 等工具的 API 后端首选。',
    features: [
      '国产模型，网络稳定',
      'API 价格极低，适合日常使用',
      '中文理解能力强',
      '支持 Claude Code、Cursor 等工具接入',
      '开源模型可本地部署',
    ],
    install: `1. 打开 https://platform.deepseek.com 注册账号
2. 登录后进入 API Keys 页面
3. 点"创建 API Key"，复制保存
4. 在 Claude Code 或 Cursor 中配置：
   ANTHROPIC_BASE_URL=https://api.deepseek.com/anthropic
   ANTHROPIC_AUTH_TOKEN=你的 Key`,
    links: [
      { label: 'DeepSeek 平台', url: 'https://platform.deepseek.com' },
      { label: 'API 文档', url: 'https://api-docs.deepseek.com' },
    ],
  },
  ollama: {
    intro: 'Ollama 是一个本地运行大模型的工具，支持 Llama、DeepSeek、Qwen、Mistral 等主流模型。所有数据在本地运行，安全隐私，无需联网。',
    features: [
      '本地运行，无需联网',
      '支持 Llama、DeepSeek、Qwen 等几十种模型',
      '命令行操作，简单易用',
      '提供 OpenAI 兼容 API',
      '适合隐私敏感场景',
    ],
    install: `1. 打开 https://ollama.com 下载 Windows 版
2. 安装完成后打开命令行
3. 运行 ollama pull deepseek-r1:7b 下载模型
4. 运行 ollama run deepseek-r1:7b 开始对话
5. 也可使用 OpenAI 兼容 API 接入其他工具`,
    links: [
      { label: '官网下载', url: 'https://ollama.com' },
      { label: '模型库', url: 'https://ollama.com/library' },
    ],
  },
  dify: {
    intro: 'Dify 是一个开源 LLM 应用开发平台，提供可视化的工作流编排、RAG 管道、Agent 能力。你可以像搭积木一样构建自己的 AI 应用，无需从零开始。',
    features: [
      '可视化 Prompt 编排',
      '内置 RAG 知识库',
      '支持多种模型接入',
      '可视化工作流',
      '支持 API 发布',
    ],
    install: `1. 确保已安装 Docker Desktop
2. 打开命令行执行：
   git clone https://github.com/langgenius/dify.git
   cd dify/docker
   docker compose up -d
3. 打开 http://localhost:3000 注册账号
4. 在设置中添加 DeepSeek 等模型 API`,
    links: [
      { label: 'GitHub', url: 'https://github.com/langgenius/dify' },
      { label: '官方文档', url: 'https://docs.dify.ai' },
    ],
  },
  coze: {
    intro: 'Coze（扣子）是字节跳动推出的 AI Bot 开发平台。无需编程，通过配置即可创建智能助手、客服机器人、自动化工作流等，支持发布到飞书、微信等平台。',
    features: [
      '可视化 Bot 搭建，无需代码',
      '内置知识库和插件系统',
      '支持工作流自动化',
      '可发布到微信、飞书等平台',
      '国内直接使用',
    ],
    install: `1. 打开 https://www.coze.cn 注册账号
2. 点"创建 Bot"开始搭建
3. 设置 Bot 的人设、技能、知识库
4. 测试无误后发布
5. 免费使用，无需配置 API`,
    links: [
      { label: 'Coze 官网', url: 'https://www.coze.cn' },
      { label: '使用教程', url: 'https://www.coze.cn/docs' },
    ],
  },
  openclaw: {
    intro: 'OpenClaw 是一款开源 AI Agent 框架，支持多工具调用、自主决策和任务编排。可以连接各种 API 和工具，构建复杂的自动化工作流。',
    features: [
      '开源免费，可自部署',
      '支持多工具调用',
      '自主决策和任务规划',
      '灵活的插件系统',
      '适合构建自动化工作流',
    ],
    install: `1. 确保已安装 Node.js 18+
2. 打开命令行执行：
   git clone [OpenClaw 仓库地址]
   cd openclaw
   npm install
   npm run dev
3. 打开 http://localhost:3000
4. 配置 API Key 后即可使用`,
    links: [
      { label: 'GitHub 仓库', url: '#' },
      { label: '使用文档', url: '#' },
    ],
  },
}

export default function ToolPage() {
  const { toolId } = useParams<{ toolId: string }>()
  const tool = tools.find((t) => t.id === toolId)
  const content = toolId ? pageContent[toolId] : undefined

  if (!tool || !content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-text-heading mb-4">工具未找到</h1>
          <Link to="/" className="text-primary-light hover:underline">返回首页</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back link */}
        <Link to="/" className="inline-flex items-center gap-1 text-text hover:text-text-heading text-sm mb-8 transition-colors">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          返回首页
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          {/* Header */}
          <div className="flex items-start gap-4 mb-8">
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl shrink-0"
              style={{ backgroundColor: `${tool.color}20` }}
            >
              {tool.icon}
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-text-heading mb-2">{tool.name}</h1>
              <span
                className="inline-block text-xs px-2 py-0.5 rounded-full"
                style={{ color: tool.color, backgroundColor: `${tool.color}15` }}
              >
                {tool.category}
              </span>
            </div>
          </div>

          {/* Intro */}
          <p className="text-text text-lg leading-relaxed mb-10">{content.intro}</p>

          {/* Features */}
          <h2 className="text-xl font-bold text-text-heading mb-4">主要功能</h2>
          <ul className="space-y-2 mb-10">
            {content.features.map((f, i) => (
              <li key={i} className="flex items-start gap-2 text-text">
                <svg className="w-4 h-4 mt-1 text-primary-light shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {f}
              </li>
            ))}
          </ul>

          {/* Install Guide */}
          <h2 className="text-xl font-bold text-text-heading mb-4">安装配置指南</h2>
          <div className="bg-surface-2 border border-white/5 rounded-xl p-6 mb-10">
            <pre className="text-sm text-text whitespace-pre-wrap font-sans leading-relaxed">{content.install}</pre>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3">
            {content.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-surface-2 border border-white/5 rounded-lg text-sm text-text hover:text-text-heading hover:border-primary/30 transition-all"
              >
                {link.label}
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 bg-surface-2 border border-primary/10 rounded-xl p-8 text-center">
            <p className="text-text-heading font-medium mb-2">装这个工具有困难？</p>
            <p className="text-text text-sm mb-4">提供远程协助服务，帮你全装好调通</p>
            <Link
              to="/claude-code"
              className="inline-block px-6 py-2.5 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg text-sm transition-all"
            >
              查看服务详情
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
