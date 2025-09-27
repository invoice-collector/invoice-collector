
import { SketchCollector } from '../../sketchCollector';

export class PipiadsCollector extends SketchCollector {

    static CONFIG = {
        id: "pipiads",
        name: "Pipiads",
        description: "i18n.collectors.pipiads.description",
        version: "0",
        website: "https://www.pipiads.com/user-center/payment",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1621994.jpg",
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
        entryUrl: "https://www.pipiads.com/user-center/payment",
    }

    constructor() {
        super(PipiadsCollector.CONFIG);
    }
}
