import { Config, AbstractCollector } from './collectors/abstractCollector';
import { Screenshot } from './driver/abstractDriver';

/**
 * Returns the full stack trace of the error, including any nested causes.
 * @param error The error object for which to retrieve the full stack trace.
 * @returns The full stack trace of the error, including any nested causes.
 */
export function fullStackTrace(error: Error): string {
    let output = error.stack || '';
    if (error.cause instanceof Error) {
        output += `\nCaused by: ${  fullStackTrace(error.cause) || error.cause.toString()}`;
        if ((error.cause as any).cause) {
            output += `\n${  (error.cause as any).fullStackTrace}`;
        }
    }
    return output;
}

// API ERRORS

export class StatusError extends Error {
    status_code: number;

    /**
     * Constructs a new StatusError instance.
     * @param message The error message describing the status error.
     * @param status_code The HTTP status code associated with the error.
     * @param opts Additional options for the error.
     */
    constructor(message: string, status_code: number, opts: any = {}) {
        super(message, opts);
        this.name = this.constructor.name;
        this.status_code = status_code;
    }
}

export class AuthenticationBearerError extends StatusError {

    /**
     * Constructs a new AuthenticationBearerError instance.
     * @param opts Additional options for the error.
     */
    constructor(opts = {}) {
        super('Invalid Bearer token', 401, opts);
        this.name = this.constructor.name;
    }
}

export class OauthError extends StatusError {

    /**
     * Constructs a new OauthError instance.
     * @param opts Additional options for the error.
     */
    constructor(opts = {}) {
        super('Invalid Oauth token', 401, opts);
        this.name = this.constructor.name;
    }
}

export class MissingField extends StatusError {

    /**
     * Constructs a new MissingField instance.
     * @param field_name The name of the missing field.
     * @param opts Additional options for the error.
     */
    constructor(field_name: string, opts = {}) {
        super(`The field "${field_name}" is missing.`, 400, opts);
        this.name = this.constructor.name;
    }
}


export class MissingParams extends StatusError {

    /**
     * Constructs a new MissingParams instance.
     * @param field_name The names of the missing parameters.
     * @param opts Additional options for the error.
     */
    constructor(field_name: string[], opts = {}) {
        let message;
        if (field_name.length === 1) {
            message = `The param "${field_name[0]}" is missing`;
        } else {
            message = `The params "${field_name.join('", "')}" are missing`;
        }
        super(message, 400, opts);
        this.name = this.constructor.name;
    }
}

// COLLECTOR ERRORS

export class CollectorError extends Error {
    collector_id: string;
    collector_name: string;
    collector_version: string;

    /**
     * Constructs a new CollectorError instance.
     * @param message The error message describing the collector error.
     * @param collector The collector instance associated with the error.
     * @param opts Additional options for the error.
     */
    constructor(message: string, collector: AbstractCollector<Config>, opts = {}) {
        super(message, opts);
        this.name = this.constructor.name;
        this.collector_id = collector.config.id;
        this.collector_name = collector.config.name;
        this.collector_version = collector.config.version;
    }
}

export class MaintenanceError extends CollectorError {

    /**
     * Constructs a new MaintenanceError instance.
     * @param collector The collector instance associated with the error.
     * @param opts Additional options for the error.
     */
    constructor(collector: AbstractCollector<Config>, opts = {}) {
        super(
            'The website is in maintenance. Wait a moment and try again.',
            collector,
            opts,
        );
        this.name = this.constructor.name;
    }
}

export class AuthenticationError extends CollectorError {

    /**
     * Constructs a new AuthenticationError instance.
     * @param message The error message describing the authentication error.
     * @param collector The collector instance associated with the error.
     * @param opts Additional options for the error.
     */
    constructor(message: string, collector: AbstractCollector<Config>, opts = {}) {
        super(
            message.trim(),
            collector,
            opts,
        );
        this.name = this.constructor.name;
    }
}
export class RemoveError extends CollectorError {

    /**
     * Constructs a new RemoveError instance.
     * @param collector The collector instance associated with the error.
     * @param opts Additional options for the error.
     */
    constructor(collector: AbstractCollector<Config>, opts = {}) {
        super(
            'i18n.collectors.all.login.cancel',
            collector,
            opts,
        );
        this.name = this.constructor.name;
    }
}

export class DisconnectedError extends CollectorError {

    /**
     * Constructs a new DisconnectedError instance.
     * @param message The error message describing the disconnection error.
     * @param collector The collector instance associated with the error.
     * @param opts Additional options for the error.
     */
    constructor(message: string, collector: AbstractCollector<Config>, opts = {}) {
        super(
            message.trim(),
            collector,
            opts,
        );
        this.name = this.constructor.name;
    }
}

export class LoggableError extends CollectorError {
    url: string;
    source_code: string;
    screenshot: Screenshot;

    /**
     * Constructs a new LoggableError instance.
     * @param message The error message describing the loggable error.
     * @param collector The collector instance associated with the error.
     * @param opts Additional options for the error.
     */
    constructor(message: string, collector: AbstractCollector<Config>, opts = {}) {
        super(
            message,
            collector,
            opts,
        );
        this.name = this.constructor.name;
        this.url = '';
        this.source_code = '';
        this.screenshot = { data: '', width: 0, height: 0 };
    }
}

export class ElementNotFoundError extends LoggableError {
    selector: any;

    /**
     * Constructs a new ElementNotFoundError instance.
     * @param collector The collector instance associated with the error.
     * @param selector The selector that could not be found on the page.
     * @param opts Additional options for the error.
     */
    constructor(collector: AbstractCollector<Config>, selector: any, opts = {}) {
        super(
            `Could not find selector '${selector.selector}' corresponding to the "${selector.info}" on the page. See the source code and the screenshot to find the issue.`,
            collector,
            opts,
    );
        this.name = this.constructor.name;
        this.selector = selector;
    }
}

export class UnfinishedCollectorError extends LoggableError {

    /**
     * Constructs a new UnfinishedCollectorError instance.
     * @param collector The collector instance associated with the error.
     * @param opts Additional options for the error.
     */
    constructor(collector: AbstractCollector<Config>, opts = {}) {
        super(
            'The collector is not finished',
            collector,
            opts,
        );
        this.name = this.constructor.name;
    }
}

export class NoInvoiceFoundError extends LoggableError {

    /**
     * Constructs a new NoInvoiceFoundError instance.
     * @param collector The collector instance associated with the error.
     * @param opts Additional options for the error.
     */
    constructor(collector: AbstractCollector<Config>, opts = {}) {
        super(
            'No invoice found, collector may be broken',
            collector,
            opts,
        );
        this.name = this.constructor.name;
    }
}

export class DesynchronizationError extends AuthenticationError {

    /**
     * Constructs a new DesynchronizationError instance.
     * @param credential_id The ID of the credential associated with the error.
     * @param collector The collector instance associated with the error.
     * @param opts Additional options for the error.
     */
    constructor(credential_id: string, collector: AbstractCollector<Config>, opts = {}) {
        super(
            `Desynchronization Error - We are sorry but something went wrong with the collector. Please remove it and add it again. (${credential_id})`,
            collector,
            opts,
        );
        this.name = this.constructor.name;
    }
}
