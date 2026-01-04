export enum Status {
  RUNNING = 'RUNNING',
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE',
  SKIPPED = 'SKIPPED',
}

export enum Level {
  DEBUG = 'DEBUG',
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR',
  FATAL = 'FATAL',
}

export interface LoggerConfig {
  level: Level;
  timestamp: boolean;
  logLevel: Level;
}

export interface LogEntry {
  level: Level;
  timestamp: Date;
  message: string;
  context?: string;
}

export interface Result {
  status: Status;
  message: string;
  logEntries: LogEntry[];
}