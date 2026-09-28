import { AbstractCollector, Config } from '../collectors/abstractCollector';
import { LoggableError } from '../error';
import * as utils from '../utils';

export type OTP = {
    code: string,
    sentAt: number,
    validatedAt?: number;
}

export abstract class AbstractAnalytics {

    static VERSION = 'v1';
    static FRONTEND = utils.getEnvVar('FRONTEND');

    /**
     * Pings the analytics service to check its availability.
     */
    abstract ping(): Promise<void>;

    /**
     * Logs a successful operation for the given collector.
     * @param collector The collector for which the operation was successful.
     */
    abstract logSuccess(collector: AbstractCollector<Config>): void;

    /**
     * Logs an error for the given email and remote ID.
     * @param email The email associated with the error.
     * @param remoteId The remote ID associated with the error.
     * @param err The error to be logged.
     */
    abstract logError(email: string, remoteId: string, err: LoggableError): void;

    /**
     * Sends feedback to the analytics service.
     * @param type The type of feedback (e.g., 'sketch', 'feature_request').
     * @param message The feedback message.
     * @param email The email of the user providing the feedback.
     * @param user_id The ID of the user providing the feedback.
     */
    abstract feedback(type: string, message: string, email: string, user_id: string): Promise<void>;

    /**
     * Sends a welcome email to the specified email address.
     * @param email The email address to which the welcome email will be sent.
     * @param locale The locale to be used for the welcome email.
     */
    abstract sendWelcomeEmail(email: string, locale: string): Promise<void>;

    /**
     * Sends an OTP email to the specified email address.
     * @param email The email address to which the OTP email will be sent.
     * @param locale The locale to be used for the OTP email.
     */
    abstract sendOtpEmail(email: string, locale: string): Promise<OTP>;

    /**
     * Sends a reset password email to the specified email address.
     * @param email The email address to which the reset password email will be sent.
     * @param resetToken The reset token to be included in the email.
     */
    abstract sendResetPasswordEmail(email: string, resetToken: string): Promise<string>;
}
