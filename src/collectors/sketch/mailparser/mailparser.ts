
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MailparserCollector extends SketchCollector {

    static CONFIG = {
        id: "mailparser",
        name: "mailparser",
        description: "i18n.collectors.mailparser.description",
        version: "0",
        website: "https://app.mailparser.io/account/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/50911.jpg",
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
        entryUrl: "https://app.mailparser.io/account/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MailparserCollector.CONFIG);
    }
}
