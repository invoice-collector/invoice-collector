
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FutalisCollector extends SketchCollector {

    static CONFIG = {
        id: "futalis",
        name: "Futalis",
        description: "i18n.collectors.futalis.description",
        version: "0",
        website: "https://futalis.de/customer/account/index/#/bestellungen/378577?utm_campaign=systemmail&utm_medium=email&utm_source=system",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/170774.jpg",
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
        entryUrl: "https://futalis.de/customer/account/index/#/bestellungen/378577?utm_campaign=systemmail&utm_medium=email&utm_source=system",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FutalisCollector.CONFIG);
    }
}
