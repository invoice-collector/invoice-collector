
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MailtasticCollector extends SketchCollector {

    static CONFIG = {
        id: "mailtastic",
        name: "mailtastic",
        description: "i18n.collectors.mailtastic.description",
        version: "0",
        website: "https://www.app.mailtastic.de/#/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/22491.jpg",
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
        entryUrl: "https://www.app.mailtastic.de/#/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MailtasticCollector.CONFIG);
    }
}
