
import { SketchCollector } from '../../sketchCollector';

export class FidoCaCollector extends SketchCollector {

    static CONFIG = {
        id: "fido_ca",
        name: "Fido.ca",
        description: "i18n.collectors.fido_ca.description",
        version: "0",
        website: "https://www.fido.ca",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8778.jpg",
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
        entryUrl: "https://www.fido.ca",
    }

    constructor() {
        super(FidoCaCollector.CONFIG);
    }
}
