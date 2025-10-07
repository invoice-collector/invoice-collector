
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LexwareOfficeCollector extends SketchCollector {

    static CONFIG = {
        id: "lexware_office",
        name: "Lexware Office",
        description: "i18n.collectors.lexware_office.description",
        version: "0",
        website: "https://app.lexoffice.de/home",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/494.jpg",
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
        entryUrl: "https://app.lexoffice.de/home",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LexwareOfficeCollector.CONFIG);
    }
}
