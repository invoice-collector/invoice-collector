
import { SketchCollector } from '../../sketchCollector';

export class AzooZweihandwerkBackendCollector extends SketchCollector {

    static CONFIG = {
        id: "azoo_zweihandwerk_backend",
        name: "Azoo / Zweihandwerk Backend",
        description: "i18n.collectors.azoo_zweihandwerk_backend.description",
        version: "0",
        website: "https://backend.azoo.co/zweihandwerk/settings/accountbills",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2846244.jpg",
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
        entryUrl: "https://backend.azoo.co/zweihandwerk/settings/accountbills",
    }

    constructor() {
        super(AzooZweihandwerkBackendCollector.CONFIG);
    }
}
