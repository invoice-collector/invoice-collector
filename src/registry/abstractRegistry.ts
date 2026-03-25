import { AbstractCollector, Config } from "../collectors/abstractCollector";
import { LoggableError } from "../error";
import * as utils from '../utils';

export type OTP = {
    code: string,
    sentAt: number,
    validatedAt?: number;
}

export abstract class AbstractRegistry {

    static VERSION = "v1"
    static FRONTEND = utils.getEnvVar("FRONTEND");

    abstract ping(): void;
    abstract logSuccess(collector: AbstractCollector<Config>): void;
    abstract logError(email: string, remoteId: string, err: LoggableError): void;
    abstract feedback(type: string, message: string, email: string, user_id: string): Promise<void>;
    abstract sendWelcomeEmail(email: string, locale: string): Promise<void>;
    abstract sendOtpEmail(email: string, locale: string): Promise<OTP>;
    abstract sendResetPasswordEmail(email: string, resetToken: string): Promise<string>;
}
