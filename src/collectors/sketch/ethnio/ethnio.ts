
import { SketchCollector } from '../../sketchCollector';

export class EthnioCollector extends SketchCollector {

    static CONFIG = {
        id: "ethnio",
        name: "Ethnio",
        description: "i18n.collectors.ethnio.description",
        version: "0",
        website: "https://ethn.io/users/5423/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/159732.jpg",
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
        entryUrl: "https://ethn.io/users/5423/billing",
    }

    constructor() {
        super(EthnioCollector.CONFIG);
    }
}
