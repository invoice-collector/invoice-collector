
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class KickresumeCollector extends SketchCollector {

    static CONFIG = {
        id: "kickresume",
        name: "Kickresume",
        description: "i18n.collectors.kickresume.description",
        version: "0",
        website: "https://www.kickresume.com/profile/history/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3206437.jpg",
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
        entryUrl: "https://www.kickresume.com/profile/history/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(KickresumeCollector.CONFIG);
    }
}
