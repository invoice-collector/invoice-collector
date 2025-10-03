
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SageEntgeltUndPersonalCollector extends SketchCollector {

    static CONFIG = {
        id: "sage_entgelt_und_personal",
        name: "Sage Entgelt und Personal",
        description: "i18n.collectors.sage_entgelt_und_personal.description",
        version: "0",
        website: "https://lohnabrechnung.sage.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/37590.jpg",
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
        entryUrl: "https://lohnabrechnung.sage.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SageEntgeltUndPersonalCollector.CONFIG);
    }
}
