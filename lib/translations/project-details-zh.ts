/**
 * Simplified Chinese translations for the project detail pages.
 * Paths are prefixed with `projectDetails.<slug>` at usage time.
 */
export const projectDetailsZh: Record<string, string> = {
  // --- Energy Tracker ---
  "projectDetails.energy-tracker.title": "Energy Tracker – 家庭能源监控",
  "projectDetails.energy-tracker.summary":
    "家庭能源监控平台，让你看清电都用到哪里去了；当任何设备超过你设定的上限时立即提醒，并把你的用电历史转化为实用的节能建议。为真实家庭而建：打开仪表盘，所有数据都用清晰易懂的数字说明。",
  "projectDetails.energy-tracker.overview.title":
    "看清用电、及时发现问题、降低电费。",
  "projectDetails.energy-tracker.overview.steps.0.title":
    "记录每一次读数",
  "projectDetails.energy-tracker.overview.steps.0.description":
    "你的设备和传感器会把功率读数上报到平台，平台会立即校验并保存。系统预置了一个包含一周真实数据的演示家庭，打开仪表盘即可立即探索。",
  "projectDetails.energy-tracker.overview.steps.1.title":
    "替你盯住上限",
  "projectDetails.energy-tracker.overview.steps.1.description":
    "每台设备都有你设定的上限。平台会全天候将当前用电量与上限比较，一旦超限就只发送一封邮件，而不会在用电量持续偏高时反复打扰你。",
  "projectDetails.energy-tracker.overview.steps.2.title":
    "把数据转化为决策",
  "projectDetails.energy-tracker.overview.steps.2.description":
    "仪表盘按小时和按天展示全屋及每台设备的趋势，AI 会读取你的历史数据，实时流式生成可立即行动的节能建议。",
  "projectDetails.energy-tracker.architecture.description":
    "系统将工作拆分，确保繁重任务不会阻塞日常使用：读数、告警和 AI 各自独立运行，可单独扩容或重启，并统一通过一个入口访问。你的个人资料和设备存放在关系型数据库中，读数存放在时序数据库中，生成的回答会被缓存，因此同一个问题第二次可立即得到结果。",
  "projectDetails.energy-tracker.architecture.steps.0.title": "统一入口",
  "projectDetails.energy-tracker.architecture.steps.0.description":
    "所有请求都通过网关进入，网关会监控每个后端服务。如果某个部分开始故障，网关会返回清晰的降级响应，而不是让应用一直挂起。",
  "projectDetails.energy-tracker.architecture.steps.1.title":
    "一条不会丢数据的流水线",
  "projectDetails.energy-tracker.architecture.steps.1.description":
    "读数从采集端经过队列进入存储，再进入告警流程，因此突发流量能被平滑吸收，所有数据都按顺序处理。",
  "projectDetails.energy-tracker.architecture.steps.2.title":
    "快速、公平且经济实惠的 AI",
  "projectDetails.energy-tracker.architecture.steps.2.description":
    "相同问题的答案来自缓存，同时只运行少量生成任务，每位用户都有公平的额度，没人能耗尽共享配额。",
  "projectDetails.energy-tracker.engineeringFocus.title":
    "我想做对的事情。",
  "projectDetails.energy-tracker.engineeringFocus.items.0":
    "尊重用户的告警：用电量一超限就通知一次，持续超限期间保持安静",
  "projectDetails.energy-tracker.engineeringFocus.items.1":
    "将故障影响降到最低：出现问题的部分返回清晰的降级响应，应用其余部分继续工作",
  "projectDetails.energy-tracker.engineeringFocus.items.2":
    "可实时观看的 AI：节能建议逐词流式输出，无需等待一次性的大段响应",
  "projectDetails.energy-tracker.engineeringFocus.items.3":
    "保持经济实惠的 AI：缓存答案、限制并发，并为每位用户提供公平额度",

  // --- Changelog Composer ---
  "projectDetails.changelog-composer.title": "Changelog Composer",
  "projectDetails.changelog-composer.summary":
    "AI 辅助的变更日志生成器，将原始 GitHub 发布活动转化为面向开发者、QA 和业务利益相关者的定制变更日志。",
  "projectDetails.changelog-composer.overview.title":
    "从原始发布数据到面向不同受众的变更日志。",
  "projectDetails.changelog-composer.overview.steps.0.title":
    "流水线数据采集",
  "projectDetails.changelog-composer.overview.steps.0.description":
    "CI 流水线端点从 GitHub 收集原始发布和拉取请求事实，全程不调用 AI。数据会被存储并建立索引，供后续生成使用。",
  "projectDetails.changelog-composer.overview.steps.1.title":
    "多提供商生成",
  "projectDetails.changelog-composer.overview.steps.1.description":
    "基于角色的 React 仪表盘可按受众生成、编辑和恢复定制变更日志。可从 NVIDIA NIM、OpenRouter、Groq 或 Z.AI 中选择 —— 模型目录会实时探测，只提供健康的模型。生成过程通过 SSE 流式输出。",
  "projectDetails.changelog-composer.overview.steps.2.title":
    "推送到仓库",
  "projectDetails.changelog-composer.overview.steps.2.description":
    "生成的开发者变更日志会直接推送到源仓库的 CHANGELOG.md，并带有确认步骤和版本跟踪。",
  "projectDetails.changelog-composer.architecture.description":
    "Quarkus 后端提供 API 并打包 React 前端。PostgreSQL 存储变更日志版本、修订和原始发布数据。多提供商 AI 生成，具备目录健康探测和备用模型链。",
  "projectDetails.changelog-composer.architecture.steps.0.title":
    "GitHub 源连接器",
  "projectDetails.changelog-composer.architecture.steps.0.description":
    "GitHub 连接器通过 REST API 获取发布、拉取请求和提交，具备每用户 OAuth 会话以及所有路由默认拒绝的访问保护。",
  "projectDetails.changelog-composer.architecture.steps.1.title":
    "AI 生成流水线",
  "projectDetails.changelog-composer.architecture.steps.1.description":
    "变更日志生成服务通过所选提供商（NVIDIA NIM、OpenRouter、Groq、Z.AI）处理发布数据，具备输入哈希缓存、实时目录探测和模型故障转移链。",
  "projectDetails.changelog-composer.architecture.steps.2.title":
    "生产部署",
  "projectDetails.changelog-composer.architecture.steps.2.description":
    "GitHub Actions 构建不可变的 Docker 镜像，通过 SSH 将其提升到 Azure VM，并在 Caddy TLS 代理后提供服务，部署过程受健康检查控制。",
  "projectDetails.changelog-composer.engineeringFocus.title":
    "多提供商 AI 与生产级部署。",
  "projectDetails.changelog-composer.engineeringFocus.items.0":
    "多提供商 AI —— NVIDIA NIM、OpenRouter、Groq、Z.AI，具备实时目录健康探测和故障转移链",
  "projectDetails.changelog-composer.engineeringFocus.items.1":
    "SSE 流式输出 —— 生成内容逐 token 流入仪表盘",
  "projectDetails.changelog-composer.engineeringFocus.items.2":
    "用户隔离 —— GitHub OAuth 会话、默认拒绝的 API 保护、按角色划分的视图（Developer / QA / Business）",
  "projectDetails.changelog-composer.engineeringFocus.items.3":
    "修订历史 —— 每次文本修改都是新修订，可原子化恢复任意旧版本",

  // --- J Track ---
  "projectDetails.j-track.title": "J Track – 求职追踪平台",
  "projectDetails.j-track.summary":
    "全栈求职市场，采用 Next.js 前端和微服务后端，具备 Kafka 事件流水线、AI 分析和 Redis 缓存。",
  "projectDetails.j-track.overview.title":
    "采用事件驱动架构的生产级求职市场。",
  "projectDetails.j-track.overview.steps.0.title": "微服务后端",
  "projectDetails.j-track.overview.steps.0.description":
    "四个 Express 服务（Auth、User、Job、Utils）共享 Prisma 模式，并通过 REST 和 Kafka 通信。每个服务都可独立扩展和部署。",
  "projectDetails.j-track.overview.steps.1.title": "事件驱动流水线",
  "projectDetails.j-track.overview.steps.1.description":
    "事务性发件箱模式将事件发布到 Kafka，用于邮件通知和分析。消费者具备幂等性，并支持重试、DLQ 和重放。",
  "projectDetails.j-track.overview.steps.2.title": "AI 驱动的分析",
  "projectDetails.j-track.overview.steps.2.description":
    "通过 SSE 流式输出的 AI 分析使用 Groq 和 Gemini，实时提供职位匹配评分、简历分析和职业指导。",
  "projectDetails.j-track.architecture.description":
    "Next.js 前端通过 nginx 反向代理提供服务。四个后端服务分别处理认证、用户资料、职位操作和工具函数。PostgreSQL 存储数据，Redis 用于缓存和限流，Apache Kafka 处理异步事件。",
  "projectDetails.j-track.architecture.steps.0.title": "请求路由",
  "projectDetails.j-track.architecture.steps.0.description":
    "所有流量都经过 nginx，nginx 根据路径前缀将其路由到相应的后端服务。",
  "projectDetails.j-track.architecture.steps.1.title": "事务性发件箱",
  "projectDetails.j-track.architecture.steps.1.description":
    "通过发件箱表实现数据库写入和事件发布的原子性。轮询器发布事件并将其标记为已发送。",
  "projectDetails.j-track.architecture.steps.2.title": "幂等消费者",
  "projectDetails.j-track.architecture.steps.2.description":
    "消费者去重表确保至少一次投递是安全的。失败消息会以指数退避重试，然后进入 DLQ。",
  "projectDetails.j-track.engineeringFocus.title":
    "事件驱动的可靠性与生产部署。",
  "projectDetails.j-track.engineeringFocus.items.0":
    "事务性发件箱模式 —— 原子化的数据库写入和 Kafka 事件发布",
  "projectDetails.j-track.engineeringFocus.items.1":
    "幂等消费者与 DLQ 重放 —— 安全的至少一次投递",
  "projectDetails.j-track.engineeringFocus.items.2":
    "面向 AI 的 SSE 流式输出 —— 实时逐 token 传输响应",

  // --- EduPro ---
  "projectDetails.edupro.title": "EduPro – 电子学习平台",
  "projectDetails.edupro.summary":
    "多租户电子学习平台，具备课程创作、Stripe 支付、AI 学习路线和可验证的 PDF 证书。",
  "projectDetails.edupro.overview.title":
    "从报名到认证的完整端到端学习闭环。",
  "projectDetails.edupro.overview.steps.0.title": "多租户架构",
  "projectDetails.edupro.overview.steps.0.description":
    "学生、讲师和超级管理员各自拥有基于角色的访问权限。租户模型支持多个独立组织共享基础设施。",
  "projectDetails.edupro.overview.steps.1.title": "课程报名与支付",
  "projectDetails.edupro.overview.steps.1.description":
    "学生浏览公开目录，通过免费结账或 Stripe 支付报名，并使用签名 webhook 进行验证。",
  "projectDetails.edupro.overview.steps.2.title": "学习与认证",
  "projectDetails.edupro.overview.steps.2.description":
    "交互式播放器提供课程、测验和期末考试。通过后，学生可申请由服务器端生成的可验证 PDF 证书。",
  "projectDetails.edupro.architecture.description":
    "Next.js App Router 搭配服务器端 API 路由。Prisma ORM 连接 Neon 上的 PostgreSQL。Stripe 处理支付，Cloudinary 存储媒体，Upstash QStash 运行后台任务，NVIDIA NIM 驱动 AI 功能。",
  "projectDetails.edupro.architecture.steps.0.title": "授权层",
  "projectDetails.edupro.architecture.steps.0.description":
    "三层防御：会话检查、租户上下文解析和能力验证（读取与创作）。资源所有权保护构成第四层。",
  "projectDetails.edupro.architecture.steps.1.title": "支付流程",
  "projectDetails.edupro.architecture.steps.1.description":
    "Stripe 结账创建会话，签名 webhook 确认支付，订单状态在数据库中原子化转换。",
  "projectDetails.edupro.architecture.steps.2.title": "AI 路线图生成",
  "projectDetails.edupro.architecture.steps.2.description":
    "AI 生成与平台真实课程匹配的分阶段每周计划，并存储 token 使用量和置信度元数据。",
  "projectDetails.edupro.engineeringFocus.title":
    "安全性、支付与证书生成。",
  "projectDetails.edupro.engineeringFocus.items.0":
    "安全审计中发现并修复了 17 个跨租户漏洞",
  "projectDetails.edupro.engineeringFocus.items.1":
    "带加密密钥和 JWT 刷新轮换的 TOTP 双因素认证",
  "projectDetails.edupro.engineeringFocus.items.2":
    "PDF 证书生成及公开验证页面",

  // --- SAP IDoc Parser ---
  "projectDetails.idoc-parser.title": "SAP IDoc 解析器",
  "projectDetails.idoc-parser.summary":
    "Java 解析器，将 SAP IDoc 定义（WE60 导出）转换为结构化 JSON Schema 文档。",
  "projectDetails.idoc-parser.overview.title":
    "将 SAP WE60 导出转换为机器可读的 JSON Schema。",
  "projectDetails.idoc-parser.overview.steps.0.title":
    "状态机解析器",
  "projectDetails.idoc-parser.overview.steps.0.description":
    "一个 700 行的 IDocParser 引擎逐行处理 WE60 文本导出，通过状态机处理段、字段、组和层级。",
  "projectDetails.idoc-parser.overview.steps.1.title":
    "多模块架构",
  "projectDetails.idoc-parser.overview.steps.1.description":
    "核心模块是不依赖框架的纯 Java，便于 SDK 复用。quarkus-app 模块增加 REST API 和交互式 Web UI。",
  "projectDetails.idoc-parser.overview.steps.2.title": "Schema 生成",
  "projectDetails.idoc-parser.overview.steps.2.description":
    "解析后的 IDoc 定义转换为 JSON Schema draft-07，包含段层级、字段类型、必需数组以及自动注入的 EDI_DC40 控制记录。",
  "projectDetails.idoc-parser.architecture.description":
    "双模块 Maven 项目。Core 模块提供无框架依赖的纯 Java 解析逻辑。Quarkus-app 模块暴露 REST 端点并提供通过 CDN 构建的 React UI（无需 Node 构建步骤）。",
  "projectDetails.idoc-parser.architecture.steps.0.title":
    "核心解析引擎",
  "projectDetails.idoc-parser.architecture.steps.0.description":
    "IDocParser.java 使用 ThreadLocal 状态机处理 BEGIN_IDOC、BEGIN_SEGMENT、BEGIN_FIELDS 标记，并提取段层级和字段定义。",
  "projectDetails.idoc-parser.architecture.steps.1.title":
    "Schema 转换",
  "projectDetails.idoc-parser.architecture.steps.1.description":
    "解析后的段映射到带 $ref 引用的 JSON Schema $defs。LOOPMAX > 1 会创建数组类型，MANDATORY 状态会添加必需字段。",
  "projectDetails.idoc-parser.architecture.steps.2.title": "Web UI",
  "projectDetails.idoc-parser.architecture.steps.2.description":
    "React 18 通过 CDN 在 Quarkus 根路径提供服务。支持粘贴、上传和加载示例，并提供并排的前后对比。",
  "projectDetails.idoc-parser.engineeringFocus.title":
    "无框架核心与企业集成模式。",
  "projectDetails.idoc-parser.engineeringFocus.items.0":
    "无框架核心模块 —— 可作为独立 Java SDK 复用",
  "projectDetails.idoc-parser.engineeringFocus.items.1":
    "通过 ThreadLocal 实现线程安全解析 —— 可安全处理并发请求",
  "projectDetails.idoc-parser.engineeringFocus.items.2":
    "自动注入的 EDI_DC40 控制记录 —— 始终出现在输出 Schema 中",

  // --- EDI Spec Scrapper ---
  "projectDetails.edi-scrapper.title": "EDI 规范抓取器",
  "projectDetails.edi-scrapper.summary":
    "Quarkus 服务，从公共网站抓取 EDI 规范（EDIFACT/X12），并生成 JSON Schema 和 BeanIO 映射。",
  "projectDetails.edi-scrapper.overview.title":
    "将公共 EDI 参考网站转化为机器可读的产物。",
  "projectDetails.edi-scrapper.overview.steps.0.title": "规范抓取",
  "projectDetails.edi-scrapper.overview.steps.0.description":
    "从 edifactory.de 抓取 EDIFACT 规范，从 Stedi 抓取 X12 规范，提取段层级、元素定义和复合结构。",
  "projectDetails.edi-scrapper.overview.steps.1.title": "产物生成",
  "projectDetails.edi-scrapper.overview.steps.1.description":
    "针对每种消息类型，生成规范 JSON 模型、JSON Schema（draft-07）以及用于平面文件解析的 BeanIO 映射 XML。",
  "projectDetails.edi-scrapper.overview.steps.2.title": "发布工作流",
  "projectDetails.edi-scrapper.overview.steps.2.description":
    "生成的产物可发布到 Azure DevOps Git 仓库，供下游集成流水线使用。",
  "projectDetails.edi-scrapper.architecture.description":
    "Java 25 / Quarkus 多模块项目。Core 模块处理抓取、解析和转换，不依赖框架。App 模块提供带 SSE 流式输出的 REST API 和 React CDN UI。",
  "projectDetails.edi-scrapper.architecture.steps.0.title":
    "双标准抓取",
  "projectDetails.edi-scrapper.architecture.steps.0.description":
    "EdifactScraper 和 X12Scraper 各自处理其标准的 HTML 结构，并对只需获取一次的服务段进行信封缓存。",
  "projectDetails.edi-scrapper.architecture.steps.1.title":
    "实时进度流",
  "projectDetails.edi-scrapper.architecture.steps.1.description":
    "SSE 端点流式传输抓取进度事件（progress、done、error），让 UI 能实时显示长时间抓取的状态。",
  "projectDetails.edi-scrapper.architecture.steps.2.title":
    "Azure DevOps 发布器",
  "projectDetails.edi-scrapper.architecture.steps.2.description":
    "克隆目标 Git 仓库，复制产物文件，清理过期条目，并使用 Azure CLI 访问令牌提交。",
  "projectDetails.edi-scrapper.engineeringFocus.title":
    "带实时反馈和下游集成的网页抓取。",
  "projectDetails.edi-scrapper.engineeringFocus.items.0":
    "jsoup HTML 解析与 Next.js 数据提取 —— 同时处理两个抓取目标",
  "projectDetails.edi-scrapper.engineeringFocus.items.1":
    "信封缓存 —— 服务段只获取一次，跨消息复用",
  "projectDetails.edi-scrapper.engineeringFocus.items.2":
    "Azure DevOps Git 发布器 —— 自动将产物交付到下游系统",

  // --- Workflow MCP ---
  "projectDetails.workflow-mcp.title": "Workflow MCP · Flowagent.ai",
  "projectDetails.workflow-mcp.summary":
    "开源可视化 AI 工作流构建器，提供拖放画布来编排多步骤代理工作流。",
  "projectDetails.workflow-mcp.overview.title":
    "以可视化方式组合 AI 代理工作流，而不是编写链式代码。",
  "projectDetails.workflow-mcp.overview.steps.0.title": "可视化画布",
  "projectDetails.workflow-mcp.overview.steps.0.description":
    "React Flow 画布包含 6 种节点类型（Start、Agent、If/Else、HTTP、Comment、End），让用户可视化地拖拽、连接和配置工作流步骤。",
  "projectDetails.workflow-mcp.overview.steps.1.title":
    "多模型代理",
  "projectDetails.workflow-mcp.overview.steps.1.description":
    "Agent 节点通过 OpenRouter 支持 Gemini、GPT 和 Claude，具备 JSON 结构化输出模式和节点间的 {{variable}} 模板。",
  "projectDetails.workflow-mcp.overview.steps.2.title":
    "持久化执行",
  "projectDetails.workflow-mcp.overview.steps.2.description":
    "工作流通过 Upstash QStash 异步运行，使用 SSE 流式传输实时进度，并提供聊天预览面板进行实时测试。",
  "projectDetails.workflow-mcp.architecture.description":
    "Next.js 16 App Router 搭配 React Flow 画布。Vercel AI SDK 处理 LLM 流式输出。MongoDB 通过 Prisma 存储工作流。Upstash QStash 提供持久化异步执行及本地开发模式。",
  "projectDetails.workflow-mcp.architecture.steps.0.title":
    "拓扑执行",
  "projectDetails.workflow-mcp.architecture.steps.0.description":
    "工作流图在执行前会进行拓扑排序，确保节点按正确的依赖顺序运行。",
  "projectDetails.workflow-mcp.architecture.steps.1.title":
    "变量系统",
  "projectDetails.workflow-mcp.architecture.steps.1.description":
    "下游节点通过 {{variable}} 语法引用上游输出，自动补全仅显示已连接的上游节点。",
  "projectDetails.workflow-mcp.architecture.steps.2.title":
    "QStash 集成",
  "projectDetails.workflow-mcp.architecture.steps.2.description":
    "工作流运行会排入 QStash 队列，QStash 异步回调以执行工作流，并通过 Redis 发布/订阅流式传输进度。",
  "projectDetails.workflow-mcp.engineeringFocus.title":
    "可视化组合与持久化异步执行。",
  "projectDetails.workflow-mcp.engineeringFocus.items.0":
    "拓扑排序执行引擎 —— 为任意图形提供正确的依赖顺序",
  "projectDetails.workflow-mcp.engineeringFocus.items.1":
    "带自动补全的 {{variable}} 模板 —— 仅显示已连接的上游输出",
  "projectDetails.workflow-mcp.engineeringFocus.items.2":
    "QStash 持久化执行 —— 可恢复的工作流运行及本地开发模式",

  // --- Interview Prep ---
  "projectDetails.interview-prep.title": "AI 驱动面试准备",
  "projectDetails.interview-prep.summary":
    "AI 驱动的面试准备应用，根据职位和经验水平生成个性化问题和答案。",
  "projectDetails.interview-prep.overview.title":
    "由 Gemini AI 驱动的个性化面试准备。",
  "projectDetails.interview-prep.overview.steps.0.title":
    "创建会话",
  "projectDetails.interview-prep.overview.steps.0.description":
    "用户使用目标职位、经验年限、难度级别和重点主题创建会话。Gemini 生成定制的问题和详细答案。",
  "projectDetails.interview-prep.overview.steps.1.title":
    "交互式学习",
  "projectDetails.interview-prep.overview.steps.1.description":
    "问题以可展开的手风琴形式呈现，支持 Markdown 渲染和语法高亮代码块。用户可以固定重要问题并添加个人笔记。",
  "projectDetails.interview-prep.overview.steps.2.title":
    "按需解释",
  "projectDetails.interview-prep.overview.steps.2.description":
    "点击“了解更多”会触发单独的 Gemini 调用，为任何问题生成深入的概念解释，并在滑入式抽屉中显示。",
  "projectDetails.interview-prep.architecture.description":
    "React（Vite）前端连接 Express 后端。MongoDB 存储用户、会话和问题。Gemini AI 生成问题和解释。BullMQ + Redis 处理后台图片处理。",
  "projectDetails.interview-prep.architecture.steps.0.title":
    "Gemini 集成",
  "projectDetails.interview-prep.architecture.steps.0.description":
    "适合级别的提示词生成带详细答案的问题。基础级别保持简单，高级级别包含系统级边缘情况。",
  "projectDetails.interview-prep.architecture.steps.1.title":
    "后台图片处理",
  "projectDetails.interview-prep.architecture.steps.1.description":
    "个人资料图片经过 BullMQ 队列，由 sharp 优化后再上传到 Cloudinary。",
  "projectDetails.interview-prep.architecture.steps.2.title":
    "会话持久化",
  "projectDetails.interview-prep.architecture.steps.2.description":
    "会话和问题存储在 MongoDB 中，支持“加载更多”以向现有会话追加更多问题。",
  "projectDetails.interview-prep.engineeringFocus.title":
    "AI 提示词工程与后台处理。",
  "projectDetails.interview-prep.engineeringFocus.items.0":
    "适合级别的提示词工程 —— Basic、Intermediate、Advanced 难度层级",
  "projectDetails.interview-prep.engineeringFocus.items.1":
    "BullMQ 后台图片流水线 —— 上传 Cloudinary 前用 sharp 优化",
  "projectDetails.interview-prep.engineeringFocus.items.2":
    "加载更多模式 —— 向现有会话追加 AI 生成的问题",

  // --- Task Management ---
  "projectDetails.task-management.title": "任务管理",
  "projectDetails.task-management.summary":
    "基于角色的团队任务管理平台，具备 AI 驱动规划、智能清单和分析仪表盘。",
  "projectDetails.task-management.overview.title":
    "智能任务管理，配备 AI 驱动的执行规划。",
  "projectDetails.task-management.overview.steps.0.title":
    "基于角色的访问",
  "projectDetails.task-management.overview.steps.0.description":
    "管理员通过 CRUD、任务分配和分析管理整个团队的工作量。成员查看分配的任务，并通过交互式清单更新状态。",
  "projectDetails.task-management.overview.steps.1.title":
    "智能清单",
  "projectDetails.task-management.overview.steps.1.description":
    "待办事项会自动计算完成百分比，并将任务状态转换为进行中或已完成，无需手动干预。",
  "projectDetails.task-management.overview.steps.2.title":
    "AI 任务规划器",
  "projectDetails.task-management.overview.steps.2.description":
    "Gemini 根据分配的任务生成结构化执行计划，包括每项任务的指导、后续步骤和工作量估算。",
  "projectDetails.task-management.architecture.description":
    "Next.js App Router 搭配 API 路由。MongoDB 通过 Mongoose 存储用户和任务。Gemini AI 生成计划。Cloudinary 处理图片上传。Recharts 驱动分析图表。",
  "projectDetails.task-management.architecture.steps.0.title":
    "自动计算进度",
  "projectDetails.task-management.architecture.steps.0.description":
    "清单端点会在每次切换时重新计算进度百分比和状态，确保任务状态始终一致。",
  "projectDetails.task-management.architecture.steps.1.title":
    "AI 计划生成",
  "projectDetails.task-management.architecture.steps.1.description":
    "Gemini 接收任务数据并返回结构化计划，服务器端会进行验证并与权威数据库数据合并，以防止幻觉。",
  "projectDetails.task-management.architecture.steps.2.title":
    "Excel 报告导出",
  "projectDetails.task-management.architecture.steps.2.description":
    "管理员可通过 ExcelJS 将任务和用户工作量报告导出为 Excel 文件，用于离线分析。",
  "projectDetails.task-management.engineeringFocus.title":
    "AI 辅助的自动化任务状态管理。",
  "projectDetails.task-management.engineeringFocus.items.0":
    "自动计算任务进度 —— 清单切换会重新计算百分比和状态",
  "projectDetails.task-management.engineeringFocus.items.1":
    "AI 计划验证 —— 服务器端与数据库数据合并防止幻觉",
  "projectDetails.task-management.engineeringFocus.items.2":
    "确定性任务排序 —— 先逾期，再按优先级，最后按截止日期",

  // --- NextFurniture ---
  "projectDetails.nextfurniture.title":
    "NextFurniture – 购物与博客平台",
  "projectDetails.nextfurniture.summary":
    "家具电商平台，包含博客板块、Redis 缓存、后台任务处理和多语言支持。",
  "projectDetails.nextfurniture.overview.title":
    "通过家具电商平台探索现代全栈模式。",
  "projectDetails.nextfurniture.overview.steps.0.title":
    "商品浏览与购物车",
  "projectDetails.nextfurniture.overview.steps.0.description":
    "用户浏览家具产品，支持高级分类筛选、查看详细描述并管理持久化购物车。",
  "projectDetails.nextfurniture.overview.steps.1.title":
    "博客与内容",
  "projectDetails.nextfurniture.overview.steps.1.description":
    "博客板块包含家具和家居设计文章，支持偏移量和游标两种分页方式。",
  "projectDetails.nextfurniture.overview.steps.2.title":
    "后台处理",
  "projectDetails.nextfurniture.overview.steps.2.description":
    "Redis 缓存加速产品查询，BullMQ 处理队列工作，Node Cron 调度后台任务。Sharp 优化产品图片。",
  "projectDetails.nextfurniture.architecture.description":
    "React 前端搭配 TanStack Query 连接 Express 后端。Prisma ORM 管理 MongoDB。Redis 提供缓存，BullMQ 处理任务队列，i18next 支持多语言内容。",
  "projectDetails.nextfurniture.architecture.steps.0.title":
    "缓存策略",
  "projectDetails.nextfurniture.architecture.steps.0.description":
    "Redis 缓存产品查询以减少数据库负载。产品更新时会使缓存失效。",
  "projectDetails.nextfurniture.architecture.steps.1.title":
    "后台任务",
  "projectDetails.nextfurniture.architecture.steps.1.description":
    "BullMQ 队列处理图片处理和其他异步任务。Node Cron 调度定期维护任务。",
  "projectDetails.nextfurniture.architecture.steps.2.title":
    "国际化",
  "projectDetails.nextfurniture.architecture.steps.2.description":
    "i18next 在前端和后端为产品名称、描述和 UI 文本提供多语言支持。",
  "projectDetails.nextfurniture.engineeringFocus.title":
    "缓存、队列与多语言支持。",
  "projectDetails.nextfurniture.engineeringFocus.items.0":
    "Redis 缓存 —— 产品查询缓存，更新时失效",
  "projectDetails.nextfurniture.engineeringFocus.items.1":
    "BullMQ + Node Cron —— 后台任务处理与定时任务",
  "projectDetails.nextfurniture.engineeringFocus.items.2":
    "i18next 国际化 —— 全栈多语言支持",
};
