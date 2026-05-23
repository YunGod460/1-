import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { tools } from '../data/tools'
import { tutorials } from '../data/tutorials'
import { useState } from 'react'

const toolFeatures: Record<string, string[]> = {
  'claude-code': ['终端中直接对话编程', '支持写代码、改 bug、重构', '理解整个项目上下文', 'VS Code 深度集成', 'Anthropic 官方出品'],
  cursor: ['内置 AI 对话，选中代码即可提问', '支持 Claude / GPT-4 / DeepSeek 等多模型', '代码补全 + 重构 + Debug', '兼容 VS Code 扩展和主题', '国内流畅使用'],
  copilot: ['实时代码补全，Tab 即用', '支持所有主流编程语言', '聊天模式对话式编程', '代码审查建议', '全球用户最多的 AI 编程工具'],
  codex: ['OpenAI 官方 CLI 工具', '终端中对话式编程', '自动写代码和执行命令', '支持 GPT-4o / o1 等模型', '自主 Debug 和修复'],
  windsurf: ['AI-first IDE，免费使用', '智能代码补全（免费）', 'Agent 模式自主编程', '内置对话和 Debug', '国内可直接使用'],
  deepseek: ['国产模型，网络稳定', 'API 价格极低（GPT 的 1/50）', '中文理解能力强', '支持 Claude Code 等工具接入', '开源可本地部署'],
  ollama: ['本地运行，无需联网', '支持几十种开源模型', '命令行操作简单', '提供 OpenAI 兼容 API', '数据100%本地安全'],
  dify: ['可视化 Prompt 编排', '内置 RAG 知识库', '支持多种模型接入', '可视化工作流', '支持 API 发布'],
  coze: ['可视化 Bot 搭建，零代码', '内置知识库和插件', '支持工作流自动化', '可发布到微信/飞书', '国内直接免费使用'],
  openclaw: ['开源免费，可自部署', '多工具调用', '自主决策和任务规划', '灵活插件系统', '适合复杂工作流'],
  crewai: ['多 Agent 角色分工', '任务自动编排', '支持自定义工具', 'Python 生态集成', '适合复杂任务协作'],
  'auto-gpt': ['给定目标自动执行', '自主分解任务', '迭代优化结果', '支持文件操作和网络', '完全无人干预'],
}

const toolLinks: Record<string, { label: string; url: string }[]> = {
  'claude-code': [{ label: 'npm 包地址', url: 'https://www.npmjs.com/package/@anthropic-ai/claude-code' }],
  cursor: [{ label: '官网下载', url: 'https://cursor.com' }, { label: '官方文档', url: 'https://docs.cursor.com' }],
  copilot: [{ label: 'VS Code 扩展', url: 'https://marketplace.visualstudio.com/items?itemName=GitHub.copilot' }, { label: '官方文档', url: 'https://docs.github.com/copilot' }],
  codex: [{ label: 'OpenAI Codex 介绍', url: 'https://openai.com/index/introducing-codex-cli/' }],
  windsurf: [{ label: '官网下载', url: 'https://codeium.com/windsurf/download' }],
  deepseek: [{ label: 'DeepSeek 平台', url: 'https://platform.deepseek.com' }, { label: 'API 文档', url: 'https://api-docs.deepseek.com' }],
  ollama: [{ label: '官网下载', url: 'https://ollama.com' }, { label: '模型库', url: 'https://ollama.com/library' }],
  dify: [{ label: 'GitHub', url: 'https://github.com/langgenius/dify' }, { label: '官方文档', url: 'https://docs.dify.ai' }],
  coze: [{ label: 'Coze 官网', url: 'https://www.coze.cn' }, { label: '使用教程', url: 'https://www.coze.cn/docs' }],
  openclaw: [{ label: 'GitHub 仓库', url: '#' }],
  crewai: [{ label: 'GitHub 仓库', url: 'https://github.com/crewAIInc/crewAI' }, { label: '官方文档', url: 'https://docs.crewai.com' }],
  'auto-gpt': [{ label: 'GitHub 仓库', url: 'https://github.com/Significant-Gravitas/AutoGPT' }],
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)
      }}
      className="shrink-0 px-3 py-1 text-xs bg-surface-3 hover:bg-surface-3/80 border border-white/10 rounded-lg text-text hover:text-text-heading transition-all"
    >
      {copied ? '已复制 ✓' : '复制命令'}
    </button>
  )
}

