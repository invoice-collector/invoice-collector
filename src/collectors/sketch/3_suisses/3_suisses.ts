
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class _3SuissesCollector extends SketchCollector {

    static CONFIG = {
        id: "3_suisses",
        name: "3 Suisses",
        description: "i18n.collectors.3_suisses.description",
        version: "0",
        website: "https://www.3suisses.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/115867.jpg",
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
        entryUrl: "https://www.3suisses.fr/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(_3SuissesCollector.CONFIG);
    }
}
