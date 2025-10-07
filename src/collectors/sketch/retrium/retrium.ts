
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class RetriumCollector extends SketchCollector {

    static CONFIG = {
        id: "retrium",
        name: "Retrium",
        description: "i18n.collectors.retrium.description",
        version: "0",
        website: "https://app.retrium.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/399172.jpg",
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
        entryUrl: "https://app.retrium.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RetriumCollector.CONFIG);
    }
}
