
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AliceadslFrCollector extends SketchCollector {

    static CONFIG = {
        id: "aliceadsl_fr",
        name: "aliceadsl.fr",
        description: "i18n.collectors.aliceadsl_fr.description",
        version: "0",
        website: "http://www.aliceadsl.fr",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/27508.jpg",
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
        entryUrl: "http://www.aliceadsl.fr",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AliceadslFrCollector.CONFIG);
    }
}
