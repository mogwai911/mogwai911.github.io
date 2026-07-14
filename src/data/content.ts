export type Lang = 'zh' | 'en';

export type ProjectCase = {
  slug: string;
  number: string;
  year: string;
  title: string;
  displayTitle: Record<Lang, string>;
  eyebrow: Record<Lang, string>;
  summary: Record<Lang, string>;
  why: Record<Lang, string>;
  value: Record<Lang, string>;
  question: Record<Lang, string>;
  role: Record<Lang, string>;
  decisions: Record<Lang, { action: string; reason: string }[]>;
  system: Record<Lang, { title: string; text: string }[]>;
  workflow: Record<Lang, {
    heading: string;
    summary: string;
    stages: { actor: string; title: string; text: string }[];
    decision: { actor: string; title: string; text: string };
    branches: { condition: string; title: string; text: string }[];
    feedback: { actor: string; title: string; text: string };
  }>;
  process: Record<Lang, { title: string; text: string }[]>;
  evidence: Record<Lang, string[]>;
  boundary: Record<Lang, string>;
  next: Record<Lang, string>;
  tags: string[];
  link?: string;
  video?: { url: string; title: Record<Lang, string> };
  images?: { src: string; alt: Record<Lang, string> }[];
};

export const projects: ProjectCase[] = [
  {
    slug: 'fomo-firewall',
    number: '01',
    year: '2026',
    title: 'FOMO Firewall',
    displayTitle: { zh: '信息分诊与学习助手', en: 'Information Triage & Learning Assistant' },
    eyebrow: { zh: '信息分诊 · 产品判断', en: 'Information triage · Product judgment' },
    summary: {
      zh: '为知识工作者做的信息分诊原型：把不断收藏，变成“现在学、稍后看、忽略”三个可执行选择。',
      en: 'An information-triage prototype for knowledge workers that turns endless saving into three executable choices: Learn now, Later, or Ignore.',
    },
    why: {
      zh: '信息过载会让人把注意力耗在反复筛选上：内容越多，收藏越多，但真正进入学习和工作的内容并没有增加。值得解决的不是“缺少摘要”，而是用户缺少一个低成本、可撤回的处置方式。',
      en: 'Information overload pushes people to spend attention on repeated screening. More content creates more saves, but not more material that enters learning or work. The missing piece is not another summary—it is a low-cost, reversible way to decide what to do next.',
    },
    value: {
      zh: '如果分诊有效，用户会减少无效收藏，更快进入学习；系统也能从接受和改判中校正偏好，而不是替用户永久做决定。',
      en: 'If triage works, users save less without acting and reach learning faster. The system can also learn from acceptance and overrides instead of permanently deciding on the user’s behalf.',
    },
    question: {
      zh: '怎样让系统先给出有理由的行动建议，同时让用户能轻松接受、改判，并用这些行为继续校正系统？',
      en: 'How can a system recommend a next action with reasons, while making it easy for users to accept or override—and use those actions to improve later recommendations?',
    },
    role: {
      zh: '独立完成问题定义、交互路径、分诊逻辑、记忆分层与验证设计。',
      en: 'I independently shaped the problem, interaction path, triage logic, layered memory, and validation design.',
    },
    decisions: {
      zh: [
        { action: '先用 RSS 接入稳定内容源。', reason: '首版要验证的是“分诊是否改变行为”，不是爬虫覆盖率；稳定入口能把时间留给核心链路。' },
        { action: '把输出限制为“去学习 / 稍后看 / 忽略”。', reason: '三个选项直接对应下一步动作，避免系统给出一段摘要后仍把判断成本留给用户。' },
        { action: '记录接受与改判，而不把模型命中率当唯一指标。', reason: '用户是否采纳更接近真实价值；改判还能暴露理由、偏好或分类边界哪里出了问题。' },
      ],
      en: [
        { action: 'Start with RSS as a stable content input.', reason: 'The first version needed to test whether triage changes behavior—not crawler coverage—so a stable input kept effort on the core journey.' },
        { action: 'Constrain output to Learn / Later / Ignore.', reason: 'Each option maps to a next action, rather than returning a summary and leaving the original decision cost untouched.' },
        { action: 'Record acceptance and overrides instead of treating model accuracy as the only metric.', reason: 'Adoption is closer to product value, while overrides reveal failures in rationale, preference, or category boundaries.' },
      ],
    },
    system: {
      zh: [
        { title: '内容输入', text: 'RSS 与用户目标提供待处理内容和判断上下文。' },
        { title: '分诊建议', text: '系统给出三类动作，并说明为什么。' },
        { title: '用户处置', text: '接受、改判或进入学习会话。' },
        { title: '学习沉淀', text: '问题引导、洞察与记忆进入后续使用。' },
        { title: '反馈校正', text: '接受率与改判记录反向调整偏好。' },
      ],
      en: [
        { title: 'Content input', text: 'RSS and user goals provide items and decision context.' },
        { title: 'Triage', text: 'The system proposes one of three actions and explains why.' },
        { title: 'User action', text: 'Accept, override, or enter a learning session.' },
        { title: 'Learning', text: 'Questions, insights, and memory support later use.' },
        { title: 'Feedback', text: 'Acceptance and overrides adjust later preferences.' },
      ],
    },
    workflow: {
      zh: {
        heading: '一条内容如何从“待处理”，变成明确行动',
        summary: '产品价值不在于替用户读完内容，而在于减少重复判断，并让每一次接受或改判都能改善下一次分诊。',
        stages: [
          { actor: '内容源', title: '内容进入收件箱', text: 'RSS 条目与来源信息进入待处理队列。' },
          { actor: '系统', title: '补充判断上下文', text: '结合主题、来源、用户目标与历史偏好。' },
          { actor: 'Agent', title: '给出建议与理由', text: '输出可撤回的动作建议，而不是只生成摘要。' },
        ],
        decision: { actor: '用户', title: '这条内容下一步怎么处理？', text: '用户可以接受建议，也可以改判；最终选择决定内容去向。' },
        branches: [
          { condition: '现在学', title: '进入学习会话', text: '用递进问题形成可复述的理解，并沉淀关键洞察。' },
          { condition: '稍后看', title: '进入延期队列', text: '保留理由与优先级，避免重新从零筛选。' },
          { condition: '忽略', title: '结束本次处理', text: '不再占用注意力，但保留本次判断记录。' },
        ],
        feedback: { actor: '反馈闭环', title: '接受与改判回写偏好', text: '系统记录建议是否被采纳、用户改成了什么，并在下一轮调整分诊依据。' },
      },
      en: {
        heading: 'How an item moves from backlog to a clear action',
        summary: 'The product does not create value by reading on the user’s behalf. It reduces repeated judgment and uses every acceptance or override to improve the next triage decision.',
        stages: [
          { actor: 'Source', title: 'Item enters the inbox', text: 'An RSS item and its source metadata enter the triage queue.' },
          { actor: 'System', title: 'Add decision context', text: 'Combine topic, source, user intent, and durable preferences.' },
          { actor: 'Agent', title: 'Recommend with reasons', text: 'Return a reversible action rather than another summary.' },
        ],
        decision: { actor: 'User', title: 'What should happen next?', text: 'The user can accept or override the suggestion; the final choice determines the item’s path.' },
        branches: [
          { condition: 'Learn now', title: 'Start a learning session', text: 'Progressive questions turn reading into recallable understanding.' },
          { condition: 'Later', title: 'Move to a deferred queue', text: 'Keep rationale and priority so the user does not screen from zero.' },
          { condition: 'Ignore', title: 'End this item’s journey', text: 'Remove it from attention while preserving the decision record.' },
        ],
        feedback: { actor: 'Feedback loop', title: 'Write acceptance and overrides to memory', text: 'The next triage decision uses what was accepted, what changed, and why.' },
      },
    },
    process: {
      zh: [
        { title: '分诊', text: '结合主题、来源与个人目标，给出动作建议和理由。' },
        { title: '学习', text: '用三个逐步收紧的问题，把“读过”转化为可复述的理解。' },
        { title: '记忆', text: '区分即时判断、长期偏好与可配置 Prompt，允许系统随使用校正。' },
      ],
      en: [
        { title: 'Triage', text: 'Combine topic, source, and personal intent into a recommendation with a rationale.' },
        { title: 'Learn', text: 'Use three progressively sharper prompts to turn reading into recallable understanding.' },
        { title: 'Remember', text: 'Separate immediate decisions, durable preferences, and configurable prompts so the system can adapt.' },
      ],
    },
    evidence: {
      zh: ['核心路径已在个人环境中完整跑通', '提供可复现的容器镜像', '用改判记录验证建议是否真正节省判断'],
      en: ['Core journey verified end to end in a personal environment', 'Reproducible container image available', 'Overrides recorded to test whether recommendations actually save judgment'],
    },
    boundary: {
      zh: '当前证据来自个人场景，不代表已经完成大规模用户验证；改判率的解释仍需要更长周期的数据。',
      en: 'Current evidence comes from personal use, not broad user validation. Override rate still needs a longer observation window.',
    },
    next: {
      zh: '下一步不是增加更多摘要能力，而是比较不同分诊理由对用户信任和改判行为的影响。',
      en: 'The next step is not more summarization, but testing how different rationales affect trust and overrides.',
    },
    tags: ['Product Design', 'Agent Workflow', 'Evaluation'],
    link: 'https://github.com/mogwai911/FOMO-Firewall',
    images: [
      { src: '/images/fomo-digest.webp', alt: { zh: 'FOMO Firewall 信息摘要界面', en: 'FOMO Firewall digest interface' } },
      { src: '/images/fomo-session.webp', alt: { zh: 'FOMO Firewall 学习会话界面', en: 'FOMO Firewall learning session' } },
      { src: '/images/fomo-memory.webp', alt: { zh: 'FOMO Firewall 记忆界面', en: 'FOMO Firewall memory interface' } },
    ],
  },
  {
    slug: 'tb2-diagnostics',
    number: '02',
    year: '2025–26',
    title: 'TB2 Diagnostics',
    displayTitle: { zh: 'Agent 失败诊断系统', en: 'Agent Failure Diagnostics' },
    eyebrow: { zh: 'Agent 诊断 · 评估系统', en: 'Agent diagnostics · Evaluation system' },
    summary: {
      zh: '把冗长的 Agent 失败轨迹，转成带证据的错误类型和修复优先级，降低人工复盘成本。',
      en: 'Turning long agent-failure traces into evidence-backed error types and repair priorities, reducing the cost of manual review.',
    },
    why: {
      zh: '团队只看到“任务失败”，就无法判断下一轮该改规划、工具调用、环境理解还是执行策略。人工逐条看日志平均需要 770 秒，而且不同人可能给出不同结论，评测结果很难稳定地指导迭代。',
      en: 'A team that only sees “task failed” cannot tell whether to improve planning, tool use, environment understanding, or execution. Manual trace review averaged 770 seconds and reviewers could disagree, making evaluation an unstable guide for iteration.',
    },
    value: {
      zh: '结构化诊断把“感觉这个 Agent 不行”变成“哪一层失败、证据是什么、先修什么”，让研发和评测人员能基于同一套口径复盘。',
      en: 'Structured diagnosis turns “this agent feels unreliable” into “which layer failed, what evidence supports it, and what to fix first,” giving researchers and evaluators a shared review language.',
    },
    question: {
      zh: '怎样在不让模型自由猜原因的前提下，把轨迹转成可复核、可统计、可指导修复的诊断结果？',
      en: 'How can traces become reviewable, aggregatable diagnoses that guide repair—without letting a model freely invent causes?',
    },
    role: {
      zh: '负责失败样本分析、分类框架、证据链设计、LLM-as-Judge 流程与人机一致性验证。',
      en: 'I worked on failure analysis, taxonomy, evidence-chain design, the LLM-as-Judge flow, and human–model agreement validation.',
    },
    decisions: {
      zh: [
        { action: '先人工分析 46 条失败轨迹，再建立 L1/L2 分类。', reason: '分类必须来自真实失败模式；如果直接让模型生成标签，口径会漂移，也难以比较不同批次。' },
        { action: '强制每个判断绑定日志、命令、报错或耗时证据。', reason: '证据链让结论可以被复核，减少“解释听起来合理，但轨迹并不支持”的空诊断。' },
        { action: '把低置信度与冲突样本交回人工仲裁。', reason: '自动化最适合先筛选和统一格式；保留人工兜底能控制误判风险，并继续补全分类边界。' },
      ],
      en: [
        { action: 'Manually analyze 46 failed traces before building an L1/L2 taxonomy.', reason: 'Categories need to come from observed failures; model-invented labels drift and make batches difficult to compare.' },
        { action: 'Require every judgment to cite logs, commands, errors, or timing evidence.', reason: 'An evidence chain keeps diagnoses reviewable and prevents explanations that sound plausible but are unsupported by the trace.' },
        { action: 'Return low-confidence and conflicting cases to human arbitration.', reason: 'Automation is best used for triage and consistent formatting; human fallback controls misclassification risk and expands taxonomy boundaries.' },
      ],
    },
    system: {
      zh: [
        { title: '失败轨迹', text: '命令、日志、报错、耗时与模型决策。' },
        { title: '证据抽取', text: '定位关键转折，分离表象错误与根因。' },
        { title: '层级归因', text: '按固定 L1/L2 口径给出错误类型。' },
        { title: 'LLM 裁判', text: '输出标签、证据、解释与置信度。' },
        { title: '人工仲裁', text: '复核冲突样本并形成修复优先级。' },
      ],
      en: [
        { title: 'Failure trace', text: 'Commands, logs, errors, timing, and model decisions.' },
        { title: 'Evidence extraction', text: 'Locate turning points and separate symptoms from root causes.' },
        { title: 'Taxonomy', text: 'Assign a fixed L1/L2 failure category.' },
        { title: 'LLM judge', text: 'Return label, evidence, explanation, and confidence.' },
        { title: 'Human arbitration', text: 'Review conflicts and set repair priority.' },
      ],
    },
    workflow: {
      zh: {
        heading: '一次 Agent 失败如何变成可执行的修复优先级',
        summary: '诊断的业务价值，是让研发不再从整段日志里猜原因：高置信样本快速归档，争议样本交给人，所有结果最终指向下一轮修复。',
        stages: [
          { actor: '运行环境', title: '采集失败轨迹', text: '汇总命令、日志、报错、耗时与模型决策。' },
          { actor: '诊断管线', title: '抽取证据与转折点', text: '区分最终报错、上游异常和真正根因。' },
          { actor: 'LLM Judge', title: '按固定分类归因', text: '输出 L1/L2 标签、引用证据、解释和置信度。' },
        ],
        decision: { actor: '质量控制', title: '证据与置信度足以支持结论吗？', text: '系统检查证据完整性、标签覆盖和不同判断之间是否冲突。' },
        branches: [
          { condition: '一致且高置信', title: '进入结构化诊断库', text: '直接用于批次统计、问题聚类和修复排序。' },
          { condition: '低置信 / 冲突', title: '提交人工仲裁', text: '复核原始轨迹，确认标签或纠正根因。' },
          { condition: '新失败模式', title: '扩充分类边界', text: '把无法覆盖的案例加入 taxonomy 迭代样本。' },
        ],
        feedback: { actor: '研发闭环', title: '诊断结果转成修复与回归测试', text: '按影响与频率确定优先级；修复后重新运行任务，新的轨迹再次进入诊断。' },
      },
      en: {
        heading: 'How an agent failure becomes an actionable repair priority',
        summary: 'The business value of diagnosis is removing guesswork from long traces: confident cases move quickly, disputed cases go to people, and every result points to the next repair cycle.',
        stages: [
          { actor: 'Runtime', title: 'Capture the failure trace', text: 'Collect commands, logs, errors, timing, and model decisions.' },
          { actor: 'Pipeline', title: 'Extract evidence and turning points', text: 'Separate the final symptom, upstream anomaly, and root cause.' },
          { actor: 'LLM judge', title: 'Attribute with a fixed taxonomy', text: 'Return L1/L2 label, cited evidence, explanation, and confidence.' },
        ],
        decision: { actor: 'Quality control', title: 'Does the evidence support the diagnosis?', text: 'Check evidence completeness, taxonomy coverage, confidence, and conflicts.' },
        branches: [
          { condition: 'Consistent + high confidence', title: 'Store a structured diagnosis', text: 'Use it for batch statistics, issue clustering, and repair ranking.' },
          { condition: 'Low confidence / conflict', title: 'Send to human arbitration', text: 'Review the original trace and confirm or correct the root cause.' },
          { condition: 'New failure pattern', title: 'Expand taxonomy boundaries', text: 'Add uncovered cases to the next taxonomy iteration.' },
        ],
        feedback: { actor: 'Engineering loop', title: 'Turn diagnosis into repair and regression tests', text: 'Prioritize by frequency and impact, rerun the task after repair, and feed the new trace back into diagnosis.' },
      },
    },
    process: {
      zh: [
        { title: '归因', text: '从轨迹中定位关键转折，将表象错误与根因分开。' },
        { title: '判断', text: '让 Judge 依据固定分类和证据格式输出原因、证据与置信度。' },
        { title: '仲裁', text: '抽检高置信度结果，人工复核冲突与覆盖不到的样本。' },
      ],
      en: [
        { title: 'Attribute', text: 'Locate turning points in traces and separate visible errors from root causes.' },
        { title: 'Judge', text: 'Require a fixed taxonomy and evidence format with cause, citation, and confidence.' },
        { title: 'Arbitrate', text: 'Sample high-confidence outputs and manually review conflicts or uncovered cases.' },
      ],
    },
    evidence: {
      zh: ['与人工判断一致率 92%', '标签覆盖率 91.7%', '平均置信度 0.89', '单轮诊断由 770 秒降至 354 秒'],
      en: ['92% agreement with human review', '91.7% label coverage', '0.89 average confidence', 'Diagnosis time reduced from 770s to 354s'],
    },
    boundary: {
      zh: '结果来自特定 Agent 与任务集合；分类体系需要在新模型、新工具链和分布外失败上继续检验。',
      en: 'Results come from a specific agent and task set. The taxonomy still needs testing across new models, toolchains, and out-of-distribution failures.',
    },
    next: {
      zh: '把诊断结果连接到可验证的修复建议，并追踪“诊断正确”是否真的带来任务成功率提升。',
      en: 'Connect diagnoses to testable interventions, then measure whether accurate diagnosis actually improves task success.',
    },
    tags: ['LLM-as-Judge', 'Error Taxonomy', 'Evidence Chain'],
  },
  {
    slug: 'geoagent',
    number: '03',
    year: '2025',
    title: 'GeoAgent',
    displayTitle: { zh: '可验证的 GIS 代码助手', en: 'Verifiable GIS Code Assistant' },
    eyebrow: { zh: 'GIS · RAG · Multi-Agent', en: 'GIS · RAG · Multi-Agent' },
    summary: {
      zh: '把 GIS 代码生成从“一次性回答”，改造成检索文档、生成、执行、报错修复和评测的闭环。',
      en: 'Turning GIS code generation from a one-shot answer into a loop of document retrieval, generation, execution, repair, and evaluation.',
    },
    why: {
      zh: '通用模型生成的 GIS 代码经常“看起来合理但跑不通”：API、参数、坐标系或数据文件选错，都会让答案无法交付。用户真正需要的不是一段漂亮代码，而是减少查文档和反复调试的时间。',
      en: 'General models often produce GIS code that looks reasonable but does not run. A wrong API, parameter, projection, or file can make an answer unusable. Users need less documentation hunting and debugging—not merely attractive code.',
    },
    value: {
      zh: '把外部知识、执行反馈和评测接进生成链路后，错误能回流到具体环节，用户也能判断结果是否真的可运行、可修复、可交付。',
      en: 'Connecting external knowledge, execution feedback, and evaluation makes errors traceable to a specific stage and lets users judge whether output is runnable, repairable, and deliverable.',
    },
    question: {
      zh: '怎样让自然语言需求经过可靠知识、数据选择和执行反馈，最终变成可以验证的 GIS 任务结果？',
      en: 'How can a natural-language request move through reliable knowledge, data selection, and execution feedback to become a verifiable GIS result?',
    },
    role: {
      zh: '聚焦 RAG 知识库、任务数据、评估分析，以及从自然语言到代码生成的路径设计；项目为协作研究。',
      en: 'I focused on the RAG knowledge base, task data, evaluation analysis, and the path from natural language to generated code within a collaborative research project.',
    },
    decisions: {
      zh: [
        { action: '先构建 6k+ GIS QA 与 320 条 Query-Code 样本。', reason: '垂类任务需要稳定的数据边界和示例覆盖，不能只依赖模型已有知识或零散 Prompt。' },
        { action: '用 RAG 检索官方文档和代码示例。', reason: 'GIS API 更新快、参数细，检索能给生成阶段提供可追溯依据，比继续加长 Prompt 更可维护。' },
        { action: '把执行、报错、修复和评测接成循环。', reason: '早期复盘发现“代码像答案”不等于“任务能交付”；执行反馈才能暴露依赖、路径、工具调用和异常处理问题。' },
      ],
      en: [
        { action: 'Build 6k+ GIS QA pairs and 320 Query-Code examples first.', reason: 'A vertical task needs stable data boundaries and example coverage; it cannot rely only on model memory or scattered prompts.' },
        { action: 'Use RAG to retrieve official documentation and code examples.', reason: 'GIS APIs change and parameters are specific. Retrieval provides traceable grounding and is more maintainable than an ever-longer prompt.' },
        { action: 'Connect execution, error, repair, and evaluation in a loop.', reason: 'Early review showed that code resembling an answer is not the same as a deliverable task. Execution feedback exposes dependencies, paths, tool use, and exception handling.' },
      ],
    },
    system: {
      zh: [
        { title: '自然语言任务', text: '识别目标、输入数据、空间关系和交付物。' },
        { title: '知识检索', text: '从官方文档与示例中召回相关 API。' },
        { title: '规划与生成', text: '选择文件、工具和处理顺序，生成代码。' },
        { title: '执行与修复', text: '运行代码，把报错反馈给修复环节。' },
        { title: '结果评测', text: '结合 CodeBLEU、AST 与执行结果判断质量。' },
      ],
      en: [
        { title: 'Task request', text: 'Identify the goal, inputs, spatial relationships, and artifact.' },
        { title: 'Knowledge retrieval', text: 'Recall relevant APIs from official docs and examples.' },
        { title: 'Plan & generate', text: 'Select files, tools, and sequence, then generate code.' },
        { title: 'Execute & repair', text: 'Run code and route errors back into repair.' },
        { title: 'Evaluate', text: 'Use CodeBLEU, AST, and execution results to judge quality.' },
      ],
    },
    workflow: {
      zh: {
        heading: '一个 GIS 需求如何走到可运行、可验证的结果',
        summary: '核心不是“生成代码”，而是把知识依据、数据选择、执行反馈和空间结果验证接成闭环，减少看似正确却无法交付的答案。',
        stages: [
          { actor: '用户', title: '提出空间任务', text: '说明目标、输入数据、空间关系和期望交付物。' },
          { actor: 'RAG + 数据层', title: '检索知识并确认数据', text: '召回官方 API、示例与可用文件，检查坐标系和字段。' },
          { actor: '规划 / 生成 Agent', title: '形成计划并生成代码', text: '选择工具、处理顺序与参数，产出可执行脚本。' },
        ],
        decision: { actor: '执行环境', title: '代码能运行，并产生可信的空间结果吗？', text: '同时检查运行状态、产物存在性、空间逻辑和质量指标。' },
        branches: [
          { condition: '运行且验证通过', title: '交付代码与空间产物', text: '同时保留数据、参数和评测依据，便于复现。' },
          { condition: '运行报错', title: '错误进入修复 Agent', text: '把依赖、路径、API 或参数错误反馈给生成环节。' },
          { condition: '需求 / 数据不完整', title: '返回用户澄清', text: '补充文件、坐标系、字段含义或期望输出。' },
        ],
        feedback: { actor: '验证闭环', title: '失败原因回流到检索与规划', text: '错误不被隐藏在最终答案里，而是定位到知识、数据、计划、执行或评测环节后重新运行。' },
      },
      en: {
        heading: 'How a GIS request becomes a runnable, verifiable result',
        summary: 'The core is not code generation alone. It is a loop that connects grounding, data selection, execution feedback, and spatial validation so plausible but undeliverable answers are exposed.',
        stages: [
          { actor: 'User', title: 'Describe a spatial task', text: 'State the goal, input data, spatial relationships, and expected artifact.' },
          { actor: 'RAG + data layer', title: 'Retrieve knowledge and confirm data', text: 'Recall official APIs and examples, then inspect files, projections, and fields.' },
          { actor: 'Planning / generation agent', title: 'Plan and generate code', text: 'Choose tools, sequence, and parameters, then produce an executable script.' },
        ],
        decision: { actor: 'Execution environment', title: 'Does it run and produce a trustworthy spatial result?', text: 'Check runtime status, artifact existence, spatial logic, and quality metrics together.' },
        branches: [
          { condition: 'Runs + passes validation', title: 'Deliver code and spatial artifacts', text: 'Preserve data, parameters, and evaluation evidence for reproducibility.' },
          { condition: 'Runtime error', title: 'Route error to the repair agent', text: 'Feed dependency, path, API, or parameter failures back into generation.' },
          { condition: 'Missing requirement / data', title: 'Return to the user for clarification', text: 'Request files, projection, field meaning, or a clearer expected output.' },
        ],
        feedback: { actor: 'Validation loop', title: 'Route failure causes back to retrieval and planning', text: 'Locate the failure in knowledge, data, planning, execution, or evaluation, then rerun instead of hiding it in the final answer.' },
      },
    },
    process: {
      zh: [
        { title: '理解', text: '解析空间任务、输入数据和期望产物。' },
        { title: '规划', text: '检索相关知识，选择文件、工具与处理顺序。' },
        { title: '验证', text: '执行生成代码，根据报错修复，并评估结果质量。' },
      ],
      en: [
        { title: 'Understand', text: 'Parse the spatial task, inputs, and expected artifact.' },
        { title: 'Plan', text: 'Retrieve relevant knowledge and select files, tools, and sequence.' },
        { title: 'Verify', text: 'Execute generated code, repair errors, and evaluate output quality.' },
      ],
    },
    evidence: {
      zh: ['构建 6k+ GIS QA 与 320 条 Query-Code 数据', '相对基线 CodeBLEU 提升 78.3%', '35 个 GIS 任务平均约 5 分钟完成', '防御性代码写法提升 50%'],
      en: ['Built 6k+ GIS QA pairs and 320 Query-Code examples', '78.3% CodeBLEU improvement over baseline', '35 GIS tasks completed in about five minutes on average', '50% improvement in defensive coding patterns'],
    },
    boundary: {
      zh: '代码相似度和小规模任务集不能代表真实生产可靠性；首版网站不链接含本机路径的研究仓库。',
      en: 'Code similarity and a small task set do not establish production reliability. The first site release does not link the research repository because it contains local path traces.',
    },
    next: {
      zh: '增加空间结果级验证和失败用例覆盖，优先回答“结果是否可信”，而不只是“代码是否生成”。',
      en: 'Expand spatial-result validation and failure coverage, prioritizing “is the result trustworthy?” over “was code generated?”',
    },
    tags: ['RAG', 'Geospatial AI', 'Workflow Evaluation'],
  },
  {
    slug: 'aigc-pov',
    number: '04',
    year: '2025–26',
    title: 'AIGC POV',
    displayTitle: { zh: '多镜头 AIGC 创作工作流', en: 'Multi-shot AIGC Creation Workflow' },
    eyebrow: { zh: '创作工具 · Prompt DSL', en: 'Creative tools · Prompt DSL' },
    summary: {
      zh: '为多镜头 AIGC 视频建立角色、视角和约束模板，减少盲目重试，让失败原因可以复用。',
      en: 'A character, viewpoint, and constraint framework for multi-shot generative video that reduces blind retries and makes failure reasons reusable.',
    },
    why: {
      zh: '生成一个好看的镜头并不难，难的是跨镜头保持同一个人、同一视角和同一世界规则。没有结构化记录时，每次失败都只能重新“抽卡”，时间和模型成本不断累积。',
      en: 'Generating one attractive shot is not the hardest part. Preserving the same person, viewpoint, and world rules across shots is. Without structured records, every failure becomes another blind retry and costs keep accumulating.',
    },
    value: {
      zh: '把审美判断拆成可记录的约束和评审项后，创作者能知道为什么重试、下一轮改什么，也能把有效方法复用到后续镜头。',
      en: 'Turning aesthetic judgment into recorded constraints and review criteria lets a creator know why a retry is needed, what to change next, and which successful patterns can carry into later shots.',
    },
    question: {
      zh: '怎样把“这个镜头不对”的主观感受，拆成角色、镜头、连续性和叙事功能等可以修改的具体问题？',
      en: 'How can the subjective feeling that “this shot is wrong” become specific, editable issues in character, camera, continuity, and narrative function?',
    },
    role: {
      zh: '独立完成叙事拆解、Prompt DSL、角色参考体系、生成评审与迭代编排。',
      en: 'I independently developed the narrative breakdown, prompt DSL, character-reference system, generation review, and iteration flow.',
    },
    decisions: {
      zh: [
        { action: '先固定身份、视角和不可变化项，再写单镜头动作。', reason: '把全局规则与局部变化分开，可以减少模型在每个镜头里重新解释角色。' },
        { action: '把 Prompt 拆成镜头、主体、环境、连续性和负面约束。', reason: '模块化结构让修改对应到具体变量，也方便追踪哪一类改动真正改善了结果。' },
        { action: '按一致性、运动、构图和叙事功能记录失败。', reason: '“像不像”无法指导下一轮；明确失败类型后，重试才有目标，并能沉淀为后续镜头的规则。' },
      ],
      en: [
        { action: 'Lock identity, viewpoint, and invariants before scene-specific action.', reason: 'Separating global rules from local change reduces the need for the model to reinterpret the character in every shot.' },
        { action: 'Split prompts into camera, subject, environment, continuity, and negative constraints.', reason: 'A modular structure maps revisions to specific variables and makes it possible to track which changes improve results.' },
        { action: 'Record failures by consistency, motion, composition, and narrative function.', reason: 'A vague similarity judgment cannot guide the next round. Failure types make retries purposeful and reusable as rules for later shots.' },
      ],
    },
    system: {
      zh: [
        { title: '叙事目标', text: '明确这一镜在故事中必须完成什么。' },
        { title: '全局约束', text: '锁定角色身份、第一视角与世界规则。' },
        { title: '镜头 DSL', text: '组织镜头、动作、环境与负面约束。' },
        { title: '候选生成', text: '记录模型与参数，生成可比较片段。' },
        { title: '评审与重试', text: '按失败类型修改约束并保留原因。' },
      ],
      en: [
        { title: 'Narrative goal', text: 'Define what the shot must accomplish in the story.' },
        { title: 'Global constraints', text: 'Lock character identity, first-person viewpoint, and world rules.' },
        { title: 'Shot DSL', text: 'Organize camera, action, environment, and negative constraints.' },
        { title: 'Generate candidates', text: 'Record model and parameters, then create comparable clips.' },
        { title: 'Review & retry', text: 'Revise constraints by failure type and retain the reason.' },
      ],
    },
    workflow: {
      zh: {
        heading: '一个镜头如何从创作意图进入可控的迭代',
        summary: '流程把“多抽几次卡”改成有依据的创作决策：通过的镜头固化为下一镜资产，失败的镜头明确改哪个变量、为什么改。',
        stages: [
          { actor: '创作者', title: '定义镜头的叙事任务', text: '先说清这一镜要推进什么信息、情绪或动作。' },
          { actor: '约束层', title: '锁定全局不变量', text: '固定角色身份、第一视角、世界规则与连续性要求。' },
          { actor: 'Prompt DSL + 模型', title: '组织变量并生成候选', text: '拆分镜头、主体、环境和负面约束，记录模型与参数。' },
        ],
        decision: { actor: '创作评审', title: '候选镜头同时满足连续性与叙事作用吗？', text: '不只判断“好不好看”，还检查角色、视角、运动、构图和前后镜关系。' },
        branches: [
          { condition: '通过', title: '锁定镜头与参考资产', text: '保留角色、构图和参数，作为下一镜的连续性输入。' },
          { condition: '身份 / 连续性失败', title: '修订全局约束', text: '调整角色参考、世界规则和不可变化项后重试。' },
          { condition: '运动 / 叙事失败', title: '修订局部镜头变量', text: '调整机位、动作、节奏或负面约束后重新生成。' },
        ],
        feedback: { actor: '创作闭环', title: '把失败原因沉淀为下一轮规则', text: '记录为何淘汰、修改了什么、结果是否改善；已通过镜头继续进入下一镜或最终剪辑。' },
      },
      en: {
        heading: 'How a shot moves from creative intent into controlled iteration',
        summary: 'The flow replaces blind retries with explicit creative decisions: accepted shots become assets for the next scene, while failed shots identify which variable should change and why.',
        stages: [
          { actor: 'Creator', title: 'Define the shot’s narrative job', text: 'State what information, emotion, or action this shot must advance.' },
          { actor: 'Constraint layer', title: 'Lock global invariants', text: 'Fix character identity, first-person viewpoint, world rules, and continuity.' },
          { actor: 'Prompt DSL + model', title: 'Organize variables and generate', text: 'Separate camera, subject, environment, and negative constraints while recording model parameters.' },
        ],
        decision: { actor: 'Creative review', title: 'Does the shot satisfy continuity and narrative purpose?', text: 'Review character, viewpoint, motion, composition, and relation to adjacent shots—not beauty alone.' },
        branches: [
          { condition: 'Pass', title: 'Lock the shot and reference assets', text: 'Carry identity, composition, and parameters into the next shot.' },
          { condition: 'Identity / continuity failure', title: 'Revise global constraints', text: 'Adjust character references, world rules, and invariants before retrying.' },
          { condition: 'Motion / narrative failure', title: 'Revise local shot variables', text: 'Change camera, action, pacing, or negative constraints and regenerate.' },
        ],
        feedback: { actor: 'Creative loop', title: 'Turn failure reasons into rules for the next round', text: 'Record why a candidate failed, what changed, and whether it improved; accepted shots continue to the next scene or final edit.' },
      },
    },
    process: {
      zh: [
        { title: '约束', text: '建立角色与世界规则，明确每一镜不能改变的内容。' },
        { title: '生成', text: '用结构化 Prompt 生成候选片段，记录模型和参数。' },
        { title: '评审', text: '按连续性与叙事作用筛选，修订约束后进入下一轮。' },
      ],
      en: [
        { title: 'Constrain', text: 'Define character and world rules, including what cannot change in each shot.' },
        { title: 'Generate', text: 'Create candidates from structured prompts while recording model and parameters.' },
        { title: 'Review', text: 'Select by continuity and narrative purpose, then revise constraints for the next round.' },
      ],
    },
    evidence: {
      zh: ['完成约 1 分 40 秒的多场景 POV 成片', '形成可复用的 Prompt DSL', '保留从生成、评审到重试的过程记录'],
      en: ['Completed a multi-scene POV film of about 1m40s', 'Developed a reusable prompt DSL', 'Retained a generation–review–retry record'],
    },
    boundary: {
      zh: '这是一套经过单一作品验证的个人工作流，还不是适配不同模型和创作者的通用工具。',
      en: 'This is a personal workflow validated on one finished piece, not yet a general tool across models and creators.',
    },
    next: {
      zh: '把评审标准做成镜头级记录，让下一次创作能复用“为什么重试”，而不只复用 Prompt 文本。',
      en: 'Turn review criteria into shot-level records so future work can reuse why a retry happened, not just the prompt text.',
    },
    tags: ['Generative Video', 'Creative Workflow', 'Consistency'],
    video: {
      url: 'https://www.bilibili.com/video/BV1zPJK6YENK/',
      title: { zh: '“山田小姐今天休息，不在店里哦~”', en: '“Miss Yamada is off today and not in the shop~”' },
    },
    images: [{ src: '/images/aigc-pov.webp', alt: { zh: 'AIGC POV 视频封面画面', en: 'Cover frame from the AIGC POV film' } }],
  },
];

