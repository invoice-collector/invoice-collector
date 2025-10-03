
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FrichtiCollector extends SketchCollector {

    static CONFIG = {
        id: "frichti",
        name: "Frichti",
        description: "i18n.collectors.frichti.description",
        version: "0",
        website: "https://www.frichti.co/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/233037.jpg",
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
        entryUrl: "https://www.frichti.co/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FrichtiCollector.CONFIG);
    }
}
