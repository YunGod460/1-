export interface Tool {
  id: string
  name: string
  description: string
  category: '编程助手' | 'AI 模型' | 'AI 平台' | 'AI Agent'
  icon: string
  color: string
}

export const tools: Tool[] = [
  {
    id: 'claude-code',
    name: 'Claude Code',
    description: 'Anthropic 官方 AI 编程工具，集成在终端/VS Code 中，帮你写代码、改 bug、重构',
    category: '编程助手',
    icon: '🤖',
    color: '#8b5cf6',
  },
  {
    id: 'cursor',
    name: 'Cursor',
    description: 'AI-first 代码编辑器，内置 ChatGPT，支持多模型切换，国内可直接使用',
    category: '编程助手',
    icon: '📝',
    color: '#06b6d4',
  },
  {
    id: 'copilot',
    name: 'GitHub Copilot',
    description: '微软/OpenAI 出品的 AI 编程助手，VS Code 深度集成，代码补全能力强',
    category: '编程助手',
    icon: '🧑‍💻',
    color: '#22c55e',
  },
  {
    id: 'deepseek',
    name: 'DeepSeek',
    description: '国产最强开源大模型，API 价格低、中文能力强，适合国内开发者',
    category: 'AI 模型',
    icon: '🧠',
    color: '#f59e0b',
  },
  {
    id: 'ollama',
    name: 'Ollama',
    description: '本地运行大模型的利器，支持 Llama、DeepSeek、Qwen 等，隐私安全',
    category: 'AI 模型',
    icon: '🖥️',
    color: '#ef4444',
  },
  {
    id: 'dify',
    name: 'Dify',
    description: '开源 LLM 应用开发平台，可视化编排 AI 工作流，支持多种模型',
    category: 'AI 平台',
    icon: '⚙️',
    color: '#3b82f6',
  },
  {
    id: 'coze',
    name: 'Coze（扣子）',
    description: '字节跳动出品的 AI Bot 开发平台，无需编程即可创建智能助手',
    category: 'AI 平台',
    icon: '🧩',
    color: '#ec4899',
  },
  {
    id: 'openclaw',
    name: 'OpenClaw',
    description: '开源 AI Agent 框架，支持多工具调用、自主决策、任务编排',
    category: 'AI Agent',
    icon: '🦀',
    color: '#14b8a6',
  },
]

export const categories = [...new Set(tools.map((t) => t.category))]
