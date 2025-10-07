
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ThecubenetCollector extends SketchCollector {

    static CONFIG = {
        id: "thecubenet",
        name: "theCubeNet",
        description: "i18n.collectors.thecubenet.description",
        version: "0",
        website: "https://www.thecubenet.com/clients/clientarea.php?action=invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/61472.jpg",
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
        entryUrl: "https://www.thecubenet.com/clients/clientarea.php?action=invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ThecubenetCollector.CONFIG);
    }
}
