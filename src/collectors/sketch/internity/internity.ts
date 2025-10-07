
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class InternityCollector extends SketchCollector {

    static CONFIG = {
        id: "internity",
        name: "Internity",
        description: "i18n.collectors.internity.description",
        version: "0",
        website: "http://www.internity.fr",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/120465.jpg",
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
        entryUrl: "http://www.internity.fr",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(InternityCollector.CONFIG);
    }
}