export default function ToolPage() {
  const { toolId } = useParams<{ toolId: string }>()
  const tool = tools.find((t) => t.id === toolId)
  const tutorial = toolId ? tutorials[toolId] : undefined
  const features = toolId ? toolFeatures[toolId] : undefined
  const links = toolId ? toolLinks[toolId] : undefined

  if (!tool) {
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
        <Link to="/" className="inline-flex items-center gap-1 text-text hover:text-text-heading text-sm mb-8 transition-colors">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          返回首页
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          {/* Header */}
          <div className="flex items-start gap-4 mb-8">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl shrink-0" style={{ backgroundColor: `${tool.color}20` }}>
              {tool.icon}
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-text-heading mb-2">{tool.name}</h1>
              <span className="inline-block text-xs px-2 py-0.5 rounded-full" style={{ color: tool.color, backgroundColor: `${tool.color}15` }}>
                {tool.category}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-text text-lg leading-relaxed mb-10">{tool.description}</p>

          {/* Features */}
          {features && (
            <>
              <h2 className="text-xl font-bold text-text-heading mb-4">主要功能</h2>
              <ul className="space-y-2 mb-10">
                {features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-text">
                    <svg className="w-4 h-4 mt-1 text-primary-light shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </>
          )}

          {/* Tutorial */}
          {tutorial && (
            <>
              <h2 className="text-2xl font-bold text-text-heading mb-6">
                📖 傻瓜式安装教程
                <span className="text-sm font-normal text-text ml-3">复制命令 → 粘贴运行 → 搞定</span>
              </h2>

              {/* Prerequisites */}
              {tutorial.prerequisites && (
                <div className="bg-surface-2 border border-yellow-500/20 rounded-xl p-4 mb-6">
                  <p className="text-yellow-400 text-sm font-medium mb-2">⚠️ 准备工作</p>
                  <ul className="space-y-1">
                    {tutorial.prerequisites.map((p, i) => (
                      <li key={i} className="text-text text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/50 shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Steps */}
              <div className="space-y-8">
                {tutorial.sections.map((section, si) => (
                  <div key={si} className="bg-surface-2 border border-white/5 rounded-xl overflow-hidden">
                    <div className="px-6 py-4 border-b border-white/5 bg-white/[0.02]">
                      <h3 className="text-text-heading font-semibold">
                        <span className="text-primary-light mr-2">步骤 {si + 1}</span>
                        {section.title}
                      </h3>
                    </div>
                    <div className="px-6 py-4 space-y-4">
                      {section.steps.map((step, ti) => (
                        <div key={ti} className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-primary/20 text-primary-light text-xs flex items-center justify-center shrink-0 mt-0.5 font-medium">
                            {ti + 1}
                          </span>
                          <div className="flex-1 min-w-0">
                            <p className="text-text text-sm mb-2">{step.instruction}</p>
                            {step.command && (
                              <div className="flex items-start gap-2 bg-surface-3 rounded-lg p-3 border border-white/5">
                                <pre className="flex-1 text-xs text-text-heading font-mono whitespace-pre-wrap overflow-x-auto">{step.command}</pre>
                                <CopyButton text={step.command} />
                              </div>
                            )}
                            {step.note && (
                              <p className="text-xs text-yellow-400/80 mt-1">💡 {step.note}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Verify */}
              {tutorial.verifyCommand && (
                <div className="mt-6 bg-green-500/5 border border-green-500/20 rounded-xl p-4">
                  <p className="text-green-400 text-sm font-medium mb-2">✅ 验证安装</p>
                  <div className="flex items-start gap-2 bg-surface-3 rounded-lg p-3 border border-white/5">
                    <pre className="flex-1 text-xs text-text-heading font-mono">{tutorial.verifyCommand}</pre>
                    <CopyButton text={tutorial.verifyCommand} />
                  </div>
                  <p className="text-xs text-text mt-2">运行上面的命令，如果显示版本号说明安装成功！</p>
                </div>
              )}
            </>
          )}

          {/* Links */}
          {links && (
            <div className="mt-10 flex flex-wrap gap-3">
              {links.map((link) => (
                <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-surface-2 border border-white/5 rounded-lg text-sm text-text hover:text-text-heading hover:border-primary/30 transition-all"
                >
                  {link.label}
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ))}
            </div>
          )}

          {/* Bottom CTA */}
          <div className="mt-16 bg-surface-2 border border-primary/10 rounded-xl p-8 text-center">
            <p className="text-text-heading font-medium mb-2">跟着教程装不上？</p>
            <p className="text-text text-sm mb-4">提供远程协助服务，我直接帮你装好调通</p>
            <Link to="/claude-code" className="inline-block px-6 py-2.5 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg text-sm transition-all">
              查看服务详情
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
