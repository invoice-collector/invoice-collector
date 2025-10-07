
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PollinElectronicCollector extends SketchCollector {

    static CONFIG = {
        id: "pollin_electronic",
        name: "Pollin Electronic",
        description: "i18n.collectors.pollin_electronic.description",
        version: "0",
        website: "https://www.pollin.de/account/orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/65699.jpg",
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
        entryUrl: "https://www.pollin.de/account/orders",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PollinElectronicCollector.CONFIG);
    }
}
