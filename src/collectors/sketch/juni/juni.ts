
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class JuniCollector extends SketchCollector {

    static CONFIG = {
        id: "juni",
        name: "Juni",
        description: "i18n.collectors.juni.description",
        version: "0",
        website: "https://www.juni.co/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/849531.jpg",
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
        entryUrl: "https://www.juni.co/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(JuniCollector.CONFIG);
    }
}
