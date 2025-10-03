
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LexwareCollector extends SketchCollector {

    static CONFIG = {
        id: "lexware",
        name: "Lexware",
        description: "i18n.collectors.lexware.description",
        version: "0",
        website: "https://www.lexware.de/kontakt/meinkonto/meine-daten/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/36738.jpg",
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
        entryUrl: "https://www.lexware.de/kontakt/meinkonto/meine-daten/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LexwareCollector.CONFIG);
    }
}
