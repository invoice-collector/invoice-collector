
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ResopharmaCollector extends SketchCollector {

    static CONFIG = {
        id: "resopharma",
        name: "Resopharma",
        description: "i18n.collectors.resopharma.description",
        version: "0",
        website: "https://www.resopharma.fr/partenaires.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/501528.jpg",
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
        entryUrl: "https://www.resopharma.fr/partenaires.php",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ResopharmaCollector.CONFIG);
    }
}
