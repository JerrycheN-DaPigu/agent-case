(function(){
  'use strict';
  /* 工具子页（2026-10-12 第二版，按用户意见做减法）：
     页头（国内可用 / 上手难度 / 免费档 + 版本切换）→ 事实条 → 介绍卡（含使用教程链接、推荐搭配模型）→ 福利横栏
     → 选一个套餐（官方订阅卡片带核心权益 + 厂商 Key 套餐）→ 同类工具 → 外部实测。
     去掉：注册登录 / 免费与试用 / 上手指南一行、怎么用上它、模型与使用方式、官方指南。 */
  var D=window.KAIWU_TOOL_DETAIL_DATA;
  var S={version:'cn',period:{}};
  var esc=function(v){return String(v==null?'':v).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});};
  var ext=function(url,label,cls){return url?'<a href="'+esc(url)+'" target="_blank" rel="noopener noreferrer"'+(cls?' class="'+cls+'"':'')+'>'+esc(label)+' ↗</a>':'';};
  var fmt=function(n){return new Intl.NumberFormat('zh-CN',{maximumFractionDigits:2}).format(n);};
  var amount=function(p,o){return(p.currency==='USD'?'$':'¥')+fmt(o.value);};
  var groups=function(t){return t.id==='trae'?(S.version==='cn'?'trae-cn':'trae-global'):t.ownGroup;};
  var periodNames={month:'单月',renewal:'连续包月',year:'年付'};
  var infoCell=function(label,value){return '<div><div class="k">'+esc(label)+'</div><div class="vv">'+value+'</div></div>';};
  var title=function(name,note){return '<div class="sec-h"><div style="display:flex;align-items:baseline;gap:16px;flex-wrap:wrap"><h2>'+esc(name)+'</h2>'+(note?'<span class="td-title-note">'+esc(note)+'</span>':'')+'</div></div>';};
  var scopeTag=function(s){return '<span class="kx-scope kx-scope-'+s+'">'+(s==='tool'?'工具专属':'厂商 Key')+'</span>';};
  var DIFF={1:'●○○ 打开就能用',2:'●●○ 要装软件',3:'●●● 要会命令行'};
  var MID={'Claude Opus 5.5':'claude-opus-5-5','Claude Sonnet 5.5':'claude-sonnet-5-5','GLM-5.3':'glm-5-3','DeepSeek V4.1 Flash':'deepseek-v4-1-flash','Seed 2.1 Turbo':'seed-2-1-turbo'};
  var chip=function(n){return MID[n]?'<a class="chp kx-mchip" href="#model~'+MID[n]+'">'+esc(n)+'</a>':'<span class="chp kx-mchip">'+esc(n)+'</span>';};

  /* 官方订阅卡片的核心权益（取自 content/ YAML 与飞书整理，示意） */
  var CLM=['Claude Opus 5.5','Claude Sonnet 5.5','Claude Haiku 5.5'];
  var TCN=['GLM-5.3','DeepSeek V4.1 Flash','Seed 2.1 Turbo'];
  var BEN={
    'claude-pro':{q:'5 小时滚动会话额度 + 每周限额',hi:['含 Claude Code，与网页、桌面、手机共用额度','会话额度至少为 Free 的 5 倍','Opus 5.5、Sonnet 5.5、Haiku 5.5 都在额度内','Fable 5.1 不在常规额度内，需另购用量'],m:CLM},
    'claude-max-5x':{q:'Pro 的 5 倍会话额度',hi:['含 Claude Code，与 Claude 共用额度','Fable 5 / 5.1 是标准权益，最多用周额度的 50%','高峰期优先','只能月付'],m:CLM.concat(['Claude Fable 5.1'])},
    'claude-max-20x':{q:'Pro 的 20 倍会话额度',hi:['含 Claude Code，与 Claude 共用额度','Fable 5.1 最多用周额度的 50%','5 小时重置，另有每周限额','只能月付'],m:CLM.concat(['Claude Fable 5.1'])},
    'trae-cn-lite':{q:'每月 2,000 积分',hi:['内置 Seed、GLM、DeepSeek、Kimi、MiniMax 等模型','GLM-5.3 按 5 折、Seed-2.1-Turbo 按 2.5 折扣积分','会员签到另得 3,000 积分','高峰期优先'],m:TCN},
    'trae-cn-pro':{q:'每月 4,000 积分',hi:['积分为 Lite 的 2 倍','包含 Lite 的全部权益'],m:TCN},
    'trae-cn-pro-plus':{q:'每月 12,000 积分',hi:['积分为 Lite 的 6 倍','包含 Lite 的全部权益'],m:TCN},
    'trae-cn-ultra':{q:'每月 40,000 积分',hi:['积分为 Lite 的 20 倍','包含 Lite 的全部权益'],m:TCN},
    'trae-international-lite':{q:'每月 $5 基础用量',hi:['使用国际版模型目录','与国内版积分互不通用'],m:[]},
    'trae-international-pro':{q:'每月 $20 基础用量',hi:['使用国际版模型目录','与国内版积分互不通用'],m:[]},
    'trae-international-pro-plus':{q:'Pro 的 3.5 倍用量',hi:['包含 Pro 的全部权益'],m:[]},
    'trae-international-ultra':{q:'Pro 的 20 倍用量',hi:['包含 Pro 的全部权益'],m:[]}
  };
  var OWN_SCOPE={
    'claude-code':'Claude 网页、桌面、手机与 Claude Code 共用额度；不含 API。',
    'trae-cn':'积分只抵 TRAE 国内版内置模型；接自己的 Key 不消耗积分。',
    'trae-global':'只在 TRAE 国际版里用；与国内版积分互不通用。',
    'jimeng':'只在即梦网页与 App 里用。','codex':'ChatGPT 与 Codex 共用额度。','cursor':'只在 Cursor 里用。',
    'github-copilot':'只在 Copilot 支持的 IDE 与 CLI 里用。','workbuddy':'只在 WorkBuddy 与 CodeBuddy 里用，两者共享积分。',
    'doubao-work':'只在豆包里用。','midjourney':'只在 Midjourney 里用。','google-antigravity':'Google AI 会员权益，在 Antigravity 等 Google 产品里用。'
  };
  var CH=[
    {name:'方舟 Coding Plan',vendor:'火山引擎',price:40,href:'#plan~ark',url:'https://www.volcengine.com/activity/codingplan',tools:['claude-code','trae','codex','cursor','opencode'],models:'GLM-5.3、DeepSeek V4.1 Flash、Kimi K3 等',note:'仅限编程工具使用，不能当 API 调用。'},
    {name:'GLM Coding Plan',vendor:'智谱',price:118,href:'#plan~glm',url:'https://docs.bigmodel.cn/cn/coding-plan/quick-start.md',tools:['claude-code','trae','zcode','codex','cursor','opencode'],models:'GLM-5.3、GLM-5.3 Flash',note:'官方列出的 20+ 编程工具可用；自建应用要走标准 API。'}
  ].concat(D.channels.filter(function(c){return c.name!=='GLM Coding Plan';}).map(function(c){return {name:c.name,vendor:'阿里云',price:c.price,url:c.url,tools:c.tools,note:c.note};}));

  /* 样板内容（示意）；TRAE 按版本取 */
  var X={
    'claude-code':{
      access:['官方国内不可用 · 有接法',true],diff:3,free:'无免费档',sys:'Windows / macOS / Linux',
      what:'Claude Code 是 Anthropic 2025 年推出的编程智能体，能读取整个代码库、修改文件、运行命令和测试，并自行拆分多步任务。提供终端 CLI、VS Code / JetBrains 插件、桌面与网页版本；可用 Claude 订阅或 API 登录，也可按厂商接入文档填入兼容的 API Key。适合需要让 AI 直接改动项目代码、能使用命令行的开发者。',
      guide:['从零跑通第一个任务','https://code.claude.com/docs/en/quickstart.md'],
      rec:[['Claude Opus 5.5','claude-opus-5-5','A','官方原生模型，复杂编程最强；需 Claude 订阅。'],['DeepSeek V4.1 Flash','deepseek-v4-1-flash','D','国内可用、价格低；经方舟等厂商 Key 套餐接入。'],['GLM-5.3','glm-5-3','智','国产旗舰；GLM Coding Plan 官方支持 Claude Code。']],
      similar:[['codex','Codex','OpenAI · 命令行 / IDE / 桌面',3,'官方国内不可用'],['cursor','Cursor','Anysphere · 代码编辑器',2,'国内可用'],['opencode','opencode','Anomaly · 命令行 + 桌面 · 开源',3,'国内可用'],['trae','TRAE','字节跳动 · 编辑器 + Agent 工作台',2,'国内可用']]
    },
    'trae':{
      cn:{access:['国内可用',false],diff:2,free:'有免费积分',sys:'Windows / macOS / 网页 / 手机',home:'https://www.trae.cn/',
        what:'TRAE 是字节跳动推出的 AI 编程工具，国内版由北京引力弹弓科技运营，将 Agent 工作台与代码编辑器合为一体，可理解项目、修改代码、运行命令并验证结果。国内版内置 Seed、GLM、DeepSeek、Kimi、MiniMax 等模型，按积分计费，也支持填入自有模型服务的 Key。适合偏好图形界面、在国内直接使用的开发者。',
        guide:['国内版上手指南','https://docs.trae.cn/ide_get-started-with-trae'],
        rec:[['GLM-5.3','glm-5-3','智','内置；付费档按 5 折扣积分。'],['DeepSeek V4.1 Flash','deepseek-v4-1-flash','D','内置；付费档全时段 5 折。'],['Seed 2.1 Turbo','seed-2-1-turbo','字','字节自家模型；付费档 2.5 折。']],
      },
      global:{access:['国际版网络限制，需代理',true],diff:2,free:'',sys:'Windows / macOS / 网页',home:'https://www.trae.ai/',
        what:'TRAE 国际版面向海外用户，包含 Agent 工作台 Trae Work 与编程环境 Trae Code / SOLO，使用独立的模型目录和美元套餐，与国内版的模型、积分互不通用。适合身处海外、需要国际版模型目录的开发者。',
        guide:['国际版模型说明','https://docs.trae.ai/ide/models'],rec:[]},
      similar:[['cursor','Cursor','Anysphere · 代码编辑器',2,'国内可用'],['qoder','Qoder','阿里 · 编辑器 + Agent',2,'国内可用'],['claude-code','Claude Code','Anthropic · 命令行 / IDE / 桌面',3,'官方国内不可用'],['opencode','opencode','Anomaly · 命令行 + 桌面 · 开源',3,'国内可用']]
    }
  };
  var xOf=function(t){var x=X[t.id];if(!x)return {};if(!t.versions)return x;var v=x[S.version]||{};var o={};for(var k in x)if(k!=='cn'&&k!=='global')o[k]=x[k];for(var k2 in v)o[k2]=v[k2];return o;};

  var render=function(id,context){
    var key=D.aliases[id]||id;var t=D.tools[key];if(!t)return null;
    var v=t.versions?t.versions[S.version]:t;var x=xOf(t);
    var group=groups(t);var ps=D.plans.filter(function(p){return p.group===group;});
    var keys=[];ps.forEach(function(p){p.options.forEach(function(o){if(keys.indexOf(o.key)<0)keys.push(o.key);});});
    var selected=keys.indexOf(S.period[group])>=0?S.period[group]:keys[0];
    var minimum=ps.reduce(function(m,p){var o=p.options.find(function(o){return o.key==='month'||o.key==='renewal';});return o&&(!m||o.value<m.option.value)?{plan:p,option:o}:m;},null);
    var home=x.home||v.home||t.home;
    var forms=(v.forms||t.forms).split(' · ');
    var shortForms=t.id==='trae'?(S.version==='cn'?'桌面 / IDE · 网页 · 手机':'桌面 / 网页 · SOLO'):(forms.length>3?forms.slice(0,3).join(' · ')+' 等':forms.join(' · '));

    /* 页头：版本切换放在标题右侧，最显眼 */
    var badges=(x.access||x.diff||x.free)?'<div class="kx-badges">'+(x.access?'<span class="pill-s'+(x.access[1]?' kx-badge-off':'')+'">'+esc(x.access[0])+'</span>':'')+(x.diff?'<span class="pill-s kx-diff">'+DIFF[x.diff]+'</span>':'')+(x.free?'<span class="pill-s">'+esc(x.free)+'</span>':'')+'</div>':'';
    var ver=t.versions?'<div class="kx-ver"><span class="kx-k">选择版本</span><div class="kx-seg kx-seg-lg" role="group" aria-label="工具版本">'+Object.keys(t.versions).map(function(k){return '<button data-td-version="'+k+'" class="'+(S.version===k?'on':'')+'" aria-pressed="'+(S.version===k)+'">'+t.versions[k].label+'</button>';}).join('')+'</div><span class="mute" style="font-size:12px">入口、模型、套餐与价格一起切换</span></div>':'<div class="eyebrow">资料整理于 2026-10-11</div>';
    var head='<div class="wrap"><div class="crumb"><a href="#tools">工具</a> / '+esc(t.name)+(t.versions?' / '+esc(v.label):'')+'</div><div class="dh"><div class="tt"><div class="tile" style="width:72px;height:72px;font-size:32px">'+context.mono(t.name)+'</div><div><h1>'+esc(t.name)+(t.versions?' <span class="kx-h1v">'+esc(v.label)+'</span>':'')+'</h1><div class="mute" style="font-size:16px;margin-top:6px">'+esc(t.intro)+'</div>'+badges+'</div></div>'+ver+'</div>';
    var minText=minimum?amount(minimum.plan,minimum.option)+' / '+periodNames[minimum.option.key]+' 起':(['pi','minimax-code','deepseek-harness'].indexOf(t.id)>=0?'按所接服务计费':'查看官方方案');
    head+='<div class="info td-info kx-info5">'+infoCell('形态',esc(shortForms))+infoCell('支持系统',esc(x.sys||(t.versions?'见官网':t.platforms)))+infoCell('厂商',esc(t.vendor.split(/[；;\n]/)[0]))+infoCell('自带会员',esc(minText))+infoCell('官网',ext(home,'前往官网'))+'</div></div>';

    /* 介绍卡：能做什么、优势、适合谁、使用教程链接 + 推荐搭配模型（不放套餐和价格） */
    var intro='';
    if(x.what){
      var rec=(x.rec&&x.rec.length)?'<div class="kx-intro-rec"><div class="kx-k">推荐搭配的模型</div><div class="kx-mrec">'+x.rec.map(function(r){return '<a href="#model~'+r[1]+'"><span class="tile" style="width:36px;height:36px">'+esc(r[2])+'</span><span><b>'+esc(r[0])+'</b></span><span class="mute">→</span></a>';}).join('')+'</div></div>':'';
      intro='<div class="wrap" style="padding-top:32px"><div class="kx-intro"'+(rec?'':' style="grid-template-columns:1fr"')+'><div class="kx-intro-main tmz"'+(rec?'':' style="border-right:0"')+'><div class="kx-k">简介</div><p class="kx-p">'+esc(x.what)+'</p>'+(x.guide?'<div class="kx-guide"><span class="kx-k" style="margin:0">产品使用教程</span>'+ext(x.guide[1],x.guide[0])+'</div>':'')+'</div>'+rec+'</div></div>';
    }
    var K=window.KAIWU_1013;var kd=K?K.forTool(t.id==='trae'?'trae':key,group):[];
    var deals=K&&kd.length?'<div class="wrap" style="padding-top:28px">'+K.bar(kd,'kw-deals')+'</div>':'';
    var _old=(x.deals&&x.deals.length)?'<div class="wrap"><div class="kx-dealbar"><span class="kx-dl">福利</span>'+x.deals.map(function(d){return '<a href="#deal~'+d[0]+'"><b>'+esc(d[1])+'</b><span class="mute">'+esc(d[2])+'</span><span class="kx-when">'+esc(d[3])+'</span><span class="kx-go">→</span></a>';}).join('')+'</div></div>':'';

    /* 选一个套餐：官方订阅卡片（档位名 → 价格 → 核心额度 → 权益 → 适用模型），再列厂商 Key 套餐 */
    var own='';
    if(ps.length){
      var tabs=keys.length>1?'<div class="kx-seg" role="group" aria-label="购买方式" style="margin:0">'+keys.map(function(k){return '<button data-td-period="'+k+'" data-td-group="'+group+'" class="'+(k===selected?'on':'')+'" aria-pressed="'+(k===selected)+'">'+periodNames[k]+'</button>';}).join('')+'</div>':'';
      var cards=ps.map(function(p){
        var o=p.options.find(function(z){return z.key===selected;});var b=BEN[p.id]||{q:p.quota,hi:String(p.benefit||'').split(/[；;]/).filter(Boolean),m:[]};
        var first=o&&o.label==='首年';
        var price=o&&!first?'<div class="kx-price"><span class="big-p">'+amount(p,o)+'</span></div><div class="kx-pm">'+periodNames[o.key]+' · '+(p.currency==='USD'?'美元':'人民币')+'</div>':'<div class="kx-price"><span class="kx-na">该方式不提供</span></div><div class="kx-pm">'+(first?'官方有首年优惠价 '+amount(p,o):'&nbsp;')+'</div>';
        return '<div class="kx-tier'+(o&&!first?'':' off')+'"><div class="kx-tn mono">'+esc(p.name)+'</div>'+price+'<div class="kx-q">'+esc(b.q)+'</div><ul class="kx-ul">'+b.hi.slice(0,5).map(function(h){return '<li>'+esc(h)+'</li>';}).join('')+'</ul>'+(b.m.length?'<div class="kx-mc">'+b.m.map(chip).join('')+'</div>':'')+'</div>';
      }).join('');
      own='<div class="kx-gh"><h3>'+(t.versions?esc(v.label)+'会员':t.id==='claude-code'?'Claude 官方订阅':'官方订阅')+'</h3>'+(OWN_SCOPE[group]?scopeTag('tool')+'<span class="mute">'+esc(OWN_SCOPE[group])+'</span>':'')+'<span style="margin-left:auto">'+tabs+'</span></div>'+
        '<div class="kx-tiers-row" style="--n:'+ps.length+';margin-top:12px">'+cards+'</div><div class="kx-foot"><span>价格为官方原币，不换汇；首月、首年优惠不当售价。</span><span>'+ext(ps[0].home,'官方价格页')+'</span></div>';
    }
    var channels=(t.id==='trae'&&S.version==='global')?[]:CH.filter(function(p){return p.tools.indexOf(key)>=0;}).sort(function(a,b){return a.price-b.price;});
    var connections=channels.length?'<div class="kx-gh" style="padding-top:40px"><h3>也能填这些厂商 Key 套餐</h3><span class="mute">接入方法由套餐厂商提供</span></div><div style="border-top:2px solid var(--fg)">'+channels.map(function(p){
      var nm=p.href?'<a href="'+p.href+'"><b>'+esc(p.name)+'</b></a>':'<b>'+esc(p.name)+'</b>';
      return '<div class="kx-crow"><div>'+nm+'<span class="mute" style="font-size:13px">'+esc(p.vendor)+(p.models?' · 主力模型 '+esc(p.models):'')+'</span></div><div>'+scopeTag('key')+'<div class="kx-note">'+esc(p.note)+'</div></div><div><span class="mono">¥'+fmt(p.price)+'</span> <span class="mute" style="font-size:12px">起 / 单月</span></div>'+ext(p.url,'官方接入文档','btn-o')+'</div>';}).join('')+'</div>':'';
    var dealCards=K?K.cards(kd):'';
    var plans=(own||connections)?'<div class="wrap td-section" id="td-own">'+title('选一个套餐','')+'<p class="kx-lead tmz">套餐都标了使用范围：工具专属的额度只能在这个工具里用；厂商 Key 给你 API Key 和 Base URL，能填进多种编程工具。</p>'+own+dealCards+connections+'</div>':(dealCards?'<div class="wrap td-section">'+dealCards+'</div>':'');

    var sim=(x.similar&&x.similar.length)?'<div class="wrap td-section">'+title('同类工具','')+'<div class="kx-sim">'+x.similar.map(function(s){return '<a href="#tool~'+s[0]+'"><b>'+esc(s[1])+'</b><span>'+esc(s[2])+'</span><span><span class="kx-diff">'+DIFF[s[3]]+'</span> · '+esc(s[4])+'</span></a>';}).join('')+'</div></div>':'';
    return context.nav+head+deals+intro+plans+sim+(context.reviews||'')+'<div class="wrap td-source" style="padding-top:36px">天工开物编辑部整理 · 资料整理于 2026-10-11 · 设计样板，介绍卡、权益与推荐模型为示意文案。</div>'+context.footer;
  };
  window.KAIWU_TOOL_DETAIL={render:render};
  document.addEventListener('click',function(e){
    var button=e.target.closest('[data-td-version],[data-td-period]');if(!button)return;
    if(button.hasAttribute('data-td-version'))S.version=button.getAttribute('data-td-version');
    if(button.hasAttribute('data-td-period'))S.period[button.getAttribute('data-td-group')]=button.getAttribute('data-td-period');
    window.dispatchEvent(new CustomEvent('kaiwu:tool-detail-refresh'));
  });
})();
