export interface TranslationSet {
  // Navigation & Tabs
  title: string;
  subtitle: string;
  importPreset: string;
  presetPlaceholder: string;
  propSMG: string;
  propSR: string;
  propAR: string;
  propHG: string;
  propSG: string;
  propDMR: string;
  undo: string;
  redo: string;
  editorTab: string;
  infoTab: string;

  // File Manager
  fileManager: string;
  chooseFile: string;
  dragAndDrop: string;
  selectedFile: string;
  saveFile: string;

  // Presets
  quickPresets: string;

  // Other Helper texts
  viewingChangedOnly: string;
  expandAll: string;
  collapseAll: string;
  searchPlaceholder: string;
  clear: string;
  emptyDesc: string;
  fillExample: string;
  infoBannerHeader: string;
  infoBannerDesc: string;
  guideHighlight: string;
  guideHighlightValue: string;
  pretendardGuide: string;

  // Info Tab - Site Guide
  whatIsSite: string;
  whatIsSiteDesc1: string;
  whatIsSiteDesc2: string;
  terminalTitle: string;
  terminalDesc: string;
  presetsTitle: string;
  presetsDesc: string;

  // Info Tab - Security Guide
  safeGuideTitle: string;
  step1Title: string;
  step1Desc: string;
  step2Title: string;
  step2Desc: string;
  step3Title: string;
  step3Desc: string;
  step4Title: string;
  step4Desc: string;

  // Info Tab - Inquiry Form
  inquiryTitle: string;
  inquirySuccessTitle: string;
  inquirySuccessDesc: string;
  inquiryResetBtn: string;
  inquiryNameLabel: string;
  inquiryNamePlaceholder: string;
  inquiryEmailLabel: string;
  inquiryTypeLabel: string;
  inquiryContentLabel: string;
  inquiryContentPlaceholder: string;
  inquirySubmitBtn: string;
  inquiryAlert: string;
  optBug: string;
  optFeature: string;
  optCollab: string;
  optOther: string;

  // Info Tab - Dev Channel
  devChannelTitle: string;
  devChannelDesc: string;
  devEmailLabel: string;
  devEmailBtn: string;
  devGithubLabel: string;
  devGithubBtn: string;

  // AdSense & Legal
  legalTitle: string;
  privacyTitle: string;
  privacyDate: string;
  privacyIntro: string;
  privacySec1Title: string;
  privacySec1Desc: string;
  privacySec2Title: string;
  privacySec2Desc: string;
  privacySec3Title: string;
  privacySec3Desc: string;
  termsTitle: string;
  termsDate: string;
  termsSec1Title: string;
  termsSec1Desc: string;
  termsSec2Title: string;
  termsSec2Desc: string;
  termsSec3Title: string;
  termsSec3Desc: string;

  // Inquiry Static Instructions
  staticInquiryNoticeTitle: string;
  staticInquiryNoticeDesc: string;
  copyInquiryBtn: string;
  copiedInquiryBtn: string;
  openMailBtn: string;
  backToFormBtn: string;

  // Standard explanations mapping block
  descriptions: Record<string, string>;
}

