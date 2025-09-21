class Logger {
  constructor() {
    this.isDevelopment = process.env.NODE_ENV === 'development';
  }

  log(level, message, context, data) {
    const entry = {
      level,
      message,
      context,
      data,
      timestamp: new Date().toISOString(),
    };

    // Always log errors and warnings
    if (level === 'error' || level === 'warn') {
      console[level](`[${context || 'APP'}] ${message}`, data || '');

      // In production, you could send to monitoring service here
      if (!this.isDevelopment) {
        this.sendToMonitoring(entry);
      }
    }

    // Debug and info only in development
    if (this.isDevelopment) {
      if (level === 'info') {
        console.info(`[${context || 'APP'}] ${message}`, data || '');
      } else if (level === 'debug') {
        console.debug(`[${context || 'APP'}] ${message}`, data || '');
      }
    }
  }

  sendToMonitoring(entry) {
    // Implementation for production monitoring service
    // e.g., Sentry, LogRocket, etc.
  }

  error(message, context, data) {
    this.log('error', message, context, data);
  }

  warn(message, context, data) {
    this.log('warn', message, context, data);
  }

  info(message, context, data) {
    this.log('info', message, context, data);
  }

  debug(message, context, data) {
    this.log('debug', message, context, data);
  }
}

export const logger = new Logger();
