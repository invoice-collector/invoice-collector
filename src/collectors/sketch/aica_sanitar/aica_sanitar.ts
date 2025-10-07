
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AicaSanitarCollector extends SketchCollector {

    static CONFIG = {
        id: "aica_sanitar",
        name: "AICA Sanitar",
        description: "i18n.collectors.aica_sanitar.description",
        version: "0",
        website: "https://aicasanitaer.de/index.php?main_page=login&zenid=e316295ad37676f25a2fd9cf004c4799",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2225191.jpg",
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
        entryUrl: "https://aicasanitaer.de/index.php?main_page=login&zenid=e316295ad37676f25a2fd9cf004c4799",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AicaSanitarCollector.CONFIG);
    }
}
