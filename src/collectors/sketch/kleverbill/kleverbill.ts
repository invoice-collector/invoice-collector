
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class KleverbillCollector extends SketchCollector {

    static CONFIG = {
        id: "kleverbill",
        name: "Kleverbill",
        description: "i18n.collectors.kleverbill.description",
        version: "0",
        website: "https://app.kleverbill.de/#/settings/profile",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1323400.jpg",
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
        entryUrl: "https://app.kleverbill.de/#/settings/profile",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(KleverbillCollector.CONFIG);
    }
}
