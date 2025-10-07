
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MailoptinCollector extends SketchCollector {

    static CONFIG = {
        id: "mailoptin",
        name: "mailoptin",
        description: "i18n.collectors.mailoptin.description",
        version: "0",
        website: "https://my.mailoptin.io/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/810069.jpg",
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
        entryUrl: "https://my.mailoptin.io/login/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MailoptinCollector.CONFIG);
    }
}
