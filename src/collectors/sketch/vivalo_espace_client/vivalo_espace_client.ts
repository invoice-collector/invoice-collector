
import { SketchCollector } from '../../sketchCollector';

export class VivaloEspaceClientCollector extends SketchCollector {

    static CONFIG = {
        id: "vivalo_espace_client",
        name: "Vivalo - Espace Client",
        description: "i18n.collectors.vivalo_espace_client.description",
        version: "0",
        website: "https://vivalo.re/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4415682.jpg",
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
        entryUrl: "https://vivalo.re/",
    }

    constructor() {
        super(VivaloEspaceClientCollector.CONFIG);
    }
}
