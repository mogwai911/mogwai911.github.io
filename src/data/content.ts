export type Lang = 'zh' | 'en';

export type ProjectCase = {
  slug: string;
  number: string;
  year: string;
  title: string;
  eyebrow: Record<Lang, string>;
  summary: Record<Lang, string>;
  question: Record<Lang, string>;
  role: Record<Lang, string>;
  decisions: Record<Lang, string[]>;
  process: Record<Lang, { title: string; text: string }[]>;
  evidence: Record<Lang, string[]>;
  boundary: Record<Lang, string>;
  next: Record<Lang, string>;
  tags: string[];
  link?: string;
  images?: { src: string; alt: Record<Lang, string> }[];
};

export const projects: ProjectCase[] = [
  {
    slug: 'fomo-firewall',
    number: '01',
    year: '2026',
    title: 'FOMO Firewall',
    eyebrow: { zh: '信息分诊 · 产品判断', en: 'Information triage · Product judgment' },
    summary: {
      zh: '把“我应该读什么”从无底洞式收藏，改写成一次可解释、可改判的分诊。',
      en: 'Turning the endless backlog of “what should I read?” into an explainable triage decision that can be revised.',
    },
    question: {
      zh: '信息过载真正消耗的不是阅读时间，而是每一次“这值得我现在投入吗”的判断成本。怎样让系统帮助决策，同时保留人的最终裁量？',
      en: 'Information overload is less about reading time than the repeated cost of deciding what deserves attention now. How can a system assist that decision while leaving final judgment with the reader?',
    },
    role: {
      zh: '独立完成问题定义、交互路径、分诊逻辑、记忆分层与验证设计。',
      en: 'I independently shaped the problem, interaction path, triage logic, layered memory, and validation design.',
    },
    decisions: {
      zh: [
        '选择 RSS 作为稳定入口，避免把精力耗在脆弱的抓取能力上。',
        '将结果限制为“去学习 / 稍后看 / 忽略”三种动作，让输出直接进入下一步。',
        '把改判率设为核心信号：系统的价值不是猜中，而是减少无意义判断。',
      ],
      en: [
        'Used RSS as a stable input instead of investing in brittle scraping.',
        'Constrained output to Learn / Later / Ignore so every result leads to an action.',
        'Made override rate the core signal: value comes from reducing pointless decisions, not pretending to be infallible.',
      ],
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
    eyebrow: { zh: 'Agent 诊断 · 评估系统', en: 'Agent diagnostics · Evaluation system' },
    summary: {
      zh: '当 Agent 只完成了 35% 的任务，比“再试一次”更重要的是知道它究竟在哪里失败。',
      en: 'When an agent completes only 35% of tasks, knowing where it failed matters more than simply trying again.',
    },
    question: {
      zh: '终端任务的失败轨迹冗长、原因交叠，单一成功率无法指导下一轮优化。怎样把失败变成可以复核、聚合和行动的诊断证据？',
      en: 'Terminal-task traces are long and failure causes overlap. A single success rate cannot guide improvement. How can failures become reviewable, aggregatable, actionable evidence?',
    },
    role: {
      zh: '负责失败样本分析、分类框架、证据链设计、LLM-as-Judge 流程与人机一致性验证。',
      en: 'I worked on failure analysis, taxonomy, evidence-chain design, the LLM-as-Judge flow, and human–model agreement validation.',
    },
    decisions: {
      zh: [
        '先人工拆解 46 条失败轨迹，再形成 L1/L2 分类，而不是让模型直接发明标签。',
        '每个结论必须绑定轨迹证据和置信度，避免“看起来合理”的空诊断。',
        '对低置信度和冲突结果设置仲裁，使自动化承担筛选而不是假装替代人。',
      ],
      en: [
        'Manually decomposed 46 failed traces before deriving an L1/L2 taxonomy instead of asking a model to invent labels.',
        'Bound every conclusion to trace evidence and confidence to prevent plausible but empty diagnoses.',
        'Escalated low-confidence and conflicting results so automation filters work rather than impersonating final judgment.',
      ],
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
    eyebrow: { zh: 'GIS · RAG · Multi-Agent', en: 'GIS · RAG · Multi-Agent' },
    summary: {
      zh: '让自然语言进入 GIS 工作流，但把数据选择、代码生成、执行与验证拆成可追踪的步骤。',
      en: 'Bringing natural language into GIS workflows while keeping data selection, code generation, execution, and validation traceable.',
    },
    question: {
      zh: 'GIS 自动化不只需要生成代码：错误的数据、坐标系和工具选择都可能让“能运行”变成“答案错误”。怎样让 Agent 理解任务边界并留下验证路径？',
      en: 'GIS automation is not only code generation. Wrong data, projections, or tools can turn runnable code into a wrong answer. How can an agent understand task boundaries and leave a validation trail?',
    },
    role: {
      zh: '聚焦 RAG 知识库、任务数据、评估分析，以及从自然语言到代码生成的路径设计；项目为协作研究。',
      en: 'I focused on the RAG knowledge base, task data, evaluation analysis, and the path from natural language to generated code within a collaborative research project.',
    },
    decisions: {
      zh: [
        '把文件与工具选择独立出来，降低模型直接猜测数据语义的风险。',
        '用 RAG 提供任务相关的 GIS 知识和代码上下文，而不是无限扩大 Prompt。',
        '保留执行、报错、修复与结果评估链路，让失败可以被定位。',
      ],
      en: [
        'Separated file and tool selection to reduce the risk of guessing data semantics.',
        'Used RAG for task-relevant GIS knowledge and code context rather than expanding prompts indefinitely.',
        'Preserved execution, error, repair, and evaluation stages so failures remain diagnosable.',
      ],
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
      zh: ['35 个 GIS 任务用于评估', '相对基线 CodeBLEU 提升 78.3%', '平均约 5 分钟完成一个任务'],
      en: ['Evaluated on 35 GIS tasks', '78.3% CodeBLEU improvement over baseline', 'About five minutes per task on average'],
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
    eyebrow: { zh: '创作工具 · Prompt DSL', en: 'Creative tools · Prompt DSL' },
    summary: {
      zh: '把一支多场景 POV 视频从“不断抽卡”，转化为角色、镜头与约束都可追踪的创作流程。',
      en: 'Turning a multi-scene POV video from repeated random generation into a traceable workflow of character, camera, and constraints.',
    },
    question: {
      zh: '生成式视频的困难不是得到一段漂亮画面，而是在跨镜头叙事中维持角色、视角与世界规则。怎样让审美判断变成可复用的创作结构？',
      en: 'The hard part of generative video is not producing one beautiful clip, but preserving character, viewpoint, and world rules across scenes. How can aesthetic judgment become a reusable creative structure?',
    },
    role: {
      zh: '独立完成叙事拆解、Prompt DSL、角色参考体系、生成评审与迭代编排。',
      en: 'I independently developed the narrative breakdown, prompt DSL, character-reference system, generation review, and iteration flow.',
    },
    decisions: {
      zh: [
        '先固定人物身份、视角与不可变化项，再描述单镜头动作。',
        '将 Prompt 拆成镜头、主体、环境、连续性和负面约束，减少隐含假设。',
        '把失败片段按一致性、运动、构图和叙事功能复盘，而不是只凭“像不像”。',
      ],
      en: [
        'Locked identity, viewpoint, and invariants before describing scene-specific action.',
        'Split prompts into camera, subject, environment, continuity, and negative constraints to reduce hidden assumptions.',
        'Reviewed failed clips by consistency, motion, composition, and narrative function instead of a single similarity judgment.',
      ],
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
    images: [{ src: '/images/aigc-pov.webp', alt: { zh: 'AIGC POV 视频封面画面', en: 'Cover frame from the AIGC POV film' } }],
  },
];

export const profile = {
  email: 'icewaterdundundun@gmail.com',
  x: { label: '@icewaterdundun', url: 'https://x.com/icewaterdundun' },
  intro: {
    zh: '从 GIS、Agent 到创作工具，我持续探索如何让复杂系统变得自然、可理解、可验证。',
    en: 'From GIS and agents to creative tools, I explore how complex systems can become intuitive, understandable, and verifiable.',
  },
  aside: {
    zh: '我关心工具怎样帮助人形成判断，而不是只替人生成答案。',
    en: 'I care about tools that help people form judgment, not merely generate answers for them.',
  },
};

export const timeline = {
  experience: [
    {
      date: '2024.06 — 2024.08',
      title: { zh: '高精地图实习生', en: 'High-Definition Map Intern' },
      place: { zh: '天翼交通科技 · 苏州', en: 'Tianyi Transportation Technology · Suzhou' },
      detail: {
        zh: '使用 GeoJSON、OpenDRIVE 与 QGIS 处理道路变化核查和平台替换测试；将一次现场变更在三天内完成修正与验证，并制作 QGIS 插件演示与文档。',
        en: 'Worked with GeoJSON, OpenDRIVE, and QGIS on road-change verification and platform replacement tests; corrected and validated one field change within three days, and produced a QGIS plugin demo and documentation.',
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
