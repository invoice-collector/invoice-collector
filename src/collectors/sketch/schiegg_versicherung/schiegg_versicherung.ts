
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SchieggVersicherungCollector extends SketchCollector {

    static CONFIG = {
        id: "schiegg_versicherung",
        name: "Schiegg -Versicherung",
        description: "i18n.collectors.schiegg_versicherung.description",
        version: "0",
        website: "https://www.schiegg-versicherung.de/invoice/showList",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2761411.jpg",
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
        entryUrl: "https://www.schiegg-versicherung.de/invoice/showList",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SchieggVersicherungCollector.CONFIG);
    }
}
