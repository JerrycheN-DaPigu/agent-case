/* 模型详情 / 套餐页改版样板（2026-10-12）。
   只接管样板条目：模型 #model~glm-5-3；套餐页 #plan~glm、#plan~jimeng。其他条目返回 null，沿用原页面。
   数据取自 content/ YAML 与《样板方案-模型页工具页套餐页-2026-10-12》，均为设计示意；API 价格全部是示意值。 */
(function () {
  'use strict';
  var S = { budget: 0, asc: true, open: {}, cycle: {} };
  var esc = function (v) { return String(v == null ? '' : v).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };
  var fmt = function (n) { return new Intl.NumberFormat('zh-CN', { maximumFractionDigits: 2 }).format(n); };
  var cur = function (c) { return c === 'USD' ? '$' : '¥'; };
  var ext = function (url, label, cls) { return '<a href="' + esc(url) + '" target="_blank" rel="noopener noreferrer"' + (cls ? ' class="' + cls + '"' : '') + '>' + esc(label) + ' ↗</a>'; };

  /* 使用范围：工具专属 / 厂商 Key */
  var SCOPE = { tool: '工具专属', key: '厂商 Key' };
  var scopeTag = function (s) { return '<span class="kx-scope kx-scope-' + s + '">' + SCOPE[s] + '</span>'; };
  var scopeIntro = '<p class="kx-lead tmz">每个套餐都标了使用范围：工具专属的额度只能在自家工具里用；厂商 Key 会给你 API Key 和 Base URL，能填进多种编程工具。不买套餐也可以按量付费调 API，官方价格见下方同家族表。</p>';

  /* ---------- 套餐家族（套餐页 + 模型页“包月套餐”共用） ---------- */
  var FAM = {
    glm: {
      name: 'GLM Coding Plan', vendor: '智谱', mono: '智', scope: 'key',
      note: '官方列出的 20+ 编程工具可用（Claude Code、Codex、Cursor、OpenCode 等）；自建应用要走标准 API。',
      home: 'https://bigmodel.cn/glm-coding', src: 'bigmodel.cn/glm-coding', verified: '2026-10-06',
      cycles: [['month', '单月'], ['quarter-auto', '连续包季'], ['year-auto', '包年']],
      tiers: [
        { name: 'Lite', tagline: '入门够用', quota: '每 5 小时 2,000 积分 · 每周 10,000 积分',
          prices: { month: { v: 118 }, 'quarter-auto': { v: 94.4, per: '折合每月' }, 'year-auto': { text: '7 折', per: '见官网' } },
          hi: ['包含 GLM-5.3、GLM-5.3 Flash', '调用 GLM-5.2 / 5.1 自动切到 GLM-5.3', '官方列出的 20+ 编程工具可用', '额度按 5 小时和每周两层刷新'], models: ['GLM-5.3', 'GLM-5.3 Flash'] },
        { name: 'Pro', tagline: '主力日用', quota: '每 5 小时 12,000 积分 · 每周 60,000 积分',
          prices: { month: { v: 538 }, 'quarter-auto': { v: 430.4, per: '折合每月' }, 'year-auto': { text: '7 折', per: '见官网' } },
          hi: ['额度为 Lite 的 6 倍', '包含 Lite 的全部权益'], models: ['GLM-5.3', 'GLM-5.3 Flash'] },
        { name: 'Max', tagline: '重度与团队', quota: '每 5 小时 28,000 积分 · 每周 140,000 积分',
          prices: { month: { v: 1078 }, 'quarter-auto': { v: 862.4, per: '折合每月' }, 'year-auto': { text: '7 折', per: '见官网' } },
          hi: ['额度为 Lite 的 14 倍', '高峰期资源保障', '包含 Lite 的全部权益'], models: ['GLM-5.3', 'GLM-5.3 Flash'] }
      ],
      foot: '连续包季、包年按官方页面写法显示，本站不自行折算。',
      review: { by: '天工开物编辑部', date: '2026-10-12', head: '主力用 GLM 写代码就值得买，先从 Lite 试。',
        body: '这是智谱自己的套餐：GLM-5.3 和 Flash 全档都有，调用旧版本会自动切到 5.3，额度按 5 小时和每周两层算，清楚好估。Lite ¥118 / 单月比方舟 Coding Plan Lite（¥40）贵；只想偶尔用、或想在多家模型之间换着用，方舟更划算。确定长期用再选连续包季。' }
    },
    jimeng: {
      name: '即梦会员', vendor: '字节跳动 · 即梦 AI', mono: '即', scope: 'tool', tool: 'jimeng', toolName: '即梦 AI',
      note: '只在即梦网页与 App 里用；积分不能接到别的工具。',
      home: 'https://jimeng.jianying.com/ai-tool/home/', src: 'jimeng.jianying.com', verified: '2026-10-11',
      cycles: [['month', '单月'], ['month-auto', '连续包月'], ['quarter-auto', '连续包季'], ['year', '年付']],
      tiers: [
        { name: '基础会员', quota: '每月 725 积分', prices: { month: { v: 79 }, 'month-auto': { v: 69 }, 'quarter-auto': { v: 188 }, year: { v: 659 } },
          hi: ['Seedance 2.0 VIP', '图片 4.0 / 5.0 Lite / 4.6', '图像 2K 限时免费', '去品牌水印'], models: ['Seedance 2.0', '图片 4.0', '图片 5.0 Lite'] },
        { name: '标准会员', quota: '每月 2,210 积分', prices: { month: { v: 239 }, 'month-auto': { v: 199 }, year: { v: 1899 } },
          hi: ['积分约为基础会员 3 倍', '包含基础会员的全部权益'], models: ['Seedance 2.0', '图片 4.0', '图片 5.0 Lite'] },
        { name: '高级会员', sub: '6,160 积分', quota: '每月 6,160 积分', prices: { month: { v: 649 } },
          hi: ['图片 4.0 另有 4K 限时免费', '快速生成通道', '包含标准会员的全部权益'], models: ['Seedance 2.0', '图片 4.0', '图片 5.0 Lite'] },
        { name: '高级会员', sub: '12,320 积分', quota: '每月 12,320 积分', prices: { 'month-auto': { v: 998 }, year: { first: 5199 } },
          hi: ['图片 4.0 另有 4K 限时免费', '快速生成通道', '年付专享 Seedance 2.5 参考视频'], models: ['Seedance 2.5', 'Seedance 2.0', '图片 4.0'] },
        { name: '超级会员', quota: '每月 54,600 积分', prices: { 'month-auto': { v: 4299 }, year: { first: 19656 } },
          hi: ['积分最高的一档', '快速生成通道', '年付专享 Seedance 2.5 参考视频'], models: ['Seedance 2.5', 'Seedance 2.0', '图片 4.0'] }
      ],
      foot: '“首年”是官方首年优惠价，不作为年付售价；后续价格以官网为准。',
      review: { by: '天工开物编辑部', date: '2026-10-11', head: '常做视频值得买，基础会员就够大多数人用。',
        body: '国内直接能用，基础会员起就有 Seedance 2.0 VIP 和去水印。连续包月比单月便宜 ¥10，确定长期用年付最省。高级以上积分多，适合每天批量出图出视频的创作者；偶尔玩玩先用免费积分，不必急着买。' }
    }
  };
  FAM['trae-cn'] = {
    name: 'TRAE 国内版会员', vendor: '字节跳动', mono: 'T', scope: 'tool', tool: 'trae', toolName: 'TRAE',
    note: '积分只抵 TRAE 国内版内置模型；接自己的 Key 不消耗积分。',
    home: 'https://www.trae.cn/pricing', src: 'trae.cn/pricing', verified: '2026-10-11',
    cycles: [['month', '单月']],
    tiers: [
      { name: 'Lite', quota: '每月 2,000 积分', prices: { month: { v: 49 } }, hi: ['内置 Seed、GLM、DeepSeek、Kimi、MiniMax 等模型', 'GLM-5.3 按 5 折、Seed-2.1-Turbo 按 2.5 折扣积分', '会员签到另得 3,000 积分', '高峰期优先'], models: ['GLM-5.3', 'DeepSeek V4.1 Flash', 'Seed 2.1 Turbo'] },
      { name: 'Pro', quota: '每月 4,000 积分', prices: { month: { v: 99 } }, hi: ['积分为 Lite 的 2 倍', '包含 Lite 的全部权益'], models: ['GLM-5.3', 'DeepSeek V4.1 Flash', 'Seed 2.1 Turbo'] },
      { name: 'Pro+', quota: '每月 12,000 积分', prices: { month: { v: 239 } }, hi: ['积分为 Lite 的 6 倍', '包含 Lite 的全部权益'], models: ['GLM-5.3', 'DeepSeek V4.1 Flash', 'Seed 2.1 Turbo'] },
      { name: 'Ultra', quota: '每月 40,000 积分', prices: { month: { v: 699 } }, hi: ['积分为 Lite 的 20 倍', '包含 Lite 的全部权益'], models: ['GLM-5.3', 'DeepSeek V4.1 Flash', 'Seed 2.1 Turbo'] }
    ],
    foot: '首月优惠不当售价；当前只整理了单月购买价。',
    review: { by: '天工开物编辑部', date: '2026-10-11', head: '国内用图形界面写代码，Lite 是门槛最低的付费起点。', body: 'Lite ¥49 / 单月含 2,000 积分，内置 GLM-5.3、DeepSeek 等国产模型并有折扣，人民币付款、国内直接可用。积分只能在 TRAE 里用，换工具就带不走；如果同时用 Claude Code 等命令行工具，厂商 Key 套餐（如方舟 Coding Plan ¥40 起）更灵活。' }
  };
  var MODEL_LINK = { 'DeepSeek V4.1 Flash': 'deepseek-v4-1-flash', 'Seed 2.1 Turbo': 'seed-2-1-turbo', 'GLM-5.3': 'glm-5-3', 'GLM-5.3 Flash': 'glm-5-3-flash', 'Seedance 2.0': 'seedance-2-0', 'Seedance 2.5': 'seedance-2-5' };
  var modelChip = function (n) { var id = MODEL_LINK[n]; return id ? '<a class="chp kx-mchip" href="#model~' + id + '">' + esc(n) + '</a>' : '<span class="chp kx-mchip">' + esc(n) + '</span>'; };

  /* ---------- 模型样板：GLM-5.3 ---------- */
  var MODELS = {
    'glm-5-3': {
      name: 'GLM-5.3', vendor: '智谱', vendorMono: '智', type: '语言', verified: '2026-10-08',
      tagline: '智谱旗舰。复杂编程与长任务明显更强，开放权重。',
      tags: ['开放权重', '复杂编程', '长任务'],
      arena: { score: 1471, lo: 1466, hi: 1477, rank: 26, total: 413, date: '2026-10-07' },
      intro: 'GLM-5.3 是智谱 2026 年 8 月发布的旗舰语言模型，与 GLM-5.2 共用基座，提升全部来自后训练；开放权重，可在 Hugging Face 下载自部署。Arena 语言榜 1471 分、第 26 名（2026-10-07）。适合复杂编程与多步骤长任务，国内可经多家 Coding Plan 在编程工具中使用。',
      plans: [
        { fam: 'ark', name: '方舟 Coding Plan', vendor: '火山引擎', mono: '方', scope: 'key', note: '仅限编程工具使用，不能当 API 调用。', cycle: '单月', cur: 'CNY',
          tiers: [['Lite', 40, '5 小时窗口 + 周 + 月限额'], ['Pro', 200, 'Lite 的 5 倍用量']], href: '#plan~ark~lite~glm-5-3' },
        { fam: 'glm', name: 'GLM Coding Plan', vendor: '智谱', mono: '智', scope: 'key', note: '官方列出的 20+ 编程工具可用；自建应用要走标准 API。', cycle: '单月', cur: 'CNY',
          tiers: [['Lite', 118, '每 5 小时 2,000 积分'], ['Pro', 538, '每 5 小时 12,000 积分'], ['Max', 1078, '每 5 小时 28,000 积分']], href: '#plan~glm~~glm-5-3' },
        { fam: 'trae-cn', name: 'TRAE 国内版会员', vendor: '字节跳动', mono: 'T', scope: 'tool', note: '只在 TRAE 里用；内置 GLM-5.3 付费档按 5 折消耗积分。', cycle: '单月', cur: 'CNY',
          tiers: [['Lite', 49, '每月 2,000 积分'], ['Pro', 99, '每月 4,000 积分'], ['Pro+', 239, '每月 12,000 积分'], ['Ultra', 699, '每月 40,000 积分']], href: '#plan~trae-cn~~glm-5-3' },
        { fam: 'workbuddy', name: 'WorkBuddy 会员', vendor: '腾讯', mono: 'W', scope: 'tool', note: '只在 WorkBuddy 与 CodeBuddy 里用，两者共享积分。', cycle: '单月', cur: 'CNY',
          tiers: [['标准版', 99, '每月 2,000 基础积分'], ['高级版', 199, '每月 4,000 基础积分'], ['旗舰版', 999, '每月 20,000 基础积分']], href: '#tool~workbuddy' }
      ],
      family: [
        { n: 'GLM-5.3 Prime', id: 'glm-5-3-prime', pos: 'GLM-5.3 的高速版，能力相同，输出快 1.5～2 倍，1M 上下文', inp: 6, out: 24 },
        { n: 'GLM-5.3', id: 'glm-5-3', pos: '旗舰 · 复杂编程与长任务', inp: 4, out: 16, self: true },
        { n: 'GLM-5.3 Flash', id: 'glm-5-3-flash', pos: '原生多模态轻量模型，开放权重', inp: 0.5, out: 2 },
        { n: 'GLM-5.3 FlashX', id: 'glm-5-3-flashx', pos: 'Flash 的高速版，最高约 200 tokens/s', inp: 1, out: 4 }
      ],
      archive: [
        ['官方介绍页', ext('https://huggingface.co/zai-org/GLM-5.3', 'huggingface.co/zai-org/GLM-5.3')],
        ['套餐价格出处', '各套餐官方定价页，套餐页里逐条附链接'],
        ['API 价格出处', '只取模型厂商官方 API 价格页（智谱开放平台），不列第三方平台'],
        ['Arena 评分', 'Arena（arena.ai）排行榜数据集，CC BY 4.0，取数 2026-10-07'],
        ['核实日期', '基础信息 2026-10-08 · 套餐价格 2026-10-06']
      ]
    }
  };
  var BUDS = [[0, '不限'], [50, '¥50 以内'], [100, '¥100 以内'], [200, '¥200 以内'], [201, '¥200 以上']];

  var sec = function (title, note, extra, demo) {
    return '<div class="sec-h"><div style="display:flex;align-items:baseline;gap:14px;flex-wrap:wrap"><h2>' + esc(title) + '</h2>' + (demo ? '<span class="kx-demo">示意数据</span>' : '') + (note ? '<span class="mute" style="font-size:14px">' + note + '</span>' : '') + '</div>' + (extra || '') + '</div>';
  };

  var modelHTML = function (id, ctx) {
    var m = MODELS[id]; if (!m) return null;
    var a = m.arena;
    var head = '<div class="wrap"><div class="crumb"><a href="#models">模型</a> / ' + esc(m.vendor) + ' / ' + esc(m.name) + '</div>' +
      '<div class="dh"><div class="tt"><div class="tile" style="width:72px;height:72px;font-size:32px">' + esc(m.vendorMono) + '</div><div><h1>' + esc(m.name) + '</h1>' +
      '<div class="mute" style="font-size:16px;margin-top:6px">' + esc(m.tagline) + '</div>' +
      '<div class="kx-tags">' + m.tags.map(function (t) { return '<span class="pill-s">' + esc(t) + '</span>'; }).join('') + '</div></div></div>' +
      '<div class="eyebrow">核实于 ' + m.verified + '</div></div>' +
      '<div class="kx-arena tmz"><span class="k">Arena 评分</span><b class="mono">' + a.score + '</b><span class="mono mute">' + a.lo + '–' + a.hi + '</span><span>语言榜第 ' + a.rank + ' / ' + a.total + '</span><span class="mute">来源 Arena（arena.ai）· 取于 ' + a.date + '</span></div></div>';

    var intro = '<div class="wrap"><div class="kx-intro kx-intro1 tmz"><div class="kx-k">简介</div><p class="kx-p">' + esc(m.intro) + '</p></div></div>';

    var K = window.KAIWU_1013; var deals = K ? '<div class="wrap">' + K.bar(K.forModel(m.name)) + '</div>' : '';

    /* 怎么用上它：① 包月套餐 */
    var B = S.budget;
    var rows = m.plans.map(function (p) { var lo = Math.min.apply(null, p.tiers.map(function (t) { return t[1]; })); return { p: p, lo: lo }; })
      .filter(function (x) { return B === 0 ? true : (B === 201 ? x.lo > 200 : x.lo <= B); })
      .sort(function (a, b) { return S.asc ? a.lo - b.lo : b.lo - a.lo; });
    var planRows = rows.map(function (x) {
      var p = x.p, open = !!S.open[p.fam];
      var hi = Math.max.apply(null, p.tiers.map(function (t) { return t[1]; }));
      return '<div class="kx-prow' + (open ? ' on' : '') + '"><div class="kx-pl">' +
        '<a class="kx-pname" href="' + p.href + '"><span class="tile" style="width:36px;height:36px">' + esc(p.mono) + '</span><span><b>' + esc(p.name) + (K && K.forPlan(p.fam).length ? ' <span class="kw-dealtag">当前福利</span>' : '') + '</b><span class="mute">' + esc(p.vendor) + ' · ' + p.tiers.length + ' 档</span></span></a>' +
        '<div>' + scopeTag(p.scope) + '<div class="kx-note">' + esc(p.note) + '</div></div>' +
        '<div class="kx-from"><span class="mono">' + cur(p.cur) + fmt(x.lo) + '</span> 起<div class="mute">' + esc(p.cycle) + ' · ' + cur(p.cur) + fmt(x.lo) + '–' + fmt(hi) + '</div></div>' +
        '<button class="kx-tg" data-kx="open" data-v="' + p.fam + '" aria-expanded="' + open + '">' + (open ? '收起' : '各档') + ' <span>' + (open ? '−' : '+') + '</span></button></div>' +
        (open ? '<div class="kx-tiers fadein">' + p.tiers.map(function (t) { return '<div><span class="mono mute">' + esc(t[0]) + '</span><b class="mono">' + cur(p.cur) + fmt(t[1]) + '<small> / ' + esc(p.cycle) + '</small></b><span class="mute">' + esc(t[2]) + '</span></div>'; }).join('') + '<a class="btn-o" href="' + p.href + '">看套餐页 →</a></div>' : '') + '</div>';
    }).join('');
    var bud = BUDS.map(function (b) { return '<button class="chip' + (B === b[0] ? ' on' : '') + '" data-kx="bud" data-v="' + b[0] + '">' + b[1] + '</button>'; }).join('');
    var plansBlock = '<div class="kx-group"><div class="kx-gh"><h3>包月套餐</h3><span class="mute">' + m.plans.length + ' 家 · 按月付固定费用，额度用完等周期刷新</span></div>' +
      '<div class="fbar"><span class="grp"><span class="fl">月预算</span>' + bud + '</span><span class="mute" style="margin-left:auto">' + (B ? '显示 ' + rows.length + ' / ' + m.plans.length + ' · <button data-kx="bud" data-v="0" style="text-decoration:underline">清除</button>' : '按起价排序') + '</span></div>' +
      '<div class="kx-ph"><div>套餐</div><div>使用范围</div><div>起价 · 购买方式</div><div></div></div>' +
      (planRows || '<div class="kx-empty mute">这个预算内没有套餐，放宽一下预算。</div>') + '</div>';

    var how = '<div class="wrap" style="padding-top:56px">' + sec('怎么用上它', '', '<button class="chip on" data-kx="sort">按起价 ' + (S.asc ? '↑' : '↓') + '</button>') + scopeIntro + plansBlock + '</div>';

    var showApi = m.family.some(function (f) { return f.inp != null; });
    var fam = '<div class="wrap" style="padding-top:56px">' + sec('同家族怎么选', '名字只差后缀，先看定位和官方 API 价格', '', showApi) +
      '<div class="kx-fam kx-fam-h"><div>型号</div><div>定位</div>' + (showApi ? '<div>官方 API 价格（输入 / 输出）<br><span style="letter-spacing:0">智谱开放平台 · 元 / 百万 tokens</span></div>' : '') + '</div>' +
      m.family.map(function (f) {
        return '<a class="kx-fam' + (f.self ? ' self' : '') + '" href="#model~' + f.id + '"><div><b>' + esc(f.n) + '</b>' + (f.self ? ' <span class="pill-s">本页</span>' : '') + '</div><div class="mute">' + esc(f.pos) + '</div>' + (showApi ? '<div class="mono">' + (f.inp != null ? '¥' + fmt(f.inp) + ' / ¥' + fmt(f.out) : '') + '</div>' : '') + '</a>';
      }).join('') + '</div>';

    var arch = '<div class="wrap" style="padding-top:56px">' + sec('模型档案') + '<div style="border-top:2px solid var(--fg)">' + m.archive.map(function (k) { return '<div class="kv"><div class="mute">' + k[0] + '</div><div>' + k[1] + '</div></div>'; }).join('') + '</div></div>';

    return ctx.nav + head + intro + deals + how + fam + (ctx.reviews || '') + arch + '<div class="wrap kx-src" style="padding-top:28px">设计样板 · 内容为示意，以飞书与 content/ YAML 为准。</div>' + ctx.footer;
  };

  /* ---------- 套餐页 ---------- */
  var planHTML = function (key, from, ctx) {
    var f = FAM[key]; if (!f) return null;
    var cyc = S.cycle[key] || f.cycles[0][0];
    var cycName = f.cycles.filter(function (c) { return c[0] === cyc; })[0][1];
    var fromName = from && MODELS[from] ? MODELS[from].name : '';
    var crumb = f.tool ? '<a href="#tools">工具</a> / <a href="#tool~' + f.tool + '">' + esc(f.toolName || '即梦 AI') + '</a> / ' : '<a href="#models">模型</a> / ' + (fromName ? '<a href="#model~' + from + '">' + esc(fromName) + '</a> / ' : '');
    var head = '<div class="wrap"><div class="crumb">' + crumb + esc(f.name) + '</div>' +
      '<div class="dh"><div class="tt"><div class="tile" style="width:72px;height:72px;font-size:32px">' + esc(f.mono) + '</div><div><h1>' + esc(f.name) + '</h1>' +
      '<div class="mute" style="font-size:16px;margin-top:6px">' + esc(f.vendor) + ' · ' + f.tiers.length + ' 个档位</div></div></div>' +
      '<div class="kx-hr">' + ext(f.home, '官网', 'btn-o') + '<span class="eyebrow">核实于 ' + f.verified + '</span></div></div>' +
      '<div class="kx-scoperow tmz">' + scopeTag(f.scope) + '<span>' + esc(f.note) + '</span><span class="mute kx-sr-k">使用范围</span></div></div>';
    var seg = f.cycles.length < 2 ? '' : '<div class="kx-seg" role="group" aria-label="购买方式">' + f.cycles.map(function (c) { return '<button data-kx="cycle" data-g="' + key + '" data-v="' + c[0] + '" class="' + (c[0] === cyc ? 'on' : '') + '" aria-pressed="' + (c[0] === cyc) + '">' + c[1] + '</button>'; }).join('') + '</div>';
    var cards = f.tiers.map(function (t) {
      var p = t.prices[cyc];
      var price;
      if (p && p.v != null) price = '<div class="kx-price"><span class="big-p">' + '¥' + fmt(p.v) + '</span></div><div class="kx-pm">' + esc(cycName) + (p.per ? ' · ' + esc(p.per) : '') + '</div>';
      else if (p && p.text) price = '<div class="kx-price"><span class="kx-ptext">' + esc(p.text) + '</span></div><div class="kx-pm">' + esc(cycName) + (p.per ? ' · ' + esc(p.per) : '') + '</div>';
      else if (p && p.first) price = '<div class="kx-price"><span class="kx-na">该方式不提供</span></div><div class="kx-pm">官方有首年优惠价 ¥' + fmt(p.first) + '</div>';
      else price = '<div class="kx-price"><span class="kx-na">该方式不提供</span></div><div class="kx-pm">&nbsp;</div>';
      return '<div class="kx-tier' + (p && !p.first ? '' : ' off') + '"><div class="kx-tn mono">' + esc(t.name) + (t.sub ? ' <span class="mute">· ' + esc(t.sub) + '</span>' : '') + '</div>' + price +
        (t.tagline ? '<div class="kx-tl">' + esc(t.tagline) + '</div>' : '') +
        '<div class="kx-q">' + esc(t.quota) + '</div>' +
        '<ul class="kx-ul">' + t.hi.slice(0, 5).map(function (h) { return '<li>' + esc(h) + '</li>'; }).join('') + '</ul>' +
        '<div class="kx-mc">' + t.models.map(modelChip).join('') + '</div></div>';
    }).join('');
    var rv = f.review ? '<div class="wrap" style="padding-top:28px"><div class="kx-review"><div class="kx-rv-l"><span class="kx-k">编辑点评</span><span class="kx-rv-by">' + esc(f.review.by) + '<br>' + esc(f.review.date) + '</span></div><div><div class="kx-rv-h">' + esc(f.review.head) + '</div><p class="kx-p">' + esc(f.review.body) + '</p></div></div></div>' : '';
    var body = rv + '<div class="wrap" style="padding-top:36px">' + seg + '<div class="kx-tiers-row" style="--n:' + f.tiers.length + '">' + cards + '</div>' +
      '<div class="kx-foot"><span>' + esc(f.foot) + '</span><span>价格出处 ' + ext(f.home, f.src) + '</span></div>' + (window.KAIWU_1013 ? window.KAIWU_1013.cards(window.KAIWU_1013.forPlan(key), '和这个套餐相关 · 到期自动隐藏') : '') + '</div>';
    return ctx.nav + head + body + '<div class="wrap kx-src" style="padding-top:40px">设计样板 · 档位、价格与权益为示意，以飞书截图与官网为准；不显示库存、超额、退款与续费规则。</div>' + ctx.footer;
  };

  window.KAIWU_MODEL_PLAN = { model: modelHTML, plan: planHTML };
  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-kx]'); if (!b) return;
    var k = b.getAttribute('data-kx'), v = b.getAttribute('data-v');
    if (k === 'bud') S.budget = Number(v);
    else if (k === 'sort') S.asc = !S.asc;
    else if (k === 'open') S.open[v] = !S.open[v];
    else if (k === 'cycle') S.cycle[b.getAttribute('data-g')] = v;
    else return;
    window.dispatchEvent(new CustomEvent('kaiwu:tool-detail-refresh'));
  });
})();
