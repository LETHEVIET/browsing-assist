// Generated by wxt
export {}
declare global {
  const ChatContent: typeof import('D:/code/browsing-assist/components/chat-content')['ChatContent']
  const ChatMessage: typeof import('D:/code/browsing-assist/components/chat-content')['ChatMessage']
  const ChatSettingsProvider: typeof import('D:/code/browsing-assist/components/ChatSettingsContext')['ChatSettingsProvider']
  const ContentScriptContext: typeof import('wxt/client')['ContentScriptContext']
  const ConvertedTabsDrawer: typeof import('D:/code/browsing-assist/components/converted-tabs-drawer')['ConvertedTabsDrawer']
  const DEFAULT_ACTIONS: typeof import('D:/code/browsing-assist/utils/action-button')['DEFAULT_ACTIONS']
  const GoogleAI: typeof import('D:/code/browsing-assist/utils/llm-message-formatter')['GoogleAI']
  const InvalidMatchPattern: typeof import('wxt/sandbox')['InvalidMatchPattern']
  const MatchPattern: typeof import('wxt/sandbox')['MatchPattern']
  const MemoizedMarkdown: typeof import('D:/code/browsing-assist/components/memoized-markdown')['MemoizedMarkdown']
  const SearchToggleButton: typeof import('D:/code/browsing-assist/components/search-toggle-button')['SearchToggleButton']
  const SettingsModal: typeof import('D:/code/browsing-assist/components/settings-modal')['SettingsModal']
  const TabContentViewer: typeof import('D:/code/browsing-assist/components/tab-content-viewer')['TabContentViewer']
  const TabDisplay: typeof import('D:/code/browsing-assist/components/tab-display')['TabDisplay']
  const TabDisplayWithHover: typeof import('D:/code/browsing-assist/components/tab-display-with-hover')['TabDisplayWithHover']
  const TabReaderPanel: typeof import('D:/code/browsing-assist/components/tab-reader-panel')['TabReaderPanel']
  const ThemeProvider: typeof import('D:/code/browsing-assist/components/theme-provider')['ThemeProvider']
  const browser: typeof import('wxt/browser')['browser']
  const chatInput: typeof import('D:/code/browsing-assist/components/chat-input')['default']
  const createIframeUi: typeof import('wxt/client')['createIframeUi']
  const createIntegratedUi: typeof import('wxt/client')['createIntegratedUi']
  const createShadowRootUi: typeof import('wxt/client')['createShadowRootUi']
  const defineBackground: typeof import('wxt/sandbox')['defineBackground']
  const defineConfig: typeof import('wxt')['defineConfig']
  const defineContentScript: typeof import('wxt/sandbox')['defineContentScript']
  const defineUnlistedScript: typeof import('wxt/sandbox')['defineUnlistedScript']
  const fakeBrowser: typeof import('wxt/testing')['fakeBrowser']
  const geminiModels: typeof import('D:/code/browsing-assist/utils/gemini-models')['geminiModels']
  const generateAIResponse: typeof import('D:/code/browsing-assist/utils/llm-message-formatter')['generateAIResponse']
  const getBrowserTabs: typeof import('D:/code/browsing-assist/utils/browser-tabs')['getBrowserTabs']
  const getModelById: typeof import('D:/code/browsing-assist/utils/gemini-models')['getModelById']
  const getModelByName: typeof import('D:/code/browsing-assist/utils/gemini-models')['getModelByName']
  const getModelHoverText: typeof import('D:/code/browsing-assist/utils/gemini-models')['getModelHoverText']
  const getTabHighlightedText: typeof import('D:/code/browsing-assist/utils/browser-tabs')['getTabHighlightedText']
  const historyToMessages: typeof import('D:/code/browsing-assist/utils/llm-message-formatter')['historyToMessages']
  const i18n: typeof import('D:/code/browsing-assist/components/i18n')['default']
  const i18nConfig: typeof import('D:/code/browsing-assist/components/i18nConfig')['default']
  const readMarkdownPrompt: typeof import('D:/code/browsing-assist/utils/prompts')['readMarkdownPrompt']
  const readTab: typeof import('D:/code/browsing-assist/utils/llm-message-formatter')['readTab']
  const readTabs: typeof import('D:/code/browsing-assist/utils/llm-message-formatter')['readTabs']
  const reducer: typeof import('D:/code/browsing-assist/hooks/use-toast')['reducer']
  const storage: typeof import('wxt/storage')['storage']
  const subscribeToHighlightChanges: typeof import('D:/code/browsing-assist/utils/browser-tabs')['subscribeToHighlightChanges']
  const subscribeToTabChanges: typeof import('D:/code/browsing-assist/utils/browser-tabs')['subscribeToTabChanges']
  const tabReaders: typeof import('D:/code/browsing-assist/components/ChatSettingsContext')['tabReaders']
  const toast: typeof import('D:/code/browsing-assist/hooks/use-toast')['toast']
  const useAutoResizeTextarea: typeof import('D:/code/browsing-assist/hooks/use-auto-resize-textarea')['useAutoResizeTextarea']
  const useChatSettings: typeof import('D:/code/browsing-assist/components/ChatSettingsContext')['useChatSettings']
  const useTheme: typeof import('D:/code/browsing-assist/components/theme-provider')['useTheme']
  const useToast: typeof import('D:/code/browsing-assist/hooks/use-toast')['useToast']
}
// for type re-export
declare global {
  // @ts-ignore
  export type { TabReader, ChatSettings } from 'D:/code/browsing-assist/components/ChatSettingsContext'
  import('D:/code/browsing-assist/components/ChatSettingsContext')
  // @ts-ignore
  export type { TabDisplayWithHoverProps } from 'D:/code/browsing-assist/components/tab-display-with-hover'
  import('D:/code/browsing-assist/components/tab-display-with-hover')
  // @ts-ignore
  export type { TabDisplayProps } from 'D:/code/browsing-assist/components/tab-display'
  import('D:/code/browsing-assist/components/tab-display')
  // @ts-ignore
  export type { ActionItem } from 'D:/code/browsing-assist/utils/action-button'
  import('D:/code/browsing-assist/utils/action-button')
  // @ts-ignore
  export type { BrowserTab, BrowserTabsResult, TabChangeCallback, HighlightChangeCallback } from 'D:/code/browsing-assist/utils/browser-tabs'
  import('D:/code/browsing-assist/utils/browser-tabs')
  // @ts-ignore
  export type { GeminiModel } from 'D:/code/browsing-assist/utils/gemini-models'
  import('D:/code/browsing-assist/utils/gemini-models')
  // @ts-ignore
  export type { GoogleAI } from 'D:/code/browsing-assist/utils/llm-message-formatter'
  import('D:/code/browsing-assist/utils/llm-message-formatter')
}
