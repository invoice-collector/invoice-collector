import { OTP } from '../model/otp';
import { AbstractRegistry } from './abstractRegistry';
import * as utils from '../utils';
import { AbstractCollector, Config } from '../collectors/abstractCollector';
import { LoggableError } from '../error';

export class MockRegistry extends AbstractRegistry {
    ping(): void {
        console.warn("No registry server endpoint configured. Cannot ping.");
    }

    logSuccess(collector: AbstractCollector<Config>): void {
        console.warn("No registry server endpoint configured. Cannot log success.");
    }

    logError(email: string, remoteId: string, err: LoggableError): void {
        console.warn("No registry server endpoint configured. Cannot log error.");
    }

    async feedback(type: string, message: string, email: string, user_id: string): Promise<void> {
        console.warn("No registry server endpoint configured. Cannot send feedback.");
    }

    async sendWelcomeEmail(email: string, locale: string): Promise<void> {
        console.warn("No registry server endpoint configured. Cannot send welcome email.");
    }

    async sendOtpEmail(email: string, locale: string): Promise<OTP> {
        const code: string = utils.generateVerificationCode();
        console.warn(`No registry server endpoint configured. Cannot send OTP email. Your OTP code is: ${code}`);
        return {
            code: code,
            sentAt: Date.now()
        };
    }

    async sendResetPasswordEmail(email: string, resetToken: string): Promise<string> {
        const resetLink = `${AbstractRegistry.FRONTEND}/reset-password/${resetToken}`;
        console.warn(`No registry server endpoint configured. Cannot send reset password email. Your reset link is: ${resetLink}`);
        return resetLink;
    }
}