export const profile = {
  email: 'icewaterdundundun@gmail.com',
  x: { label: '@icewaterdundun', url: 'https://x.com/icewaterdundun' },
  intro: {
    zh: '我是 Kylian，空间数据背景，正在做 AI 应用、Agent 评测与工作流产品。我喜欢先看清系统如何运转，再把问题做成可以验证的改动。',
    en: 'I’m Kylian, with a background in spatial data. I work on AI applications, agent evaluation, and workflow products—first understanding how a system moves, then turning the problem into a change that can be tested.',
  },
  aside: {
    zh: '观察一帧，拆开系统，亲手让它运转。',
    en: 'Observe a frame. Unfold the system. Make it move.',
  },
};

export const timeline = {
  experience: [
    {
      date: '2024.06 — 2024.08',
      title: { zh: '高精地图实习生', en: 'High-Definition Map Intern' },
      place: { zh: '天翼交通科技 · 苏州', en: 'Tianyi Transportation Technology · Suzhou' },
      detail: {
        zh: '调研 GeoJSON、OpenDRIVE 等格式边界，实际交付以 SHP/QGIS 道路要素处理、现场变化核验和平台替换测试为主；一次道路变化在三天内完成修正与验证，并制作 QGIS 插件演示与操作文档。',
        en: 'Researched the boundaries of formats including GeoJSON and OpenDRIVE; delivery focused on SHP/QGIS road-element work, field-change verification, and platform replacement tests. One road change was corrected and validated within three days, followed by a QGIS plugin demo and operating guide.',
      },
    },
  ],
  education: [
    {
      date: '2023.09 — 2025.06',
      title: { zh: '地理信息科学与遥感 · 硕士', en: 'MSc, GIS & Remote Sensing' },
      place: { zh: '隆德大学 · 瑞典', en: 'Lund University · Sweden' },
    },
    {
      date: '2019.09 — 2023.07',
      title: { zh: '地理信息科学 · 学士', en: 'BSc, Geographic Information Science' },
      place: { zh: '西北农林科技大学', en: 'Northwest A&F University' },
    },
  ],
  notes: [
    { zh: '数学建模：美赛二等奖、国赛省级一等奖', en: 'Mathematical modeling: MCM Second Prize; provincial First Prize in CUMCM' },
    { zh: '2019–2022 专业二等奖学金', en: 'Second-class academic scholarship, 2019–2022' },
    { zh: '英语：IELTS 7.0 · CET-6 537', en: 'English: IELTS 7.0 · CET-6 537' },
    { zh: 'Side note：为 Codex 做了一只可孵化的桌面宠物', en: 'Side note: built a hatchable desktop pet for Codex', link: 'https://github.com/mogwai911/chen-qianyu-codex-pet' },
  ],
};

