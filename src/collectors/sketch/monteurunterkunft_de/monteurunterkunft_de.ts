
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MonteurunterkunftDeCollector extends SketchCollector {

    static CONFIG = {
        id: "monteurunterkunft_de",
        name: "Monteurunterkunft.de",
        description: "i18n.collectors.monteurunterkunft_de.description",
        version: "0",
        website: "https://www.monteurunterkunft.de/buchung/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1083843.jpg",
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
        entryUrl: "https://www.monteurunterkunft.de/buchung/login/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MonteurunterkunftDeCollector.CONFIG);
    }
}
