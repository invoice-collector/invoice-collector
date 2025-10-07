
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EdoxCollector extends SketchCollector {

    static CONFIG = {
        id: "edox",
        name: "Edox",
        description: "i18n.collectors.edox.description",
        version: "0",
        website: "http://www.edox.fr/Webshop/DownloadOrderDoc.aspx?filename=[F]858918.pdf&type=facture",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/185315.jpg",
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
        entryUrl: "http://www.edox.fr/Webshop/DownloadOrderDoc.aspx?filename=[F]858918.pdf&type=facture",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EdoxCollector.CONFIG);
    }
}
