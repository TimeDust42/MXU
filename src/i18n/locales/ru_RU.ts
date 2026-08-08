export default {
  // Common
  common: {
    confirm: 'Подтвердить',
    cancel: 'Отмена',
    undo: 'Отменить',
    save: 'Сохранить',
    delete: 'Удалить',
    edit: 'Изменить',
    add: 'Добавить',
    open: 'Открыть',
    close: 'Закрыть',
    reset: 'Сбросить',
    loading: 'Загрузка...',
    error: 'Ошибка',
    success: 'Успешно',
    warning: 'Предупреждение',
    info: 'Информация',
    resizeOrCollapse: 'Потяните, чтобы изменить размер; потяните к правому краю, чтобы свернуть',
    copySuffix: ' (копия)',
    desktopOnly: 'Только для настольной версии',
  },

  // Title bar
  titleBar: {
    newTab: 'Новая вкладка',
    closeTab: 'Закрыть вкладку',
    settings: 'Настройки',
    about: 'О программе',
    renameInstance: 'Переименовать конфигурацию',
    instanceName: 'Имя конфигурации',
    dragToReorder: 'Перетащите, чтобы изменить порядок',
    closeTabConfirmTitle: 'Закрытие вкладки',
    closeTabConfirmMessage: 'Вы уверены, что хотите закрыть «{{name}}»?',
    closeMultiTabConfirmTitle: 'Закрытие вкладок',
    closeMultiTabConfirmMessage: 'Вы уверены, что хотите закрыть вкладки ({{count}} шт.)?',
  },

  // Window controls
  windowControls: {
    minimize: 'Свернуть',
    maximize: 'Развернуть',
    restore: 'Восстановить',
    close: 'Закрыть',
  },

  // Settings
  settings: {
    title: 'Настройки',
    appearance: 'Внешний вид',
    hotkeys: 'Горячие клавиши',
    general: 'Общие',
    taskSettings: 'Настройки задач',
    taskSettingsEmpty: 'Нет доступных для отображения настроек',
    language: 'Язык',
    backgroundImage: 'Фоновое изображение',
    backgroundOpacity: 'Прозрачность фона',
    selectBackgroundImage: 'Выбрать фон',
    removeBackgroundImage: 'Удалить фон',
    languageSystem: 'Системный',
    theme: 'Тема',
    themeLight: 'Светлая',
    themeDark: 'Тёмная',
    accentColor: 'Акцентный цвет',
    themeSystem: 'Системная',
    showOptionPreview: 'Показывать предпросмотр опций',
    showOptionPreviewHint: 'Показывать быстрый предпросмотр опций в списке задач',
    openLogDir: 'Открыть папку с логами',

    // Custom accents
    customAccents: 'Пользовательские акценты',
    addCustomAccent: 'Добавить',
    editCustomAccent: 'Изменить пользовательский акцент',
    deleteCustomAccent: 'Удалить',
    noCustomAccents: 'Пользовательских акцентов пока нет',
    customAccentNameRequired: 'Пожалуйста, введите название',
    deleteCustomAccentConfirm: 'Вы уверены, что хотите удалить этот пользовательский акцент?',
    openNav: 'Открыть меню навигации',
    closeNav: 'Закрыть меню навигации',
    customAccentDeleted: 'Удалено: {{name}}',
    accentName: 'Название',
    accentNamePlaceholder: 'напр. Тёмно-фиолетовый',
    autoAccentName: '{{hex}}',
    accentMainColor: 'Основной цвет',
    accentHoverColor: 'Цвет при наведении',
    accentLightColor: 'Светлый фон',
    accentLightDarkColor: 'Тёмный фон',
    accentColorConfig: 'Настройка цвета',
    accentPreview: 'Предпросмотр',
    accentPreviewMainButton: 'Основная кнопка',
    accentPreviewLightBg: 'Светлый фон',
    accentPreviewDarkBg: 'Тёмный фон',

    hotkeysStartTasks: 'Горячая клавиша запуска задач',
    hotkeysStopTasks: 'Горячая клавиша остановки задач',
    hotkeysHint:
      'Действует только на главном экране; используется для запуска/остановки задач текущей конфигурации. Поддерживаются комбинации с модификаторами (напр. Ctrl+F10, Ctrl+Shift+F11); обычные F5/F12 зарезервированы системой/браузером.',
    hotkeysConflict: 'Горячие клавиши запуска и остановки не должны совпадать. Пожалуйста, выберите разные клавиши.',
    hotkeysGlobal: 'Глобальные горячие клавиши',
    hotkeysGlobalHint: 'Включить горячие клавиши, когда окно не в фокусе',
    hotkeysGlobalOnlyStart: 'в глобальном режиме работает только запуск',
    hotkeysGlobalConflict:
      'Комбинация {{combo}} уже занята, поэтому глобальные горячие клавиши сейчас неактивны. Пожалуйста, выберите другую клавишу или проверьте, не удерживается ли эта комбинация другой программой либо копией приложения.',
    hotkeysGlobalRegisterFailed: 'Не удалось зарегистрировать глобальную горячую клавишу {{combo}}: {{error}}',

    minimizeToTray: 'Сворачивать в трей при закрытии',
    minimizeToTrayHint: 'Скрывать в системный трей вместо выхода при нажатии кнопки закрытия',

    autoStart: 'Запускать при загрузке системы',
    autoStartHint: 'Автоматически запускать это приложение при загрузке системы',
    autoStartInstance: 'Автозапуск конфигурации при старте',
    autoStartInstanceHint:
      'Выберите конфигурацию, которая будет активирована и запущена автоматически после старта. Запланированные задачи других конфигураций будут выполняться как обычно',
    autoStartInstanceNone: 'Не запускать автоматически',
    autoStartInstanceRemoved:
      'Ранее выбранная конфигурация «{{name}}» была удалена. Автозапуск отключён',
    autoRunOnLaunch: 'Также запускать при ручном открытии',
    autoRunOnLaunchHint:
      'Автоматически выполнять выбранную конфигурацию при ручном открытии приложения (если отключено — срабатывает только при запуске системы)',

    confirmBeforeDelete: 'Подтверждать удаление',
    confirmBeforeDeleteHint:
      'Показывать диалог подтверждения перед удалением/очисткой списка и другими опасными действиями.',

    helpImproveSoftware: 'Помочь улучшить приложение',
    helpImproveSoftwareHint:
      'Анонимно отправлять отчёты о сбоях и статистику задач, чтобы помочь найти распространённые проблемы.',
    helpImproveSoftwareDisabledHint:
      'Отправка анонимных данных отключена в отладочных / dev-сборках.',

    maxLogsPerInstance: 'Максимум логов на конфигурацию',
    maxLogsPerInstanceHint:
      'При превышении лимита самые старые логи будут удалены (рекомендуется 500–2000)',

    resetWindowLayout: 'Сбросить макет окна',
    resetWindowLayoutHint: 'Восстановить размер окна по умолчанию и центрировать окно',

    autoClearLogsOnLaunch: 'Автоочистка логов выполнения',
    autoClearLogsOnLaunchHint:
      'Автоматически очищать логи выполнения и удалять старые файлы логов вместе с отладочными скриншотами в on_error и vision при каждом запуске проекта',
  },

  // Special tasks
  specialTask: {
    sleep: {
      label: '⏳ Таймер ожидания',
      optionLabel: 'Настройки отсчёта',
      inputLabel: 'Время ожидания (секунды)',
      inputError: 'Пожалуйста, введите положительное целое число',
    },
    waitUntil: {
      label: '⏰ Ждать до',
      optionLabel: 'Настройки времени',
      optionDescription:
        'Ждёт до указанного времени, прежде чем продолжить. Поддерживается только в пределах 24 часов. Если указанное время уже прошло сегодня, ожидание продлится до этого времени завтра',
      inputLabel: 'Целевое время',
    },
    launch: {
      label: '▶️ Своя программа',
      optionLabel: 'Настройки программы',
      programLabel: 'Путь к программе',
      programPlaceholder: 'Введите путь к программе или нажмите «Обзор»...',
      argsLabel: 'Дополнительные аргументы',
      argsPlaceholder: 'Введите дополнительные аргументы (необязательно)',
      waitLabel: 'Ждать завершения',
      waitDescription:
        'Когда отключено — продолжает сразу после запуска; когда включено — ждёт завершения процесса. Подходит для скриптов, которые должны выполниться синхронно',
      waitYes: 'Ждать завершения программы',
      waitNo: 'Продолжить сразу после запуска',
      skipLabel: 'Пропускать, если уже запущена',
      skipDescription:
        'Когда включено, пропускает запуск, если программа уже выполняется, чтобы избежать дублирования',
      skipYes: 'Пропустить запуск, если уже выполняется',
      skipNo: 'Всегда запускать новый экземпляр',
      cmdLabel: 'Запуск через cmd',
      cmdDescription:
        'Когда включено, запускает программу через cmd /c, чтобы отделить её от текущего дерева процессов. Некоторые игры могут отслеживать дерево процессов (только Windows)',
      cmdYes: 'Запуск через cmd /c',
      cmdNo: 'Запуск как прямой дочерний процесс',
    },
    notify: {
      label: '💬 Системное уведомление',
      optionLabel: 'Настройки уведомления',
      titleLabel: 'Заголовок',
      titlePlaceholder: 'Введите заголовок уведомления',
      bodyLabel: 'Содержимое',
      bodyPlaceholder: 'Введите текст уведомления',
    },
    webhook: {
      label: '🔔 Вебхук',
      optionLabel: 'Настройки запроса',
      urlLabel: 'URL запроса',
      urlPlaceholder: 'Введите полный URL (напр. https://example.com/webhook?key=xxx)',
    },
    killProc: {
      label: '⛔ Завершить процесс',
      selfLabel: 'Завершить себя',
      selfDescription:
        'Когда включено — завершает само приложение; когда отключено — можно ввести имя другого процесса для завершения',
      selfYes: 'Завершить это приложение',
      selfNo: 'Завершить указанный процесс',
      nameOptionLabel: 'Настройки процесса',
      nameLabel: 'Имя процесса',
      namePlaceholder: 'Введите имя процесса (напр. notepad.exe)',
    },
    power: {
      label: '⚡ Действие питания',
      optionLabel: 'Тип действия',
      shutdown: 'Выключение',
      restart: 'Перезагрузка',
      screenoff: 'Выключить экран',
      sleep: 'Спящий режим',
    },
  },

  // Task list
  taskList: {
    title: 'Список задач',
    selectAll: 'Выбрать все',
    deselectAll: 'Снять выделение',
    collapseAll: 'Свернуть все',
    expandAll: 'Развернуть все',
    addTask: 'Добавить задачу',
    noTasks: 'Нет задач',
    dragToReorder: 'Перетащите, чтобы изменить порядок',
    startTasks: 'Запустить задачи',
    stopTasks: 'Остановить задачи',
    startingTasks: 'Запуск...',
    stoppingTasks: 'Остановка...',
    tasksSkippedDueToIncompatibility: 'Пропущено несовместимых задач: {{count}}',
    taskSkippedController: 'Задача «{{taskName}}» не поддерживает текущий контроллер',
    taskSkippedResource: 'Задача «{{taskName}}» не поддерживает текущий ресурс',
    noCompatibleTasks: 'Нет задач, совместимых с текущим контроллером и ресурсом',

    // Auto connect
    autoConnect: {
      searching: 'Поиск устройств...',
      searchingWindow: 'Поиск окон...',
      connecting: 'Подключение устройства...',
      connectingWindow: 'Подключение окна...',
      loadingResource: 'Загрузка ресурса...',
      deviceNotFound: 'Устройство не найдено: {{name}}',
      windowNotFound: 'Окно не найдено: {{name}}',
      noSavedDevice: 'Нет сохранённой конфигурации устройства',
      noDeviceFound: 'Устройства не найдены',
      noWindowFound: 'Окна не найдены',
      connectFailed: 'Ошибка автоподключения',
      retryConnect: 'Ошибка подключения, попытка {{attempt}}...',
      autoSelectedDevice:
        'Устройство не было выбрано ранее. Автоматически подобрано «{{name}}». Чтобы изменить, выберите вручную в настройках подключения — в следующий раз ваш выбор будет запомнен.',
      autoSelectedWindow:
        'Окно не было выбрано ранее. Автоматически подобрано «{{name}}». Чтобы изменить, выберите вручную в настройках подключения — в следующий раз ваш выбор будет запомнен.',
      resourceFailed: 'Не удалось загрузить ресурс',
      startFailed: 'Не удалось запустить задачи',
      workstationLocked: 'Компьютер заблокирован. Пожалуйста, разблокируйте его перед запуском задач.',
      agentStartParams: 'Параметры запуска агента #{{index}}: {{cmd}} (cwd: {{cwd}})',
      agentSpawnHintFileNotFound:
        'Проверьте, не заблокировал ли антивирус агент, затем переустановите приложение поверх текущей установки.',
      agentSpawnHintAppControl:
        'Отключите Smart App Control в разделе «Безопасность Windows» → «Управление приложениями и браузером», затем повторите попытку.',
      needConfig:
        'Сначала подключите устройство и загрузите ресурс либо сохраните конфигурацию устройства в панели подключения',
    },
  },

  // Task item
  taskItem: {
    options: 'Опции',
    noOptions: 'Нет настраиваемых опций',
    enabled: 'Включено',
    disabled: 'Отключено',
    expand: 'Развернуть опции',
    collapse: 'Свернуть опции',
    remove: 'Удалить задачу',
    removeConfirmTitle: 'Удаление задачи',
    removeConfirmMessage: 'Вы уверены, что хотите удалить эту задачу?',
    rename: 'Переименовать',
    clickToToggle: 'Нажмите, чтобы переключить',
    renameTask: 'Переименование задачи',
    customName: 'Своё имя',
    originalName: 'Исходное имя',
    cannotEditRunningTask: 'Нельзя изменять опции запущенных или завершённых задач',

    // Description content loading
    loadingDescription: 'Загрузка описания...',
    loadedFromFile: 'Содержимое загружено из локального файла',
    loadedFromUrl: 'Содержимое загружено по URL',
    loadDescriptionFailed: 'Не удалось загрузить',

    // Task run status
    status: {
      idle: 'Не запущено',
      pending: 'В очереди',
      running: 'Выполняется',
      succeeded: 'Завершено',
      failed: 'Ошибка',
    },

    // Task compatibility
    incompatibleController: 'Не поддерживается текущим контроллером',
    incompatibleResource: 'Не поддерживается текущим ресурсом',
    supportedControllers: 'Только: {{controllers}}',
  },

  // Options
  option: {
    select: 'Пожалуйста, выберите',
    input: 'Пожалуйста, введите',
    yes: 'Да',
    no: 'Нет',
    invalidInput: 'Неверный формат ввода',
  },

  action: {
    preAction: '▶️ Предварительная программа',
    program: 'Путь к программе',
    programPlaceholder: 'Введите путь к программе или нажмите «Обзор»...',
    args: 'Аргументы',
    argsPlaceholder: 'Введите дополнительные аргументы (необязательно)',
    browse: 'Обзор',
    waitForExit: 'Ждать завершения',
    waitForExitHintPre:
      'Когда отключено — продолжает сразу после запуска процесса и ожидает подключение устройства; подходит для асинхронных сценариев, например запуска игры. Когда включено — блокирует выполнение до завершения процесса; подходит для синхронных операций, например выполнения скриптов',
    skipIfRunning: 'Пропускать, если уже запущена',
    skipIfRunningHint:
      'Когда включено, пропускает выполнение, если программа уже запущена — полезно, чтобы не перезапускать игры и другие приложения',
    useCmd: 'Запуск через cmd',
    useCmdHint:
      'Когда включено, запускает программу через cmd /c, чтобы отделить её от текущего дерева процессов. Некоторые игры могут отслеживать дерево процессов (только Windows)',
    preActionSkipped: 'Предварительная программа «{{name}}» уже выполняется — пропущено',
    waitingForDevice: 'Ожидание готовности устройства...',
    waitingForWindow: 'Ожидание готовности окна...',
    waitingForDeviceNamed: 'Ожидание готовности устройства «{{name}}»...',
    waitingForWindowNamed: 'Ожидание готовности окна «{{name}}»...',
    waitingForAnyDevice:
      'Ожидание появления любого подходящего устройства. Если это не то устройство, выберите его вручную в настройках подключения перед запуском.',
    waitingForAnyWindow:
      'Ожидание появления любого подходящего окна. Если это не то окно, выберите его вручную в настройках подключения перед запуском.',
    deviceReady: 'Устройство готово',
    windowReady: 'Окно готово',
    deviceWaitTimeout: 'Тайм-аут ожидания устройства',
    windowWaitTimeout: 'Тайм-аут ожидания окна',
    preActionStarting: 'Запуск предварительной программы...',
    preActionStartingNamed: 'Запуск предварительной программы: {{name}}...',
    preActionCompleted: 'Предварительная программа завершена',
    preActionCompletedNamed: 'Предварительная программа «{{name}}» завершена',
    preActionFailed: 'Ошибка предварительной программы: {{error}}',
    preActionExitCode: 'Код выхода предварительной программы: {{code}}',
    pretaskStarting: 'Запуск предзадачи: {{name}}',
    pretaskCompleted: 'Предзадача завершена: {{name}}',
    pretaskExitCode: 'Код выхода предзадачи: {{code}}',
    pretaskFailed: 'Ошибка предзадачи: {{error}}',
    preActionConnectDelay: 'Ожидание {{seconds}} сек. перед подключением...',
    autoPreActionName: '▶️ Запуск {{name}}',
    autoPreActionAdded: 'Автоматически добавлено предварительное действие: {{name}} (отключено по умолчанию)',
    removeConfirmTitle: 'Удаление предварительного действия',
    removeConfirmMessage: 'Вы уверены, что хотите удалить это предварительное действие?',
  },

  // Option Editor
  optionEditor: {
    loadingDescription: 'Загрузка описания...',
    loadedFromFile: 'Содержимое загружено из локального файла',
    loadedFromUrl: 'Содержимое загружено по URL',
    loadDescriptionFailed: 'Не удалось загрузить',
    searchPlaceholder: 'Поиск опций...',
    noMatchingOptions: 'Нет подходящих опций',
    incompatibleController: 'Не поддерживается текущим контроллером',
    incompatibleResource: 'Не поддерживается текущим ресурсом',
    hotkeyPlaceholder: 'Нажмите, чтобы записать сочетание клавиш',
    hotkeyCapturing: 'Нажмите клавиши...',
    expandOptions: 'Развернуть вложенные опции',
    collapseOptions: 'Свернуть вложенные опции',
  },

  // Preset
  preset: {
    title: 'Выберите пресет',
    hint: 'Примените предопределённую конфигурацию задач, чтобы быстро начать',
    taskCount: 'задач',
    skipToManual: 'Пропустить, добавить задачи вручную',
    importConfig: 'Импорт конфигурации из буфера обмена',
    importConfigFromFile: 'Импорт конфигурации из файла',
    importSuccess: 'Конфигурация успешно импортирована',
    importFailed: 'Ошибка импорта: неверный формат',
    importProjectMismatch: 'Ошибка импорта: несовпадение проекта',
    importVersionUnsupported:
      'Ошибка импорта: эта конфигурация экспортирована более новой версией {{projectName}}. Пожалуйста, обновите {{projectName}} и повторите попытку',
    exportSuccess: 'Конфигурация скопирована в буфер обмена',
    exportFailed: 'Ошибка экспорта: не удалось записать в буфер обмена',
    exportFileSuccess: 'Конфигурация экспортирована в txt-файл',
    exportFileFailed: 'Ошибка экспорта: не удалось записать файл',
    exportShareHint: 'Делюсь с вами моей конфигурацией {{projectName}} «{{tabName}}»~',
    exportShareFooter:
      '👆 Скопируйте это сообщение, откройте {{projectName}}, создайте новую вкладку и нажмите «Импорт конфигурации», чтобы сразу её использовать',
  },

  // Controller
  controller: {
    title: 'Контроллер',
    selectController: 'Выберите контроллер',
    adb: 'Android-устройство',
    win32: 'Окно Windows',
    wlroots: 'WlRoots (Linux)',
    playcover: 'PlayCover (macOS)',
    macos: 'Окно macOS',
    macosPermissionsRequired:
      'Требуются разрешения на запись экрана и универсальный доступ. Предоставьте их в системных настройках macOS в разделе «Конфиденциальность и безопасность», затем повторите попытку.',
    macosUnsupportedPlatform: 'Нативный контроллер окон macOS доступен только на macOS.',
    macosVersionRequired:
      'Для нативного контроллера окон macOS требуется MaaFramework v5.10.0-beta.1 или новее.',
    macosSystemVersionRequired: 'Для нативного контроллера окон macOS требуется macOS 14.0 или новее.',
    macosSystemVersionDetectionFailed:
      'Не удалось определить текущую версию macOS. Подробности смотрите в логах.',
    gamepad: 'Геймпад',
    connecting: 'Подключение...',
    connected: 'Подключено',
    disconnected: 'Отключено',
    connectionFailed: 'Ошибка подключения',
    refreshDevices: 'Обновить устройства',
    refreshWindows: 'Обновить окна',
    refresh: 'Обновить устройства',
    connect: 'Подключить',
    disconnect: 'Отключить',
    selectDevice: 'Выберите устройство',
    selectWindow: 'Выберите окно',
    noDevices: 'Устройства не найдены',
    noWindows: 'Окна не найдены',
    playcoverHint: 'Введите адрес прослушивания приложения PlayCover',
    lastSelected: 'Последний выбор · Нажмите для поиска',
    savedDeviceNotFound: 'Предыдущее устройство не найдено. Проверьте подключение или выберите другое',
    savedWindowNotFound: 'Предыдущее окно не найдено. Проверьте подключение или выберите другое',
    connectedLog: 'Подключён контроллер [{{name}}]',
  },

  // Resource
  resource: {
    title: 'Ресурс',
    selectResource: 'Выберите ресурс',
    loading: 'Загрузка ресурса...',
    loaded: 'Ресурс загружен',
    loadFailed: 'Не удалось загрузить ресурс',
    loadResource: 'Загрузить ресурс',
    switchFailed: 'Не удалось переключить ресурс',
    cannotSwitchWhileRunning: 'Нельзя переключать ресурс во время выполнения задач',
    hashMismatch:
      'Ошибка проверки целостности ресурса (ожидалось: {{expected}}, фактически: {{actual}}). Попробуйте скачать пакет ресурсов заново.',
    incompatibleController: 'Не поддерживается текущим контроллером',
  },

  // MaaFramework
  maa: {
    notInitialized: 'MaaFramework не инициализирован',
    initFailed: 'Ошибка инициализации',
    version: 'Версия',
    needConnection: 'Сначала подключите устройство',
    needResource: 'Сначала загрузите ресурсы',
  },

  // Screenshot preview
  screenshot: {
    title: 'Живой скриншот',
    autoRefresh: 'Автообновление',
    noScreenshot: 'Нет скриншота',
    startStream: 'Запустить прямую трансляцию',
    stopStream: 'Остановить прямую трансляцию',
    connectFirst: 'Сначала подключите устройство',
    fullscreen: 'Во весь экран',
    exitFullscreen: 'Выйти из полноэкранного режима',
    clickHint: 'Нажмите на изображение, чтобы отправить нажатие на устройство',

    // Frame rate settings
    frameRate: {
      title: 'Частота кадров скриншота',
      hint: 'Влияет только на плавность предпросмотра и потребление ресурсов системы, не влияет на распознавание и выполнение задач',
      unlimited: 'Без ограничений',
      fps5: '5 кадров/с',
      fps1: '1 кадр/с',
      every5s: 'Каждые 5 сек.',
      every30s: 'Каждые 30 сек.',
    },
  },

  // Logs
  logs: {
    title: 'Логи',
    clear: 'Очистить',
    autoscroll: 'Автопрокрутка',
    noLogs: 'Нет логов',
    copyAll: 'Копировать всё',
    showMoreLogs: 'Показать больше логов',
    expand: 'Развернуть панели выше',
    collapse: 'Свернуть панели выше',
    scrollToLogs: 'Просмотреть логи',

    // Log messages
    messages: {
      // Connection messages
      connecting: 'Подключение: {{target}}...',
      connected: '{{target}} подключено:',
      connectFailed: 'Ошибка подключения: {{target}}:',
      targetDevice: 'устройство',
      targetWindow: 'окно',

      // Resource loading messages
      loadingResource: 'Загрузка ресурса: {{name}}',
      resourceLoaded: 'Ресурс загружен: {{name}}',
      resourceFailed: 'Ошибка загрузки ресурса: {{name}}',
      resourceFailedHint:
        'Попробуйте удалить папку ресурсов и переустановить (с заменой файлов), затем повторите попытку.',

      // Task messages
      taskStarting: 'Задача запущена: {{name}}',
      taskSucceeded: 'Задача завершена: {{name}}',
      taskFailed: 'Ошибка задачи: {{name}}',
      stopTask: 'Остановить задачу',

      // Schedule messages
      scheduleStarting: 'Началось выполнение по расписанию [{{policy}}] {{time}}',
      scheduleCompensating:
        'Компенсировано выполнение по расписанию [{{policy}}] {{time}} (запущено после сна/пробуждения)',

      // Agent messages
      agentStarting: 'Запуск агента...',
      agentStarted: 'Агент запущен',
      agentConnected: 'Агент подключён',
      agentDisconnected: 'Агент отключён',
      agentFailed: 'Не удалось запустить агент',
      agentLogFloodWarning:
        'Агент в состоянии потока логов. Во избежание проблем с производительностью отображение логов приостановлено. Полный лог доступен в локальном файле.',
      agentLogFloodRecovered: 'Поток логов агента нормализовался',

      // Hotkeys
      hotkeyDetected: 'Обнаружена горячая клавиша: {{combo}} ({{action}})',
      hotkeyActionStart: 'Запуск задач',
      hotkeyActionStop: 'Остановка задач',
      hotkeyStartSuccess: 'Задачи запущены горячей клавишей:',
      hotkeyStartFailed: 'Не удалось запустить задачи горячей клавишей',
      hotkeyStopSuccess: 'Задачи остановлены горячей клавишей',
      hotkeyStopFailed: 'Не удалось остановить задачи горячей клавишей',
    },
  },

  // Add task panel
  addTaskPanel: {
    title: 'Добавить задачу',
    searchPlaceholder: 'Поиск задач...',
    noResults: 'Подходящие задачи не найдены',
    alreadyAdded: 'Уже добавлено',
    collapse: 'Свернуть панель',
    specialTasks: 'Специальные задачи',
    pretasks: 'Предзадачи',
    allSpecialTasksAdded: 'Всё добавлено',
    ungroupedTasks: 'Другие',
    resizeHandleAriaLabel: 'Изменение высоты панели добавления задач',
  },

  // About
  about: {
    title: 'О программе',
    version: 'Версия',
    description: 'Описание',
    license: 'Лицензия',
    contact: 'Контакты',
    github: 'Репозиторий GitHub',
  },

  // Debug
  debug: {
    title: 'Отладка',
    versions: 'Версии',
    interfaceVersion: 'Версия {{name}}',
    maafwVersion: 'Версия maafw',
    mxuVersion: 'Версия mxu',
    environment: 'Окружение',
    envTauri: 'Настольное приложение Tauri',
    envBrowser: 'Браузер',
    systemInfo: 'Сведения о системе',
    operatingSystem: 'Операционная система',
    architecture: 'Архитектура',
    tauriVersion: 'Версия Tauri',
    pathInfo: 'Сведения о путях',
    cwd: 'Текущая рабочая папка',
    exeDir: 'Папка исполняемого файла',
    webview2Dir: 'Папка WebView2',
    webview2System: 'Системный',
    resetWindowLayout: 'Сбросить макет окна',
    openConfigDir: 'Открыть папку конфигурации',
    openLogDir: 'Открыть папку логов',
    exportLogs: 'Экспорт логов',
    exportLogsHint:
      'Упаковывает логи и конфигурацию в zip-архив, сохраняя самые новые отладочные изображения, пока размер не достигнет ~24,5 МБ; при включённом «Сохранять отладочные изображения» включаются также изображения распознавания',
    exportingLogs: 'Экспорт логов...',
    logsExported: 'Логи экспортированы',
    exportLogsFailed: 'Не удалось экспортировать логи',
    devMode: 'Режим разработчика',
    devModeHint: 'При включении позволяет обновлять интерфейс клавишей F5',
    saveDraw: 'Сохранять отладочные изображения',
    saveDrawHint:
      'Сохранять отладочные изображения распознавания и действий в папку логов (автоматически отключается при перезапуске)',
    tcpCompatMode: 'Режим совместимости связи',
    tcpCompatModeHint:
      'Попробуйте включить, если приложение вылетает сразу после запуска задач. Используйте только в этом случае, так как это может снизить производительность',
    webServerEnabled: 'Включить веб-сервер',
    webServerEnabledHint:
      'Когда отключено, встроенный веб-сервер не запускается (требуется перезапуск)',
    webServerPort: 'Порт веб-сервера',
    webServerPortHint: 'Пользовательский порт веб-сервера (по умолчанию 12701, требуется перезапуск)',
    allowLanAccess: 'Разрешить доступ из локальной сети',
    allowLanAccessHint:
      'Когда включено, веб-интерфейс слушает 0.0.0.0, позволяя другим устройствам в локальной сети получать доступ',
    webServerRestartMessage:
      'Для применения изменений настроек веб-сервера требуется перезапуск. Перезапустить сейчас?',
    restartLater: 'Позже',
    restartNow: 'Перезапустить сейчас',
    webServerAddress: 'Адрес веб-сервера',
  },

  // Config self-heal notices
  config: {
    recoveredFromBackup:
      'Файл конфигурации был повреждён и восстановлен из резервной копии от {{time}}',
    recoveryFailed:
      'Файл конфигурации был повреждён, подходящая резервная копия не найдена — файл сброшен к настройкам по умолчанию',
  },

  // Welcome dialog
  welcome: {
    dismiss: 'Понятно',
    viewAgain: 'Посмотреть приветственное сообщение снова',
  },

  // Onboarding
  onboarding: {
    title: 'Подключите устройство',
    message:
      'Выберите устройство и загрузите ресурсы в панели «Настройки подключения» справа — после этого можно запускать задачи.',
    addTaskTitle: 'Добавьте задачи',
    addTaskMessage: 'Нажмите здесь, чтобы просмотреть доступные задачи и добавить нужные в список.',
    tabBarTitle: 'Управление конфигурациями',
    tabBarMessage:
      'Используйте вкладки сверху, чтобы создавать и переключать конфигурации — например, одну для ежедневной автоматизации, другую для инструментов реального времени. Каждая конфигурация хранит свои задачи и настройки устройства независимо.',
    next: 'Далее',
    prev: 'Назад',
    gotIt: 'Понятно',
    skipDev: 'Пропустить (DEV)',
  },

  // Instance
  instance: {
    defaultName: 'Конфигурация 1',
  },

  // Connection panel
  connection: {
    title: 'Настройки подключения',
  },

  // Dashboard
  dashboard: {
    title: 'Панель управления',
    toggle: 'Режим панели управления',
    exit: 'Выйти из панели управления',
    instances: 'конфигураций',
    noInstances: 'Нет конфигураций',
    running: 'Выполняется',
    succeeded: 'Успешно',
    failed: 'Ошибка',
    noEnabledTasks: 'Нет включённых задач',
    alignLeft: 'Выровнять карточки по левому краю',
    alignCenter: 'Выровнять карточки по центру',
    alignRight: 'Выровнять карточки по правому краю',
    zoomIn: 'Приблизить',
    zoomOut: 'Отдалить',
  },

  // Recently Closed
  recentlyClosed: {
    title: 'Недавно закрытые',
    empty: 'Нет недавно закрытых вкладок',
    reopen: 'Открыть снова',
    remove: 'Удалить из списка',
    clearAll: 'Очистить всё',
    clearAllConfirmTitle: 'Очистка недавно закрытых',
    clearAllConfirmMessage: 'Вы уверены, что хотите очистить список недавно закрытых вкладок?',
    justNow: 'Только что',
    minutesAgo: '{{count}} мин. назад',
    hoursAgo: '{{count}} ч. назад',
    daysAgo: '{{count}} дн. назад',
    noTasks: 'Нет задач',
    tasksCount: '{{first}} и ещё {{count}} задач',
  },

  // MirrorChyan Update
  mirrorChyan: {
    title: 'Обновление',
    debugModeNotice: 'Обнаружена отладочная версия, автообновление отключено',
    channel: 'Канал обновлений',
    channelStable: 'Стабильный',
    channelBeta: 'Бета',
    cdk: 'CDK MirrorChyan',
    cdkPlaceholder: 'Введите ваш CDK (необязательно)',
    serviceName: 'MirrorChyan',
    cdkHintAfterLink:
      ' — это независимый сторонний сервис ускоренной загрузки, требующий платной подписки. Это не комиссия «{{projectName}}». Расходы на его работу покрываются за счёт подписок, часть из которых идёт на поддержку разработчиков проекта. Оформите подписку для высокой скорости загрузки и поддержки разработки. Без CDK загрузка будет выполняться с GitHub. Если это не удастся, пожалуйста, настройте сетевой прокси.',
    getCdk: 'Нет CDK? Подписаться',
    cdkHint: 'Пожалуйста, проверьте, корректен ли ваш CDK и не истёк ли он',
    checkUpdate: 'Проверить обновления',
    checking: 'Проверка...',
    upToDate: 'У вас последняя версия ({{version}})',
    newVersion: 'Доступна новая версия',
    currentVersion: 'Текущая версия',
    latestVersion: 'Последняя версия',
    releaseNotes: 'Примечания к выпуску',
    downloadNow: 'Скачать сейчас',
    later: 'Напомнить позже',
    dismiss: 'Пропустить эту версию',
    noReleaseNotes: 'Примечания к выпуску недоступны',
    checkFailed: 'Не удалось проверить обновления',
    checkFailedHint: 'Пожалуйста, проверьте подключение к сети и повторите попытку',
    downloading: 'Загрузка',
    downloadComplete: 'Загрузка завершена',
    downloadFailed: 'Ошибка загрузки',
    viewDetails: 'Подробнее',
    noDownloadUrl: 'Нет доступной ссылки для загрузки. Пожалуйста, введите CDK или проверьте сетевое окружение',
    openFolder: 'Открыть папку',
    retry: 'Повторить',
    preparingDownload: 'Подготовка загрузки...',
    downloadFromGitHub: 'Скачать с GitHub',
    downloadFromMirrorChyan: 'Скачать через CDN MirrorChyan',

    // Update installation
    installing: 'Установка обновления...',
    installComplete: 'Установка завершена',
    installFailed: 'Ошибка установки',
    installNow: 'Установить сейчас',
    installUpdate: 'Установить обновление',
    installStages: {
      extracting: 'Распаковка...',
      checking: 'Проверка типа обновления...',
      applying: 'Применение обновления...',
      cleanup: 'Очистка...',
      done: 'Обновление завершено',
      incremental: 'Инкрементальное обновление',
      full: 'Полное обновление',
      fallback: 'Выполняется резервное обновление...',
    },
    restartRequired: 'Обновление установлено. Пожалуйста, перезапустите приложение для применения изменений.',
    restartNow: 'Перезапустить сейчас',
    restarting: 'Перезапуск...',
    installerOpened: 'Установщик открыт',
    installerOpenedHint: 'Пожалуйста, завершите установку в окне установщика, затем перезапустите это приложение',

    // After update complete
    updateCompleteTitle: 'Обновление завершено',
    updateCompleteMessage: 'Успешно обновлено до последней версии',
    previousVersion: 'Предыдущая версия',
    gotIt: 'Понятно',

    // MirrorChyan API error codes
    errors: {
      1001: 'Неверные параметры, пожалуйста, проверьте конфигурацию',
      7001: 'CDK истёк, пожалуйста, продлите или замените CDK',
      7002: 'Неверный CDK, пожалуйста, проверьте введённые данные',
      7003: 'Исчерпан дневной лимит загрузок CDK',
      7004: 'Тип CDK не соответствует ресурсу',
      7005: 'CDK заблокирован, пожалуйста, обратитесь в поддержку',
      8001: 'Нет ресурса для текущей ОС/архитектуры',
      8002: 'Неверный параметр ОС',
      8003: 'Неверный параметр архитектуры',
      8004: 'Неверный параметр канала обновлений',
      1: 'Ошибка сервиса, пожалуйста, повторите попытку позже',
      unknown: 'Неизвестная ошибка ({{code}}): {{message}}',
      negative: 'Ошибка сервера, пожалуйста, обратитесь в техническую поддержку',
    },
  },

  // Schedule
  schedule: {
    title: 'Запланированные задачи',
    button: 'Расписание',
    addPolicy: 'Добавить расписание',
    defaultPolicyName: 'Расписание',
    policyName: 'Название',
    noPolicies: 'Нет расписаний',
    noPoliciesHint: 'Добавьте расписание для автоматического запуска задач',
    repeatDays: 'Дни повторения',
    startTime: 'Время запуска',
    selectDays: 'Выберите дни...',
    addTime: 'Добавить время',
    noWeekdays: 'Дни не выбраны',
    noTimes: 'Время не выбрано',
    everyday: 'Каждый день',
    timesSelected: 'выбраны значения времени',
    timeZoneHint: 'Используется местный часовой пояс',
    multiSelect: 'множественный выбор',
    enable: 'Включить расписание',
    disable: 'Отключить расписание',
    enableAll: 'Включить все расписания',
    disableAll: 'Отключить все расписания',
    hint: 'Запланированные задачи будут выполняться автоматически в установленное время',
    executingPolicy: 'Выполняется расписание «{{name}}»',
    startedAt: 'Запущено в: {{time}}',
    deletePolicyTitle: 'Удаление расписания',
    deletePolicyConfirm: 'Вы уверены, что хотите удалить расписание «{{name}}»?',

    // Index corresponds to Date.getDay(): 0=Sun, 1=Mon, ..., 6=Sat
    weekdays: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  },

  // Error messages
  errors: {
    loadInterfaceFailed: 'Не удалось загрузить interface.json',
    invalidInterface: 'Неверный формат interface.json',
    invalidConfig: 'Неверный формат файла конфигурации',
    taskNotFound: 'Задача не найдена',
    controllerNotFound: 'Контроллер не найден',
    resourceNotFound: 'Ресурс не найден',
  },

  // Context Menu
  contextMenu: {
    // Tab context menu
    newTab: 'Новая вкладка',
    duplicateTab: 'Дублировать вкладку',
    renameTab: 'Переименовать',
    moveLeft: 'Переместить влево',
    moveRight: 'Переместить вправо',
    moveToFirst: 'Переместить в начало',
    moveToLast: 'Переместить в конец',
    closeTab: 'Закрыть вкладку',
    closeOtherTabs: 'Закрыть другие вкладки',
    closeAllTabs: 'Закрыть все вкладки',
    closeTabsToRight: 'Закрыть вкладки справа',
    exportConfig: 'Экспорт конфигурации',
    exportToClipboard: 'Экспорт в буфер обмена',
    exportToTxt: 'Экспорт в txt-файл',
    importConfig: 'Импорт конфигурации',
    importFromClipboard: 'Импорт из буфера обмена',
    importFromTxt: 'Импорт из txt-файла',

    // Pre-action context menu
    duplicateAction: 'Дублировать',
    deleteAction: 'Удалить',
    renameAction: 'Переименовать',
    enableAction: 'Включить',
    disableAction: 'Отключить',
    expandAction: 'Развернуть настройки',
    collapseAction: 'Свернуть настройки',

    // Task context menu
    addTask: 'Добавить задачу',
    duplicateTask: 'Дублировать задачу',
    deleteTask: 'Удалить задачу',
    renameTask: 'Переименовать задачу',
    enableTask: 'Включить задачу',
    disableTask: 'Отключить задачу',
    moveUp: 'Переместить вверх',
    moveDown: 'Переместить вниз',
    moveToTop: 'Переместить наверх',
    moveToBottom: 'Переместить вниз',
    expandOptions: 'Развернуть опции',
    collapseOptions: 'Свернуть опции',
    selectAll: 'Выбрать все задачи',
    deselectAll: 'Снять выделение',
    expandAllTasks: 'Развернуть все',
    collapseAllTasks: 'Свернуть все',

    // Screenshot panel context menu
    reconnect: 'Переподключить',
    forceRefresh: 'Принудительно обновить',
    startStream: 'Запустить прямую трансляцию',
    stopStream: 'Остановить прямую трансляцию',
    fullscreen: 'Во весь экран',
    saveScreenshot: 'Сохранить скриншот',
    copyScreenshot: 'Копировать скриншот',

    // Connection panel context menu
    refreshDevices: 'Обновить список устройств',
    disconnect: 'Отключить',

    // Common
    openFolder: 'Открыть содержащую папку',
  },

  // Version warning
  versionWarning: {
    title: 'Версия MaaFramework слишком низкая',
    message:
      'Текущая версия MaaFramework ({{current}}) ниже минимально поддерживаемой ({{minimum}}). Некоторые функции могут работать некорректно.',
    suggestion: 'Пожалуйста, свяжитесь с разработчиком проекта для обновления MaaFramework.',
    understand: 'Я понимаю',
  },

  // Permission prompt
  permission: {
    title: 'Требуются права администратора',
    message:
      'Текущему контроллеру требуются права администратора для взаимодействия с целевым окном. Пожалуйста, перезапустите приложение от имени администратора.',
    hint: 'Текущая конфигурация будет восстановлена после перезапуска.',
    restart: 'Перезапустить от имени администратора',
    restarting: 'Перезапуск...',
  },

  // Loading screen
  loadingScreen: {
    loadingInterface: 'Загрузка interface.json...',
    loadFailed: 'Ошибка загрузки',
    retry: 'Повторить',
  },

  // VC++ Runtime
  vcredist: {
    title: 'Отсутствует среда выполнения',
    description: 'Для корректной работы MaaFramework требуется Microsoft Visual C++ Runtime.',
    downloading: 'Загрузка среды выполнения...',
    downloadFailed: 'Ошибка загрузки',
    waitingInstall:
      'Ожидание установки. Пожалуйста, завершите установку в окне установщика...',
    retrying: 'Повторная загрузка...',
    success: 'Среда выполнения успешно установлена!',
    stillFailed:
      'Установка завершена, но загрузка всё ещё не удаётся. Пожалуйста, перезагрузите компьютер и повторите попытку.',
    restartHint: 'Если проблема сохраняется, перезагрузите компьютер и повторите попытку.',
    retry: 'Повторить',
  },

  // Connection lost (WebUI mode)
  connectionLost: {
    title: 'Соединение потеряно',
    message: 'Соединение с бэкендом потеряно. Попытка переподключения...',
    reconnecting: 'Переподключение...',
  },

  // WebUI beta banner
  webuiBeta: {
    message:
      'Веб-интерфейс сейчас в бета-версии — некоторые функции могут быть нестабильны. Если вы столкнулись с проблемами, пожалуйста,',
    reportIssue: 'создайте Issue на GitHub',
    desktopHint: 'Для более стабильной работы используйте настольный клиент',
  },

  // Bad path warning
  badPath: {
    title: 'Неверное расположение',
    rootTitle: 'Не помещайте программу в корень диска!',
    rootDescription:
      'Запуск из корня диска (например, C:\\ или D:\\) может вызвать проблемы. Пожалуйста, переместите программу в папку, например «D:\\MyApps\\».',
    tempTitle: 'Похоже, вы запустили программу прямо из архива',
    tempDescription:
      'Программа работает из временной папки. Она может исчезнуть после закрытия. Пожалуйста, сначала распакуйте архив в папку, затем запускайте программу оттуда.',
    hint: 'Совет: рекомендуем распаковать в отдельную папку, например «D:\\MaaXXX». Избегайте «Рабочего стола» и «Загрузок» — так будет проще управлять файлами.',
    exit: 'Выход',
  },

  // Proxy Settings
  proxy: {
    title: 'Сетевой прокси',
    url: 'URL прокси',
    urlPlaceholder: 'напр. http://127.0.0.1:7890',
    urlHint: 'Поддерживаются HTTP/SOCKS5; оставьте пустым, чтобы отключить прокси',
    urlHintDisabled: 'Введён CDK MirrorChyan — прокси отключён',
    invalid: 'Неверный формат URL прокси',
    examples: 'Примеры форматов',
  },
};