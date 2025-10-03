
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EmailPreviewServicesCollector extends SketchCollector {

    static CONFIG = {
        id: "email_preview_services",
        name: "Email Preview Services",
        description: "i18n.collectors.email_preview_services.description",
        version: "0",
        website: "https://app.emailpreviewservices.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1172535.jpg",
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
        entryUrl: "https://app.emailpreviewservices.com/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EmailPreviewServicesCollector.CONFIG);
    }
}