export type F1Note = {
  id: string;
  category: Record<Lang, string>;
  title: Record<Lang, string>;
  summary: Record<Lang, string>;
  body: Record<Lang, string[]>;
  sources?: { label: string; url: string }[];
};

export const f1Notes: F1Note[] = [
  {
    id: 'sporting-fairness',
    category: { zh: '赛事', en: 'Sport' },
    title: {
      zh: '胜利只由赛道决定吗？车手、车队与规则如何共同塑造竞技公平',
      en: 'Is victory decided only on track? How drivers, teams, and rules shape sporting fairness',
    },
    summary: {
      zh: 'F1 的公平从来不是让所有人拥有相同的车，而是让差异在一套可预期、可执行的边界里竞争。',
      en: 'Fairness in F1 has never meant identical cars. It means allowing differences to compete within boundaries that are predictable and enforceable.',
    },
    body: {
      zh: [
        '赛车运动天然把个人能力嵌在集体系统里。车手决定轮胎如何被使用、风险何时被承担；工程团队决定他拥有怎样的性能窗口；赛事控制和规则解释又决定哪些风险被允许。于是，终点线上的顺序既是驾驶结果，也是组织能力与制度选择的合成。',
        '争议往往来自三种公平观互相碰撞：车手希望同一场比赛里的裁决一致，车队希望规则足够稳定以支撑长期投入，观众则期待比赛保持不确定性。任何一次安全车、处罚或技术指令，都可能同时改善一种公平、损害另一种公平。',
        '我更愿意把竞技纯粹性理解为“因果关系清晰”：胜负可以受到机械、策略甚至运气影响，但参与者应当事先知道边界，事后也能理解判定。F1 不可能排除政治，却可以让规则的形成和执行更透明。',
      ],
      en: [
        'Motorsport embeds individual skill inside a collective system. A driver determines how tyres are used and when risk is taken; engineers define the performance window available; race control and regulatory interpretation decide which risks are permitted. The finishing order is therefore a composite of driving, organization, and governance.',
        'Controversy often comes from three ideas of fairness colliding. Drivers want consistent decisions within a race, teams need stable rules to justify long-term investment, and audiences want uncertainty. A safety car, penalty, or technical directive can strengthen one kind of fairness while weakening another.',
        'I understand sporting purity as clarity of causality. Mechanical limits, strategy, and luck may all influence victory, but competitors should know the boundaries beforehand and understand decisions afterward. F1 cannot remove politics, but it can make rule-making and enforcement more legible.',
      ],
    },
  },
  {
    id: 'global-business',
    category: { zh: '产业', en: 'Business' },
    title: {
      zh: '当 F1 成为全球生意，赛事还需要为谁服务？',
      en: 'When F1 becomes a global business, who should the championship serve?',
    },
    summary: {
      zh: '转播、办赛与赞助让 F1 扩张，也让赛历、主场和观看方式成为商业选择。增长不是问题，增长如何分配才是。',
      en: 'Broadcasting, race promotion, and sponsorship expand F1 while turning calendars, home races, and viewing access into business choices. Growth is not the problem; its distribution is.',
    },
    body: {
      zh: [
        'F1 的收入结构说明，它既是一项锦标赛，也是一套全球内容与现场体验生意。转播权决定赛事如何抵达观众，办赛费用影响比赛去往哪些城市，广告与赞助则把车队和合作伙伴的品牌诉求带进叙事。三者共同推动扩张，也共同改变“谁是核心用户”。',
        '新市场、新观众和更强的内容产品可以扩大运动的生命力；代价可能是传统赛道承压、现场票价上升、比赛时间更服从全球传播。把怀旧当作唯一标准并不公平，但只用收入增长证明成功也过于简单。',
        '更值得追问的是，增长能否反过来增强比赛本身：让车队生态更健康、让更多观众可负担地接触赛事、让主办地获得长期而非一次性的价值。商业化与竞技纯粹性并非天然对立，关键在于增长的收益是否被重新投入共同的赛道。',
      ],
      en: [
        'F1’s revenue structure shows a championship that is also a global media and live-experience business. Media rights determine how racing reaches audiences, promotion fees influence which cities host it, and sponsorship brings commercial narratives into teams and coverage. Together they drive expansion and redefine who the core customer is.',
        'New markets, audiences, and stronger media products can extend the sport’s life. The costs may include pressure on historic circuits, higher ticket prices, and schedules designed for global distribution. Nostalgia cannot be the only standard, but revenue growth alone is too simple a definition of success.',
        'The better question is whether growth strengthens racing in return: a healthier team ecosystem, more affordable access, and durable value for host communities. Commercialization and sporting purity are not natural enemies. What matters is whether growth is reinvested into the shared track.',
      ],
    },
    sources: [{ label: 'Liberty Media 2025 Annual Report', url: 'https://www.libertymedia.com/investors/financial-information/sec-filings/content/0001104659-26-020653/0001104659-26-020653.pdf' }],
  },
  {
    id: 'technical-boundaries',
    category: { zh: '技术', en: 'Technology' },
    title: {
      zh: '技术规则从来不是中立的：FIA、车队与厂商如何争夺性能边界',
      en: 'Technical rules are never neutral: how the FIA, teams, and manufacturers contest performance boundaries',
    },
    summary: {
      zh: '主动空气动力学与电能管理不是孤立参数，它们重新分配工程自由、车手负担和厂商价值。',
      en: 'Active aerodynamics and energy management are not isolated parameters; they redistribute engineering freedom, driver workload, and manufacturer value.',
    },
    body: {
      zh: [
        '技术规则看似由尺寸、重量和能量数字组成，实质上却在回答一组产业问题：哪种能力值得奖励，哪类成本必须压低，厂商为什么要留下，比赛又怎样保持可理解。每一次取舍都会让某些技术路线变得更有价值。',
        '2026 规则中的主动空气动力学与更高电能占比，把直道效率、能量部署和车手操作重新连接起来。随后针对能量管理等问题的调整，也说明规则不是一次写定的蓝图，而是监管者、车队和动力单元厂商在模拟与反馈中持续协商的系统。',
        '这种协商不必被简单理解为幕后交易。真正需要警惕的是信息和影响力不对称：资源更多的参与者能更早理解边界，也更有能力塑造边界。好的治理不是消灭利益，而是让安全、成本、竞赛质量与技术相关性的权衡留下可以审视的理由。',
      ],
      en: [
        'Technical regulations look like dimensions, weights, and energy figures, but they answer industrial questions: which capabilities deserve reward, which costs must fall, why manufacturers should stay, and how racing remains understandable. Every trade-off makes some engineering paths more valuable than others.',
        'The 2026 framework connects active aerodynamics and a greater electrical share with straight-line efficiency, energy deployment, and driver operation. Later refinements around energy management show that rules are not a one-time blueprint, but a negotiated system shaped by simulations and feedback from regulators, teams, and power-unit manufacturers.',
        'That negotiation should not automatically be dismissed as backroom politics. The deeper risk is asymmetry of information and influence: better-resourced participants can understand boundaries earlier and help shape them. Good governance does not remove interests; it makes the trade-offs among safety, cost, competition, and technical relevance open to scrutiny.',
      ],
    },
    sources: [
      { label: 'FIA — 2026 regulations overview', url: 'https://www.fia.com/news/new-era-competition-fia-showcases-future-focused-formula-1-regulations-2026-and-beyond' },
      { label: 'FIA — 2026 regulations refinements', url: 'https://www.fia.com/news/refinements-2026-fia-formula-1-regulations-agreed-all-stakeholders' },
    ],
  },
];
