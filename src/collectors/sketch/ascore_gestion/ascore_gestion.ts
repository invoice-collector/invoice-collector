
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AscoreGestionCollector extends SketchCollector {

    static CONFIG = {
        id: "ascore_gestion",
        name: "Ascore Gestion",
        description: "i18n.collectors.ascore_gestion.description",
        version: "0",
        website: "https://www.ascoregestion.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/123807.jpg",
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
        entryUrl: "https://www.ascoregestion.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AscoreGestionCollector.CONFIG);
    }
}