export const TRANSLATIONS: Record<"ko" | "en", TranslationSet> = {
  ko: {
    title: "ARMOURY FIXER",
    subtitle: "산업용 커스텀 YAML 포지",
    importPreset: "프리셋",
    presetPlaceholder: "프리셋 선택",
    propSMG: "SMG (경기관총)",
    propSR: "SR (저격소총)",
    propAR: "AR (돌격소총)",
    propHG: "HG (권총)",
    propSG: "SG (산탄총)",
    propDMR: "DMR (지정사수)",
    undo: "되돌리기 (Undo)",
    redo: "다시실행 (Redo)",
    editorTab: "⚙ 에디터 조종실 (CONFIG FORGE)",
    infoTab: "📜 설명서 & 고객 정비실 (ABOUT & SUPPORT)",

    fileManager: "FILE MANAGER",
    chooseFile: "파일 선택",
    dragAndDrop: "또는 정비 스테이션에 DND 해도 인식합니다",
    selectedFile: "선택된 파일",
    saveFile: "SAVE FILE",

    quickPresets: "QUICK PRESETS",

    viewingChangedOnly: "변경된 항목만 보기",
    expandAll: "일괄 펼치기",
    collapseAll: "일괄 접기",
    searchPlaceholder: "설정 검색 (예: recoil, damage)...",
    clear: "지우기",

    emptyDesc: "적용 중인 설정 구조체가 없거나 삭제되었습니다. 아래 버튼을 눌러 기본 마인크래프트 수정 시안용 예제 파일을 채우십시오.",
    fillExample: "기본 예제 파일로 채우기",
    infoBannerHeader: "⚙ 실시간 기어 도움판",
    infoBannerDesc: "에디터 내에 마우스를 올리거나 터치하면, 해당 설정이 인게임에서 담당하는 설명 및 추천 기본 스팀 사양이 이곳에 실시간 연동되어 출력됩니다.",
    guideHighlight: "디자인 강조 가이드",
    guideHighlightValue: "수정된 슬라이드 값 및 주황색 불빛 강조 처리됨",
    pretendardGuide: "일반 가독성을 위해 Pretendard 폰트가 핵심 설계로 반영되었습니다.",

    whatIsSite: "무슨 사이트인가요? (Site Guide)",
    whatIsSiteDesc1: "이곳은 마인크래프트 서버 개발자 및 운영자분들이 복잡하고 까다로운 총기/장비 모드(예: Quality Armoury 플러그인 에셋)의 YAML 환경 설정을 직관적이고 다채로운 비주얼 기어 속에서 안전하게 수정하도록 고안된 커스텀 yaml 에디터입니다.",
    whatIsSiteDesc2: "인게임 밸런싱(데미지, 반동 오차, 연사 딜레이, 탄창 용량 등)을 변경할 때 문장 부호 하나라도 실수하면 플러그인이 완전히 깨지게 설계되어 있는 단스크립트 YAML 특성을 보완하여, 마우스 클릭과 고장 없는 인풋 조절판을 통해 100% 무결성 사양의 weapon.yml 사양을 조립할 수 있습니다.",
    terminalTitle: "정밀 제어 터미널",
    terminalDesc: "입력된 모든 데이터 형식을 Boolean, Number, List 타입별로 판별하여 연산 오류를 사전에 철저히 차단합니다.",
    presetsTitle: "스마트 기어 프리셋",
    presetsDesc: "SMG, Sniper(SR), Assault(AR) 등 대표적인 전술 카테고리 기어를 단 한 번의 토글 버튼식으로 즉시 로딩해 병합합니다.",

    safeGuideTitle: "안전 장치 가이드 (How to operate)",
    step1Title: "순정 설정 수동 드롭",
    step1Desc: "보유 중인 마인크래프트 플러그인 폴더의 .yml 에셋 파일을 센서 박스 안으로 드래그 앤 드롭하거나 업로드하세요.",
    step2Title: "인텔리센스 툴팁",
    step2Desc: "키워드 입력폼 옆의 파란색 ⓘ 아이콘에 마우스를 호버하면 해당 인게임 물리량의 설명이 실시간 주황 도움판에 안전 연동됩니다.",
    step3Title: "동적 변경 추적성",
    step3Desc: "기본값 대비 수정된 필드는 테두리에 주황색 그라데이션 광배가 작동하여 어떤 데이터 세트를 임의로 조정했는지 한눈에 검토 가능합니다.",
    step4Title: "되돌리기(Undo/Redo) 엔진",
    step4Desc: "실수로 값을 잘못 수정했더라도 상단의 압축 밸브 기어 탭을 통해 작업 세션을 무한으로 뒤집을 수 있습니다!",

    inquiryTitle: "기계 장치 상태 문의 및 제보 (1:1 Inquiry)",
    inquirySuccessTitle: "문의 기어 발송 성공!",
    inquirySuccessDesc: "작성하신 정비 보고서 및 리포트 파일이 ericdm47@gmail.com 개발자 기어 함으로 성공적으로 주입되었습니다!",
    inquiryResetBtn: "새로운 전송함 열기",
    inquiryNameLabel: "보내는 기어 마스터 (이름) :",
    inquiryNamePlaceholder: "이름 혹은 서버 아이디",
    inquiryEmailLabel: "회신받을 연락 이메일 (Default) :",
    inquiryTypeLabel: "전송 분류 (Filter) :",
    inquiryContentLabel: "기록 내용 (Report Box) :",
    inquiryContentPlaceholder: "이곳에 문의하고 싶으신 의견 또는 발생한 애로 사항을 자유롭게 타이핑해 주십시오...",
    inquirySubmitBtn: "📟 전송 프로세서 작동 (Submit)",
    inquiryAlert: "이름과 문의내용을 모두 성실하게 입력해 주십시오.",
    optBug: "🐛 인게임 버그 제보 / 사양 분석 요청",
    optFeature: "⚙️ 추가 기어 사양 / 프리셋 추가 제안",
    optCollab: "💼 비즈니스 기술 제안 또는 커스텀 주문",
    optOther: "☕ 기타 일반적인 인사이트 및 격려",

    devChannelTitle: "개발자 무전 채널 (Forge Masters)",
    devChannelDesc: "마인크래프트 개발을 사랑하는 Forge Master의 오피셜 연락선 링크입니다. 기능 개선 제안이나 오류 발생 피드백은 언제든지 대환영입니다.",
    devEmailLabel: "Official Email",
    devEmailBtn: "편지 쓰기",
    devGithubLabel: "GitHub Repository",
    devGithubBtn: "소스 방문",

    legalTitle: "법률 및 운영 정책 (Legal Policy)",
    privacyTitle: "🔒 개인정보처리방침 (Privacy Policy)",
    privacyDate: "최종 수정일: 2026년 6월 12일",
    privacyIntro: "본 사이트는 이용자의 개인정보 수집을 최소화하며 안전하게 처리하기 위해 관계 법령을 준수하여 다음과 같은 방침을 구성하여 일괄 운영합니다.",
    privacySec1Title: "1. 수집하는 개인정보 항목 및 가공 방식",
    privacySec1Desc: "본 도구는 기본적으로 서버 전송이 차단된 완전 정적 클라이언트 에디터(Client-side SPA)습니다. 귀하가 업로드하는 마인크래프트 YAML 설정 정보는 귀하의 로컬 웹 브라우저 캐시 메모리에서만 파싱 가공되며, 어떠한 외부 원격 서버로도 전송 혹은 무단 보관되지 않으므로 안심하고 정밀 개조 정비를 진행하셔도 좋습니다. 사이트의 유지 보수와 안정적인 연동 정보 확인을 위해 구글 애드센스(Google AdSense) 등 서드파티 스크립트를 통한 쿠키 수집이 수행될 수 있습니다.",
    privacySec2Title: "2. 제3자 광고 게재 및 쿠키 수집 안내 (구글 애드센스 요구안 준수)",
    privacySec2Desc: "본 웹사이트는 구글(Google, Inc.)을 비롯한 제3자 광고 제휴 업체의 광고 송출 프로세서를 활용하여 가동 비용을 충당합니다. 구글은 사용자가 본 사이트 또는 타 웹서비스를 방문한 기록을 바탕으로 보다 정밀하고 유용한 맞춤형 광고를 표출하기 위해 Doubleclick 쿠키 및 광고 파트너 식별자가 자체 활용합니다. 사용자는 언제든지 구글 광고 공식 관리국을 통해 개인 맞춤형 연동 추적을 거부하고 설정을 차단할 수 있습니다.",
    privacySec3Title: "3. 개인정보 보호 담당 주소",
    privacySec3Desc: "정보 처리 및 개정과 관련된 버그성 애로사항이나 기타 보안 문의선은 공식 무전 채널인 ericdm47@gmail.com으로 언제든 편히 무전해 주십시오.",
    termsTitle: "⚖️ 서비스 이용약관 (Terms of Service)",
    termsDate: "시행일: 2026년 6월 12일",
    termsSec1Title: "제1조 (목적)",
    termsSec1Desc: "본 규약은 이용자가 'Armoury Fixer 커스텀 YAML 에디터'가 무상 기부하는 클라이언트 사이드 변환 엔진과 프리셋 저장 인프라를 지혜롭게 다룸에 있어 상호 신뢰와 원활한 작동성을 지속 지키기 위한 수칙의 확보를 목적으로 삼습니다.",
    termsSec2Title: "제2조 (책임의 한계 및 백업 면책)",
    termsSec2Desc: "본 수작업 조절기는 마인크래프트의 대표적인 장비 구성 사양을 간편 조율하도록 특별 고안된 독립 무료 도구이며, 변환 제작된 최종 산출물 적용 시 발생할 수 있는 마인크래프트 버그, 인게임 서버 튕김, 충돌(Crash) 등의 책임선은 일체 귀하에게 귀속됩니다. 소중하게 가공한 무기 설정 yaml 코드의 실제 적용 이전에는 안전하게 로컬 이중 사본(.bak)을 구성하는 백업 원칙을 준수할 것을 무상 라이선스 기준 하에 각별히 협조 부탁드립니다.",
    termsSec3Title: "제3조 (지적 재산 및 오남용 규제)",
    termsSec3Desc: "본 무료 소스 코드의 고의적인 악성 변조 및 스크래핑 행위, 웹사이트 트래픽 고부하 인젝트, 또는 광고 차단기 강요 등으로 인한 운영 간섭은 본 라이선스 제공 거부 및 트래픽 제한 사유가 될 수 있습니다.",

    staticInquiryNoticeTitle: "문의 전송 방법 안내",
    staticInquiryNoticeDesc: "이 편집기는 브라우저 안에서 단독 실행되는 정적 포지 에뮬레이터(Client-side SPA)입니다. 백엔드 전송 서버를 거치지 않고, 고객님의 인게임 이메일 앱을 이용해 개발자 메일함으로 보다 안전하게 즉시 발송됩니다!",
    copyInquiryBtn: "📋 내용 복사하기",
    copiedInquiryBtn: "✓ 복사 완료!",
    openMailBtn: "✉ 메일 쓰기 실행",
    backToFormBtn: "← 뒤로 돌아가서 폼 다시 쓰기",

    descriptions: {
      damage: "총기의 기본 데미지입니다. 값이 높을수록 대상에게 주는 피해가 증가합니다.",
      firerate: "연사 속도입니다. 이 숫자가 커질수록 단위 시간당 발사 가능한 총알 수가 늘어납니다.",
      recoil: "반동 세기입니다. 사격 시 가늠쇠 조준선 및 시야가 위로 튀는 오차율을 결정합니다. (기본값 AR: 0.7)",
      maxbullets: "탄창 한 개에 장전할 수 있는 최대 탄약 수(장탄수)입니다.",
      maxBulletDistance: "탄환의 유효 사거리(블록 단위)입니다. 유효 범위 밖에서는 탄환 데미지가 대폭 감쇄합니다.",
      setZoomLevel: "줌 배율 수준입니다. 우클릭 정조준 시의 시야 축소 배율을 높입니다.",
      delayForShoot: "사격 간의 지연 딜레이 시간입니다. 숫자가 작을수록 더 빠른 단발 사격이 가능해집니다.",
      isAutomatic: "마우스 클릭 상태를 유지할 때 총알이 연속으로 자동 발사(연사)되게 할지 여부입니다.",
      delayForReload: "재장전 모션이 시작된 후, 탄약 보충이 완료될 때까지 소요되는 총 시간(초 단위)입니다.",
      ammotype: "사용하는 탄약의 종류 및 규격을 수식하는 코드명입니다.",
      name: "총기 아이디 또는 내부 시스템 플러그인에 인식되는 전역 고유명사입니다.",
      displayname: "인게임 툴팁 및 킬로그 UI 상에서 유저들에게 화려하게 보여줄 색상 코드 명칭입니다.",
      id: "아이템 고유 정수 ID 또는 서버와 호환되는 리소스 보더 인덱스 값입니다.",
      variant: "총기의 3D 모델링 스킨이나 특색 텍스처를 변경할 수 있는 바리에이션 서브 코드 값입니다.",
      craftingRequirements: "제작대에서 총기를 조합해 만드는 데 필요한 마인크래프트 물리 원소 및 금속/레드스톤 배율입니다.",
      weapontype: "설장 무기의 전술 카테고리 유형(SMG, SR, AR, HG, SG, DMR)입니다.",
      weaponsounds: "사격, 재장전, 탄창 제거 및 기타 기계 수동 조작 시 실행될 사운드 에셋 경로입니다.",
      enableIronSights: "아이언 사이트(가늠쇠/가늠구멍)를 통한 견착 조준 시스템을 활성화할지 판단하는 기준 값입니다.",
    }
  },
  en: {
    title: "ARMOURY FIXER",
    subtitle: "Industrial Config Forge",
    importPreset: "Preset",
    presetPlaceholder: "Select Preset",
    propSMG: "SMG (Submachine Gun)",
    propSR: "SR (Sniper Rifle)",
    propAR: "AR (Assault Rifle)",
    propHG: "HG (Pistol)",
    propSG: "SG (Shotgun)",
    propDMR: "DMR (Designated Marksman)",
    undo: "Undo",
    redo: "Redo",
    editorTab: "⚙ CONFIG FORGE",
    infoTab: "📜 ABOUT & SUPPORT",

    fileManager: "FILE MANAGER",
    chooseFile: "Select File",
    dragAndDrop: "Or drag & drop here to load",
    selectedFile: "Selected File",
    saveFile: "SAVE FILE",

    quickPresets: "QUICK PRESETS",

    viewingChangedOnly: "Changed items only",
    expandAll: "Expand All",
    collapseAll: "Collapse All",
    searchPlaceholder: "Search settings (e.g. recoil, damage)...",
    clear: "Clear",

    emptyDesc: "No configuration code found. Click below to load the default Minecraft weapon layout sample.",
    fillExample: "Load Default Example",
    infoBannerHeader: "⚙ Real-time Helper Board",
    infoBannerDesc: "Hover or touch any parameter in the editor to sync and view details and recommended specifications in real-time.",
    guideHighlight: "Design Highlight Legend",
    guideHighlightValue: "Modified inputs and sliders shine with elegant amber glows",
    pretendardGuide: "Optimized with Pretendard font and precise layouts for maximum readability.",

    whatIsSite: "About Armoury Fixer (Site Guide)",
    whatIsSiteDesc1: "This is a custom industrial-themed YAML editor designed for Minecraft server developers and administrators to safely customize weapon and equipment attributes (like the Quality Armoury plugin assets) through visual controls.",
    whatIsSiteDesc2: "Since a minor syntax error in deep YAML config scopes can completely crash plugin engine loops, this app provides completely click-safe custom dials to compose error-free weapon.yml settings with 100% validity.",
    terminalTitle: "Precision Control Terminal",
    terminalDesc: "Automatically detects configuration value types (Booleans, Numbers, Lists, etc.) to safely prevent parsing crashes.",
    presetsTitle: "Smart Presets",
    presetsDesc: "Quickly inject core tactical presets (SMG, Sniper, Assault Rifle, etc.) with single-click merges.",

    safeGuideTitle: "Safety First (How to operate)",
    step1Title: "Drag & Drop Input",
    step1Desc: "Drop your Minecraft plugin .yml asset file directly onto the sensor grid playground to start editing.",
    step2Title: "Intellisense Tooltips",
    step2Desc: "Hover on the blue ⓘ info circle icons adjacent to keys to immediately show their mechanical functions.",
    step3Title: "Change Tracking",
    step3Desc: "Values altered from original states are illuminated with bright orange gradients for swift review prior to export.",
    step4Title: "Full Undo & Redo System",
    step4Desc: "Easily revert mistakes anytime using the compression gear controls in the header panel.",

    inquiryTitle: "1:1 Tech Report & Suggestions",
    inquirySuccessTitle: "Inquiry Ticket Submitted!",
    inquirySuccessDesc: "Your mechanical report has been prepared for dispatch to ericdm47@gmail.com developer inbox!",
    inquiryResetBtn: "Open New Ticket",
    inquiryNameLabel: "Sender name (Engineer):",
    inquiryNamePlaceholder: "Your name or Server ID",
    inquiryEmailLabel: "Reply Email Address (Default):",
    inquiryTypeLabel: "Report Category (Filter):",
    inquiryContentLabel: "Detailed Message (Report Box):",
    inquiryContentPlaceholder: "Enter suggestions, bug alerts, or custom inquiries here...",
    inquirySubmitBtn: "📟 Ignite Dispatch Processor (Submit)",
    inquiryAlert: "Please fill in both name and content fields.",
    optBug: "🐛 Bug report / Technical analysis",
    optFeature: "⚙️ Extra presets / custom feature options",
    optCollab: "💼 Business / Custom forge order",
    optOther: "☕ Other talks / feedback greetings",

    devChannelTitle: "Developer Radio (Forge Masters)",
    devChannelDesc: "Official link to the Forge Masters who love Minecraft and custom engines. Feedback and issue tickets are highly valued.",
    devEmailLabel: "Official Email",
    devEmailBtn: "Send Email",
    devGithubLabel: "GitHub Repository",
    devGithubBtn: "Visit Repository",

    legalTitle: "Legal Policy",
    privacyTitle: "🔒 Privacy Policy",
    privacyDate: "Last Updated: June 12, 2026",
    privacyIntro: "This privacy statement describes how we process user interaction data safely and minimally in full compliance with global rules.",
    privacySec1Title: "1. Data Processing and Core Methods",
    privacySec1Desc: "This tool runs completely client-side. The Minecraft YAML settings you drag or upload are parsed strictly within your local browser's memory cache. No data gets saved or transmitted to any remote servers. For maintenance and safe metrics, third-party code like Google AdSense might utilize cookies.",
    privacySec2Title: "2. Third-Party Advertising (AdSense Compliance)",
    privacySec2Desc: "We partner with Google AdSense to serve ads on our site. Google uses Doubleclick cookies to serve interest-based ads to visitors based on visits here and across other websites. You can completely opt-out of personalized ads in your Google Ad Settings.",
    privacySec3Title: "3. Contacts",
    privacySec3Desc: "Reach our security master anytime at ericdm47@gmail.com for inquiries or reports.",
    termsTitle: "⚖️ Terms of Service",
    termsDate: "Effective Date: June 12, 2026",
    termsSec1Title: "Article 1 (Purpose)",
    termsSec1Desc: "These terms govern the use of Armoury Fixer and our client-side conversion utilities to sustain safety and robust mutual reliability.",
    termsSec2Title: "Article 2 (Limitation of Liability & Backups)",
    termsSec2Desc: "This utility is a free configuration editor. We accept no liability for side effects, game server crashes, or conflicts caused by generated YAML code. Always maintain local backups (.bak copies) before pasting any exported config into live servers.",
    termsSec3Title: "Article 3 (Intellectual Property & Fair Use)",
    termsSec3Desc: "Scraping, high-load automated scripts, or intrusive interactions may result in traffic blocks and termination of service availability.",

    staticInquiryNoticeTitle: "How to Dispatch Your Ticket",
    staticInquiryNoticeDesc: "This is a static client-side single-page app. To bypass cloud database errors, templates are prepared for your client email software to let you send reports securely directly!",
    copyInquiryBtn: "📋 Copy Contents",
    copiedInquiryBtn: "✓ Copied!",
    openMailBtn: "✉ Open Local Mail App",
    backToFormBtn: "← Go Back to Edit Form",

    descriptions: {
      damage: "Base attack damage of the firearm. Higher levels inflict more damage onto targeted entities.",
      firerate: "RoF (Rate of Fire). Larger values increase bullets expelled per unit time.",
      recoil: "Recoil intensity. Decides the crosshair and view jump offset magnitude upon firing. (Default AR is 0.7)",
      maxbullets: "The capacity ceiling of loaded bullets in a single magazine.",
      maxBulletDistance: "The effective bullet range (in blocks). Damage decays sharply beyond this limit.",
      setZoomLevel: "Zoom magnification ratio. Increases ADS magnification depth upon right-clicking.",
      delayForShoot: "The shooting cooldown delay. Smaller values accelerate rapid semi-auto actions.",
      isAutomatic: "Sets whether hold-down trigger inputs cycle automatic continuous firing loops.",
      delayForReload: "Total duration (in seconds) experienced during manual cylinder or magazine reload cycles.",
      ammotype: "Identifier code specifying the physical ammo item type and gauge.",
      name: "The structural registration ID parsed globally by the main minecraft plugin.",
      displayname: "The glowing text or code name shown proudly to users on hover and in kill logs.",
      id: "Minecraft specific item ID, or numeric custom model data reference mapping.",
      variant: "Variation value utilized to alter gun models or load customized skins.",
      craftingRequirements: "Materials, ores, or redstone nodes demanded to craft and forge this piece at tables.",
      weapontype: "Tactical group category matching core classes: SMG, SR, AR, HG, SG, DMR.",
      weaponsounds: "Local asset key pointing to sound patterns played during action states.",
      enableIronSights: "Whether ADS iron sight camera zooming gets authorized.",
    }
  }
};
