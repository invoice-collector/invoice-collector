
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AldAutomotiveCollector extends SketchCollector {

    static CONFIG = {
        id: "ald_automotive",
        name: "ALD Automotive",
        description: "i18n.collectors.ald_automotive.description",
        version: "0",
        website: "https://www.aldnet.fr/portal/aldnetpal/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/42603.jpg",
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
        entryUrl: "https://www.aldnet.fr/portal/aldnetpal/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AldAutomotiveCollector.CONFIG);
    }
}
