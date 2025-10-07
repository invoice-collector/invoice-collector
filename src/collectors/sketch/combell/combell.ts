
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CombellCollector extends SketchCollector {

    static CONFIG = {
        id: "combell",
        name: "Combell",
        description: "i18n.collectors.combell.description",
        version: "0",
        website: "http://www.combell.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32245.jpg",
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
        entryUrl: "http://www.combell.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CombellCollector.CONFIG);
    }
}
