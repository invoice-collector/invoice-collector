
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SmtpComCollector extends SketchCollector {

    static CONFIG = {
        id: "smtp_com",
        name: "smtp.com",
        description: "i18n.collectors.smtp_com.description",
        version: "0",
        website: "https://www.smtp.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1217778.jpg",
        type: CollectorType.SKETCH,
        params: {
            email: {
                type: "email",
                name: "i18n.collectors.all.email",
                placeholder: "i18n.collectors.all.email.placeholder",
                mandatory: true
            },
            password: {
                type: "password",
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true
            }
        },
        entryUrl: "https://www.smtp.com/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SmtpComCollector.CONFIG);
    }
}
