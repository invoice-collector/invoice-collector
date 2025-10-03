
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SuperhumanEMailCollector extends SketchCollector {

    static CONFIG = {
        id: "superhuman_e_mail",
        name: "Superhuman E-Mail",
        description: "i18n.collectors.superhuman_e_mail.description",
        version: "0",
        website: "https://superhuman.com/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/221823.jpg",
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
        entryUrl: "https://superhuman.com/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SuperhumanEMailCollector.CONFIG);
    }
}
