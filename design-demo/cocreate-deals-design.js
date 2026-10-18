/* 共创页、当前福利卡片、编辑首选公共栏（2026-10-13 设计样板）。
   案例全部为示意（封面、视频借用现有素材）；福利 8 条取自 content/deals 未下架的 YAML，落点按统筹简报。 */
(function () {
  'use strict';
  var esc = function (v) { return String(v == null ? '' : v).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };
  var ext = function (url, label, cls) { return '<a href="' + esc(url) + '" target="_blank" rel="noopener noreferrer"' + (cls ? ' class="' + cls + '"' : '') + '>' + esc(label) + ' ↗</a>'; };
  var TODAY = new Date(2026, 9, 13);
  var S = { cat: '全部' };

  /* ---------- 当前福利 ---------- */
  /* land：落点（plan = 套餐家族页，tool = 工具页）；models / tools：系统据此推算列表上的“当前福利”标记 */
  var DEALS = [
    { id: 'trae-cn-new-user-4500-credits', short: 'TRAE 国内版新用户送 4,500 积分', type: '免费额度', cond: '新用户注册 TRAE 国内版账号', when: '官方未写截止',
      steps: ['到 trae.cn 下载客户端', '注册新账号，积分自动到账'], url: 'https://www.trae.cn/', land: { kind: 'plan', fam: 'trae-cn', tool: 'trae', group: 'trae-cn' },
      models: ['GLM-5.3', 'DeepSeek V4.1 Flash', 'Seed 2.1 Turbo'], tools: ['trae'] },
    { id: 'doubao-work-30-day-subscription', short: '豆包工作限时免费领 30 天订阅', type: '折扣', cond: '下载并登录豆包桌面版 / 豆包工作', when: '限时活动 · 官方未写截止',
      steps: ['打开 doubao.com/work 下载桌面版', '登录后在活动入口领取'], url: 'https://www.doubao.com/work', land: { kind: 'tool', tool: 'doubao-work' },
      models: [], tools: ['doubao-work'] },
    { id: 'aliyun-bailian-new-user-free-quota', short: '百炼新人每个模型 100 万 Token', type: '免费额度', cond: '首次开通阿里云百炼（北京地域）', when: '开通起 90 天',
      steps: ['开通百炼并同意协议，额度自动发放', '在模型广场选带额度的模型，创建 API Key'], url: 'https://bailian.console.aliyun.com/', land: { kind: 'plan', fam: 'bailian' },
      models: ['Qwen3.8 Max', 'Qwen3.8 27B', 'Qwen3.8 Flash'], tools: ['qianwen-office'] },
    { id: 'github-student-developer-pack', short: '学生免费用 GitHub Copilot Student', type: '折扣', cond: '通过 GitHub Education 学生验证', when: '在读期间',
      steps: ['在 education.github.com/pack 申请', '验证通过后在账号里领取'], url: 'https://education.github.com/pack', land: { kind: 'plan', fam: 'github-copilot' },
      models: [], tools: ['github-copilot'] },
    { id: 'google-ai-pro-student-free-year', short: '学生免费用 Google AI Pro 1 年', type: '折扣', cond: '符合资格的在读学生；需绑定支付方式', deadline: '2026-12-31',
      steps: ['在 gemini.google/students 验证学生身份', '绑定支付方式后领取；到期前不取消会自动续订'], url: 'https://gemini.google/students/', land: { kind: 'plan', fam: 'google-ai' },
      models: ['Gemini 4 Argon', 'Gemini 3.8 Flash'], tools: ['antigravity'] },
    { id: 'kimi-new-user-15-cny-voucher', short: 'Kimi 开放平台新用户 15 元代金券', type: '免费额度', cond: '国内注册并完成实名认证', when: '一次性 · 官方未写截止',
      steps: ['注册 platform.moonshot.cn', '完成实名认证后自动到账'], url: 'https://platform.moonshot.cn/', land: { kind: 'plan', fam: 'kimi-code' },
      models: ['Kimi K3'], tools: [] },
    { id: 'opencode-zen-free-models', short: 'OpenCode Zen 部分模型限时免费', type: '限时免费模型', cond: '注册 OpenCode Zen 账号', when: '限时 · 官方未写截止',
      steps: ['注册 Zen 账号', '模型名用带 -free 后缀的 ID'], url: 'https://opencode.ai/zen', land: { kind: 'plan', fam: 'opencode-go' },
      models: ['Step 5 Preview', 'MiMo-V2.6-Flash'], tools: ['opencode'] },
    { id: 'qwenwork-new-user-credits', short: '千问办公新用户送 2,000 积分', type: '免费额度', cond: '用钉钉账号或手机号注册', when: '注册起 90 天',
      steps: ['在 qwenwork.cn 注册', '每日登录另送 100 积分（当日有效）'], url: 'https://qwenwork.cn/', land: { kind: 'plan', fam: 'qianwen-work' },
      models: [], tools: ['qianwen-office'] }
  ];
  var daysLeft = function (d) { return d.deadline ? Math.ceil((new Date(d.deadline + 'T00:00:00') - TODAY) / 86400000) : null; };
  var live = function () { return DEALS.filter(function (d) { var n = daysLeft(d); return n === null || n >= 0; }); };
  var whenHTML = function (d) {
    var n = daysLeft(d);
    if (n === null) return '<span class="kd-when">' + esc(d.when) + '</span>';
    return '<span class="kd-when' + (n <= 7 ? ' hot' : '') + '">剩 ' + n + ' 天 · ' + d.deadline.slice(5) + ' 截止</span>';
  };
  /* 落点链接：套餐页的福利卡片锚点，或工具页的福利卡片锚点 */
  var landHref = function (d) { return d.land.kind === 'tool' ? '#tool~' + d.land.tool + '~deals' : '#plan~' + d.land.fam + '~deals'; };

  /* 福利卡片（一条一行，写简短）：类型 + 有效期 | 一句话权益、条件、两步领取 | 官方链接 */
  var cardsHTML = function (list, note) {
    if (!list.length) return '';
    return '<div class="kd" id="kw-deals"><div class="kd-h"><h3>当前福利</h3><span class="mute">' + (note || '到期自动隐藏') + '</span></div>' +
      list.map(function (d) {
        return '<div class="kd-row"><div class="kd-l"><span class="kd-type">' + esc(d.type) + '</span>' + whenHTML(d) + '</div>' +
          '<div class="kd-m"><b>' + esc(d.short) + '</b><span class="mute">条件：' + esc(d.cond) + '</span>' +
          '<ol class="kd-steps">' + d.steps.map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('') + '</ol></div>' +
          '<div class="kd-r">' + ext(d.url, '官方页面', 'btn-o') + '</div></div>';
      }).join('') + '</div>';
  };
  /* 顶部“当前福利”条：模型页、工具页用，点一条跳到落点卡片 */
  var barHTML = function (list, inPage) {
    if (!list.length) return '';
    return '<div class="kx-dealbar"><span class="kx-dl">当前福利</span>' + list.map(function (d) {
      var n = daysLeft(d);
      return '<a href="' + (inPage ? '#' + inPage : landHref(d)) + '"' + (inPage ? ' data-kd-jump="1"' : '') + '><b>' + esc(d.short) + '</b><span class="kx-when' + (n !== null && n <= 7 ? ' hot' : '') + '">' + (n === null ? esc(d.when.split(' · ')[0]) : '剩 ' + n + ' 天') + '</span><span class="kx-go">→</span></a>';
    }).join('') + '</div>';
  };
  var forModel = function (name) { return live().filter(function (d) { return d.models.indexOf(name) >= 0; }); };
  var forPlan = function (fam) { return live().filter(function (d) { return d.land.kind === 'plan' && d.land.fam === fam; }); };
  /* 工具页：落在这个工具上的，加上落在这个工具自带套餐上的（套餐卡片在工具页也展示） */
  var forTool = function (id, group) { return live().filter(function (d) { return (d.land.kind === 'tool' && d.land.tool === id) || (d.land.kind === 'plan' && d.land.group && d.land.group === group); }); };
  var toolFlag = function (id) { return live().some(function (d) { return d.tools.indexOf(id) >= 0; }); };
  var modelFlag = function (name) { return live().some(function (d) { return d.models.indexOf(name) >= 0; }); };

  /* ---------- 编辑首选公共栏（共创 / 模型 / 工具 / 比赛四页同一组） ---------- */
  var picksHTML = function (guides) {
    if (!guides || !guides.length) return '';
    return '<div class="wrap kp-wrap"><div class="sec-h"><div style="display:flex;align-items:baseline;gap:16px;flex-wrap:wrap"><h2>编辑首选</h2><span class="mute" style="font-size:14px">按场景写给新手的推荐 · 编辑署名</span></div></div>' +
      '<div class="kp" style="--n:' + Math.min(guides.length, 4) + '">' + guides.slice(0, 4).map(function (g) {
        return '<a href="#guide~' + g.id + '"><span class="kp-sc">' + esc(g.sc) + '</span><b>' + esc(g.t) + '</b><span class="mute">' + esc(g.sum) + '</span><span class="kp-d">复核于 ' + esc(g.rev) + '</span></a>';
      }).join('') + '</div></div>';
  };

  /* 页头右上角版（用户 10-13：只挂在模型页、共创页的右上角） */
  var picksAside = function (guides) {
    if (!guides || !guides.length) return '';
    return '<div class="kp-side"><div class="kp-sh"><b>编辑首选</b><small>按场景写给新手 · 编辑署名</small></div>' +
      guides.slice(0, 4).map(function (g) { return '<a href="#guide~' + g.id + '"><span class="kp-sc">' + esc(g.sc) + '</span><span class="kp-t">' + esc(g.t) + '</span><span class="kp-go">→</span></a>'; }).join('') + '</div>';
  };

  /* ---------- 公告栏（共创 / 比赛 / 模型三页页头右上角，约 480×360）----------
     结构借 MiniMax 首屏：每个板块一屏，自带配图 + 大标题 + 3 张小卡，底部进度短线自动轮播；配色走本站（深色玻璃，强调色只给 7 天内截止）。
     数据驱动：sections 里加一项就多一个板块；没有条目的板块不显示。glass: true 时不用配图（比赛页页头本身是整幅图） */
  var IC = {
    guide: '<path d="M3 5h6a3 3 0 0 1 3 3v12a2 2 0 0 0-2-2H3z"/><path d="M21 5h-6a3 3 0 0 0-3 3v12a2 2 0 0 1 2-2h7z"/>',
    deal: '<path d="M4 10h16v10H4zM3 7h18v3H3zM12 7v13"/><path d="M12 7c-2-4-6-3-5 0M12 7c2-4 6-3 5 0"/>',
    contest: '<path d="M8 4h8v5a4 4 0 0 1-8 0z"/><path d="M8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4M12 13v4M8 20h8"/>',
    model: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4"/><circle cx="12" cy="12" r="3"/><path d="M6 6l2 2M16 16l2 2M18 6l-2 2M8 16l-2 2"/>'
  };
  var icon = function (k) { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + IC[k] + '</svg>'; };
  var boardHTML = function (d, opt) {
    opt = opt || {};
    var secs = [
      { ic: 'guide', name: '编辑首选', lead: '按场景写给新手的推荐，编辑署名', img: 'r-map', items: (d.guides || []).slice(0, 3).map(function (g) { return { t: g.t, sub: g.sum, meta: g.rev.slice(5) + ' 复核', href: '#guide~' + g.id }; }) },
      { ic: 'deal', name: '当前福利', lead: '挑最快截止的三条，到期自动隐藏', img: 'p-deals', more: ['全部当前福利', '#deals'], items: live().slice().sort(function (a, b) { var x = daysLeft(a), y = daysLeft(b); return (x === null ? 999 : x) - (y === null ? 999 : y); }).slice(0, 3).map(function (x) { var n = daysLeft(x); return { t: x.short, sub: x.type, meta: n === null ? x.when.split(' · ')[0] : '剩 ' + n + ' 天', hot: n !== null && n <= 7, href: landHref(x) }; }) },
      { ic: 'contest', name: '热门比赛', lead: '按报名截止排序，别错过', img: 'p-contests', more: ['全部比赛', '#contests'], items: (d.contests || []).slice(0, 3) },
      { ic: 'model', name: '模型动态', lead: '近 14 天的新模型与价格变化', img: 'p-models', more: ['看模型榜', '#models'], items: (d.models || []).slice(0, 3) }
    ].filter(function (x) { return x.items.length; });
    if (!secs.length) return '';
    var n = secs.length, pad = function (i) { return (i < 9 ? '0' : '') + (i + 1); };
    var slides = secs.map(function (x, i) {
      return '<section class="nb-s' + (i ? '' : ' on') + '" aria-label="' + esc(x.name) + '"' + (i ? ' aria-hidden="true"' : '') + '>' + (opt.glass ? '' : '<img class="nb-bg" src="assets/' + x.img + '.jpg" alt="">') +
        '<span class="nb-num" aria-hidden="true">' + pad(i) + '</span><div class="nb-hd"><span class="nb-eb">公告栏 · ' + pad(i) + ' / ' + pad(n - 1) + '</span><h3>' + esc(x.name) + '</h3><p>' + esc(x.lead) + (x.more ? '<a class="nb-more" href="' + x.more[1] + '">' + esc(x.more[0]) + ' →</a>' : '') + '</p></div>' +
        '<div class="nb-cards">' + x.items.map(function (it, k) {
          return '<a class="nb-c" style="--k:' + k + '" href="' + it.href + '"><span class="nb-ic">' + icon(x.ic) + '</span><span class="nb-tx"><b>' + esc(it.t) + '</b><span>' + esc(it.sub) + '</span></span><span class="nb-m' + (it.hot ? ' hot' : '') + '">' + esc(it.meta) + '</span></a>';
        }).join('') + '</div></section>';
    }).join('');
    var dots = n > 1 ? '<div class="nb-dots">' + secs.map(function (x, i) { return '<button class="' + (i ? '' : 'on') + '" data-nb-go="' + i + '" aria-label="' + esc(x.name) + '"><i></i><span>' + esc(x.name) + '</span></button>'; }).join('') + '</div>' : '';
    var arrows = n > 1 ? '<div class="nb-arr"><button data-nb-step="-1" aria-label="上一个">‹</button><button data-nb-step="1" aria-label="下一个">›</button></div>' : '';
    return '<div class="nb' + (opt.glass ? ' glass' : '') + '" data-n="' + n + '">' + slides + arrows + dots + '</div>';
  };
  var nbGo = function (nb, i) {
    var n = +nb.getAttribute('data-n'); i = ((i % n) + n) % n; nb._i = i;
    Array.prototype.forEach.call(nb.querySelectorAll('.nb-s'), function (s, j) { s.classList.toggle('on', j === i); if (j === i) s.removeAttribute('aria-hidden'); else s.setAttribute('aria-hidden', 'true'); });
    Array.prototype.forEach.call(nb.querySelectorAll('.nb-dots button'), function (b, j) { b.classList.toggle('on', j === i); b.classList.toggle('done', j < i); });
  };
  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-nb-go],[data-nb-step]'); if (!b) return;
    var nb = b.closest('.nb');
    nbGo(nb, b.hasAttribute('data-nb-go') ? +b.getAttribute('data-nb-go') : (nb._i || 0) + +b.getAttribute('data-nb-step'));
  });
  /* 自动轮播：当前短线填满（7 秒）就换下一屏；悬停、聚焦时 CSS 暂停；减少动效时不自动换 */
  document.addEventListener('animationend', function (e) {
    if (e.animationName !== 'nbFill') return; var nb = e.target.closest('.nb'); if (nb) nbGo(nb, (nb._i || 0) + 1);
  }, true);
  /* 手机左右滑 */
  var tx0 = null;
  document.addEventListener('touchstart', function (e) { tx0 = e.target.closest('.nb') ? e.touches[0].clientX : null; }, { passive: true });
  document.addEventListener('touchend', function (e) {
    if (tx0 === null) return; var nb = e.target.closest('.nb'); var dx = e.changedTouches[0].clientX - tx0; tx0 = null;
    if (nb && Math.abs(dx) > 40) nbGo(nb, (nb._i || 0) + (dx < 0 ? 1 : -1));
  }, { passive: true });

  /* ---------- 共创：案例（全部示意） ---------- */
  var CATS = { learn: 'AI 学习案例', product: '产品案例' };
  var CASES = [
    { id: 'xhs-topic-tool', cat: 'product', t: '一个人用 AI 做出小红书选题工具，上线两周的复盘', by: '独立开发者 · 阿青', date: '2026-10-10', dur: '09:32', cover: 'c-all',
      sum: '从一个自己每天要用的小需求出发，两周做出能用的版本：选题怎么抓、提示词怎么定、哪些地方 AI 帮不上。' },
    { id: 'bookkeeping-7days', cat: 'learn', t: '零基础 7 天，用 Claude Code 做出自己的记账小程序', by: '大三学生 · 小林', date: '2026-10-08', dur: '12:40', cover: 'c-agent',
      sum: '没写过代码，每天一小时，记录每一步问了 AI 什么、卡在哪、怎么解决。' },
    { id: 'data-analysis-30days', cat: 'learn', t: '文科生 30 天学会用 AI 做数据分析：我的笔记和踩坑', by: '市场运营 · 周周', date: '2026-10-02', dur: '18:05', cover: 'p-models',
      sum: '从整理表格到做出第一张周报图表，30 天的学习路线和最常犯的五个错。' },
    { id: 'ai-drama-pipeline', cat: 'product', t: '用 Seedance 做 AI 短剧账号：从脚本到成片的流水线', by: '内容创作者 · 老陈', date: '2026-09-27', dur: '15:10', cover: 'c-media',
      sum: '一集 2 分钟的短剧，脚本、分镜、生成、剪辑各用什么，一集的成本和时间是多少。' }
  ];
  var meta = function (c) { return '<span>' + esc(c.by) + '</span><span>' + esc(c.date) + '</span><span class="kc-dur">▶ ' + esc(c.dur) + '</span>'; };
  var cardHTML = function (c, big) {
    return '<a class="kc-card' + (big ? ' big' : '') + '" href="#case~' + c.id + '"><span class="kc-cover"><img src="assets/' + c.cover + '.jpg" alt=""><i class="kc-play">▶</i></span>' +
      '<span class="kc-tx"><span class="kc-cat">' + CATS[c.cat] + '</span><b>' + esc(c.t) + '</b>' + (big ? '<span class="mute kc-sum">' + esc(c.sum) + '</span>' : '') + '<span class="kc-meta">' + meta(c) + '</span></span></a>';
  };
  var cocreateHTML = function (ctx) {
    var cats = ['全部'].concat(Object.keys(CATS).filter(function (k) { return CASES.some(function (c) { return c.cat === k; }); }));
    var cat = cats.indexOf(S.cat) >= 0 ? S.cat : '全部';
    var list = CASES.filter(function (c) { return cat === '全部' || c.cat === cat; });
    /* 只有一类有内容时不显示分类切换 */
    var tabs = cats.length > 2 ? '<div class="tabs kc-tabs"><div class="l">' + cats.map(function (k) { var n = k === '全部' ? CASES.length : CASES.filter(function (c) { return c.cat === k; }).length; return '<button class="tab' + (k === cat ? ' on' : '') + '" data-kc-cat="' + k + '">' + (k === '全部' ? '全部' : CATS[k]) + ' <span class="c">' + n + '</span></button>'; }).join('') + '</div><span class="mute" style="font-size:13px">按发布时间</span></div>' : '';
    var feed = '<div class="kc-feed">' + cardHTML(list[0], true) + '<div class="kc-grid">' + list.slice(1).map(function (c) { return cardHTML(c, false); }).join('') + '</div></div>';
    return ctx.nav + ctx.ph + '<div class="wrap">' + tabs + feed + '<div class="kx-src">案例、封面与视频均为示意；素材整理好后替换。</div></div>' + picksHTML(ctx.guides) + ctx.footer;
  };
  var BODY = [
    ['p', '这一篇按时间顺序记录：起点是什么、每一步做了什么、花了多少时间和钱，以及中途放弃过的做法。视频是完整过程的剪辑版，文章补充视频里没讲清的细节。'],
    ['h', '起点'],
    ['p', '一开始只是一个自己每天都要做的小事。先用一句话写下“做完以后它应该能干什么”，再拆成三四个能在一个晚上做完的小步骤。'],
    ['h', '过程中最有用的三件事'],
    ['p', '一，每次只让 AI 做一件小事，做完马上检查；二，报错原样贴回去，比重新描述有效；三，把满意的提示词存成模板，下次直接复用。'],
    ['q', '真正花时间的不是写，是想清楚要什么。'],
    ['h', '花费与时间'],
    ['p', '整个过程用的都是免费额度和最低一档的会员，总花费不到一顿饭钱；时间主要花在反复修改和测试上。'],
    ['h', '如果重来一次'],
    ['p', '会更早把需求写成清单，也会更早开始让身边的人试用，很多问题是别人用了才发现的。']
  ];
  var caseHTML = function (id, ctx) {
    var c = CASES.filter(function (x) { return x.id === id; })[0]; if (!c) return null;
    var more = CASES.filter(function (x) { return x.id !== c.id; }).sort(function (a, b) { return (b.cat === c.cat) - (a.cat === c.cat); }).slice(0, 3);
    var body = BODY.map(function (b) { return b[0] === 'h' ? '<h2>' + esc(b[1]) + '</h2>' : b[0] === 'q' ? '<blockquote>' + esc(b[1]) + '</blockquote>' : '<p>' + esc(b[1]) + '</p>'; }).join('');
    return ctx.nav + '<article class="kc-art"><div class="wrap kc-col"><div class="crumb"><a href="#cocreate">共创</a> / ' + CATS[c.cat] + '</div>' +
      '<span class="kc-cat" style="margin-top:22px">' + CATS[c.cat] + '</span><h1>' + esc(c.t) + '</h1><div class="kc-meta kc-meta-lg">' + meta(c) + '</div></div>' +
      '<div class="wrap kc-vcol"><video class="kc-video" src="assets/r-map-loop.mp4" poster="assets/' + c.cover + '.jpg" controls playsinline preload="none"></video><div class="kx-src">视频为示意素材</div></div>' +
      '<div class="wrap kc-col"><p class="kc-lead">' + esc(c.sum) + '</p><div class="kc-body tmz">' + body + '</div>' +
      '<div class="kc-end"><span>案例由 ' + esc(c.by) + ' 提供，天工开物编辑整理 · ' + esc(c.date) + '</span><a href="#cocreate">← 返回共创</a></div></div>' +
      '<div class="wrap kc-more"><div class="sec-h"><h2>更多案例</h2></div><div class="kc-grid">' + more.map(function (x) { return cardHTML(x, false); }).join('') + '</div></div></article>' + ctx.footer;
  };
  /* 首页四宫格里的“共创”卡 */
  var homeCard = function () {
    return { rows: CASES.slice(0, 3).map(function (c, i) { return '<div class="r"><span class="a">0' + (i + 1) + '</span><span class="b">' + esc(c.t) + '</span></div>'; }).join(''),
      foot: CASES.length + ' 个案例：学习 ' + CASES.filter(function (c) { return c.cat === 'learn'; }).length + ' · 产品 ' + CASES.filter(function (c) { return c.cat === 'product'; }).length };
  };

  window.KAIWU_1013 = { DEALS: DEALS, cards: cardsHTML, bar: barHTML, forModel: forModel, forPlan: forPlan, forTool: forTool, toolFlag: toolFlag, modelFlag: modelFlag,
    landHref: landHref, picks: picksHTML, picksAside: picksAside, board: boardHTML, cocreate: cocreateHTML, caseDetail: caseHTML, homeCard: homeCard, CASES: CASES, CATS: CATS };
  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-kc-cat],[data-kd-jump]'); if (!b) return;
    if (b.hasAttribute('data-kd-jump')) { e.preventDefault(); var t = document.getElementById('kw-deals'); if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' }); return; }
    S.cat = b.getAttribute('data-kc-cat');
    window.dispatchEvent(new CustomEvent('kaiwu:tool-detail-refresh'));
  });
})();
