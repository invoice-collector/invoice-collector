import { AbstractCollector } from "./collectors/abstractCollector";
import { Theme } from "./model/customer";

export function fullStackTrace(error: Error): string {
    let output = error.stack || "";
    if (error.cause instanceof Error) {
        output += "\nCaused by: " + (fullStackTrace(error.cause) || error.cause.toString());
        if ((error.cause as any).cause) {
            output += "\n" + (error.cause as any).fullStackTrace;
        }
    }
    return output;
}

// API ERRORS

export class StatusError extends Error {
    status_code: number;

    constructor(message: string, status_code: number, opts: any = {}) {
        super(message, opts);
        this.name = this.constructor.name;
        this.status_code = status_code;
    }
}

export class AuthenticationBearerError extends StatusError {
    constructor(opts = {}) {
        super("Invalid Bearer token", 401, opts);
        this.name = this.constructor.name;
    }
}

export class OauthError extends StatusError {
    constructor(opts = {}) {
        super("Invalid Oauth token", 401, opts);
        this.name = this.constructor.name;
    }
}

export class MissingField extends StatusError {
    constructor(field_name: string, opts = {}) {
        super(`The field "${field_name}" is missing.`, 400, opts);
        this.name = this.constructor.name;
    }
}


export class MissingParams extends StatusError {
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

    constructor(message: string, collector: AbstractCollector, opts = {}) {
        super(message, opts);
        this.name = this.constructor.name;
        this.collector_id = collector.config.id;
        this.collector_name = collector.config.name;
        this.collector_version = collector.config.version;
    }
}

export class MaintenanceError extends CollectorError {
    constructor(collector: AbstractCollector, opts = {}) {
        super(
            `The website is in maintenance. Wait a moment and try again.`,
            collector,
            opts
        );
        this.name = this.constructor.name;
    }
}

export class AuthenticationError extends CollectorError {
    constructor(message: string, collector: AbstractCollector, opts = {}) {
        super(
            message.trim(),
            collector,
            opts
        );
        this.name = this.constructor.name;
    }
}

export class LoggableError extends CollectorError {
    url: string;
    source_code: string;
    screenshot: string;

    constructor(message: string, collector: AbstractCollector, opts = {}) {
        super(
            message,
            collector,
            opts
        );
        this.name = this.constructor.name;
        this.url = "";
        this.source_code = "";
        this.screenshot = "";
    }
}

export class ElementNotFoundError extends LoggableError {
    selector: any;

    constructor(collector: AbstractCollector, selector: any, opts = {}) {
        super(
            `Could not find selector '${selector.selector}' corresponding to the "${selector.info}" on the page. See the source code and the screenshot to find the issue.`,
            collector,
            opts
    );
        this.name = this.constructor.name;
        this.selector = selector;
    }
}

export class UnfinishedCollectorError extends LoggableError {
    constructor(collector: AbstractCollector, opts = {}) {
        super(
            `The collector is not finished`,
            collector,
            opts
        );
        this.name = this.constructor.name;
    }
}

export class NoInvoiceFoundError extends LoggableError {
    constructor(collector: AbstractCollector, opts = {}) {
        super(
            `No invoice found, collector may be broken`,
            collector,
            opts
        );
        this.name = this.constructor.name;
    }
}

export class DesynchronizationError extends AuthenticationError {
    constructor(credential_id: string, collector: AbstractCollector, opts = {}) {
        super(
            `Desynchronization Error - We are sorry but something went wrong with the collector. Please remove it and add it again. (${credential_id})`,
            collector,
            opts
        );
        this.name = this.constructor.name;
    }
}

// OTHER ERRORS

export class TermsConditionsError extends Error {
    locale: string;
    theme: Theme;

    constructor(locale: string, theme: Theme, opts = {}) {
        super("The user did not accept the terms and conditions.", opts);
        this.name = this.constructor.name;
        this.locale = locale;
        this.theme = theme;
    }
}