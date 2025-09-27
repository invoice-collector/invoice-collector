
import { SketchCollector } from '../../sketchCollector';

export class ExcoffierRecyclageCollector extends SketchCollector {

    static CONFIG = {
        id: "excoffier_recyclage",
        name: "EXCOFFIER RECYCLAGE",
        description: "i18n.collectors.excoffier_recyclage.description",
        version: "0",
        website: "https://extranet.excoffierrecyclage.com/Facture",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4179419.jpg",
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
        entryUrl: "https://extranet.excoffierrecyclage.com/Facture",
    }

    constructor() {
        super(ExcoffierRecyclageCollector.CONFIG);
    }
}
