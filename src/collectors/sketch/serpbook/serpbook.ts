
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SerpbookCollector extends SketchCollector {

    static CONFIG = {
        id: "serpbook",
        name: "Serpbook",
        description: "i18n.collectors.serpbook.description",
        version: "0",
        website: "https://serpbook.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32527.jpg",
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
        entryUrl: "https://serpbook.com/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SerpbookCollector.CONFIG);
    }
}
