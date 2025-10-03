
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class JoomlatoolsCollector extends SketchCollector {

    static CONFIG = {
        id: "joomlatools",
        name: "joomlatools",
        description: "i18n.collectors.joomlatools.description",
        version: "0",
        website: "https://dashboard.joomlatools.com/subscriptions/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/167022.jpg",
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
        entryUrl: "https://dashboard.joomlatools.com/subscriptions/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(JoomlatoolsCollector.CONFIG);
    }
}
