
import { SketchCollector } from '../../sketchCollector';

export class AxonautCollector extends SketchCollector {

    static CONFIG = {
        id: "axonaut",
        name: "Axonaut",
        description: "i18n.collectors.axonaut.description",
        version: "0",
        website: "https://axonaut.com/account/rocket/creditList",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/428738.jpg",
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
        entryUrl: "https://axonaut.com/account/rocket/creditList",
    }

    constructor() {
        super(AxonautCollector.CONFIG);
    }
}
