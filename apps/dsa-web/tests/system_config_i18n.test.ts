import { describe, expect, it } from 'vitest';
import { getFieldDescriptionZh, getFieldOptionLabelZh, getFieldTitleZh } from '../src/utils/systemConfigI18n';

const requiredLocalizedKeys = [
  'TICKFLOW_API_KEY',
  'ENABLE_REALTIME_QUOTE',
  'ENABLE_CHIP_DISTRIBUTION',
  'PYTDX_HOST',
  'PYTDX_PORT',
  'PYTDX_SERVERS',
  'BIAS_THRESHOLD',
  'TELEGRAM_BOT_TOKEN',
  'TELEGRAM_CHAT_ID',
  'TELEGRAM_MESSAGE_THREAD_ID',
  'EMAIL_SENDER',
  'EMAIL_PASSWORD',
  'EMAIL_RECEIVERS',
  'DISCORD_WEBHOOK_URL',
  'DISCORD_BOT_TOKEN',
  'DISCORD_MAIN_CHANNEL_ID',
  'DISCORD_INTERACTIONS_PUBLIC_KEY',
  'SLACK_BOT_TOKEN',
  'SLACK_CHANNEL_ID',
  'SLACK_WEBHOOK_URL',
  'PUSHPLUS_TOPIC',
  'PUSHOVER_USER_KEY',
  'PUSHOVER_API_TOKEN',
  'SERVERCHAN3_SENDKEY',
  'ASTRBOT_URL',
  'ASTRBOT_TOKEN',
  'CUSTOM_WEBHOOK_BEARER_TOKEN',
  'WEBHOOK_VERIFY_SSL',
  'SINGLE_STOCK_NOTIFY',
  'REPORT_TYPE',
  'REPORT_LANGUAGE',
  'REPORT_TEMPLATES_DIR',
  'REPORT_INTEGRITY_ENABLED',
  'REPORT_RENDERER_ENABLED',
  'REPORT_INTEGRITY_RETRY',
  'REPORT_HISTORY_COMPARE_N',
  'MERGE_EMAIL_NOTIFICATION',
  'NOTIFICATION_REPORT_CHANNELS',
  'NOTIFICATION_ALERT_CHANNELS',
  'NOTIFICATION_SYSTEM_ERROR_CHANNELS',
  'NOTIFICATION_DEDUP_TTL_SECONDS',
  'NOTIFICATION_COOLDOWN_SECONDS',
  'NOTIFICATION_QUIET_HOURS',
  'NOTIFICATION_TIMEZONE',
  'NOTIFICATION_MIN_SEVERITY',
  'NOTIFICATION_DAILY_DIGEST_ENABLED',
  'SCHEDULE_ENABLED',
  'SCHEDULE_RUN_IMMEDIATELY',
  'TRADING_DAY_CHECK_ENABLED',
  'WEBUI_HOST',
  'ADMIN_AUTH_ENABLED',
  'TRUST_X_FORWARDED_FOR',
  'RUN_IMMEDIATELY',
  'MARKET_REVIEW_ENABLED',
  'MARKET_REVIEW_REGION',
  'ANALYSIS_DELAY',
  'DEBUG',
  'AGENT_NL_ROUTING',
  'AGENT_DEEP_RESEARCH_BUDGET',
  'AGENT_DEEP_RESEARCH_TIMEOUT',
  'AGENT_EVENT_MONITOR_ENABLED',
  'AGENT_EVENT_MONITOR_INTERVAL_MINUTES',
  'AGENT_EVENT_ALERT_RULES_JSON',
] as const;

describe('systemConfigI18n required key coverage', () => {
  it('provides zh title and description mapping for known missing keys', () => {
    requiredLocalizedKeys.forEach((key) => {
      expect(getFieldTitleZh(key, key)).not.toBe(key);
      expect(getFieldDescriptionZh(key, 'schema fallback description')).not.toBe('schema fallback description');
    });
  });
});

describe('systemConfigI18n option label localization', () => {
  it('localizes representative option labels in settings select fields', () => {
    expect(getFieldOptionLabelZh('REPORT_LANGUAGE', 'zh')).toBe('中文');
    expect(getFieldOptionLabelZh('REPORT_LANGUAGE', 'en')).toBe('英文');

    expect(getFieldOptionLabelZh('NOTIFICATION_MIN_SEVERITY', '', 'Not set')).toBe('未设置');
    expect(getFieldOptionLabelZh('NOTIFICATION_MIN_SEVERITY', 'critical')).toBe('严重');

    expect(getFieldOptionLabelZh('MARKET_REVIEW_COLOR_SCHEME', 'green_up')).toBe('绿涨红跌');
    expect(getFieldOptionLabelZh('AGENT_ARCH', 'multi')).toBe('多 Agent（编排）');
    expect(getFieldOptionLabelZh('AGENT_ORCHESTRATOR_MODE', 'quick')).toBe('快速');
    expect(getFieldOptionLabelZh('AGENT_SKILL_ROUTING', 'manual')).toBe('手动（使用 AGENT_SKILLS）');
    expect(getFieldOptionLabelZh('NOTIFICATION_REPORT_CHANNELS', 'wechat')).toBe('企业微信');
  });
});
