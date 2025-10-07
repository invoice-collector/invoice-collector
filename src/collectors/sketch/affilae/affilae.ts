
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AffilaeCollector extends SketchCollector {

    static CONFIG = {
        id: "affilae",
        name: "affilae",
        description: "i18n.collectors.affilae.description",
        version: "0",
        website: "https://affilae.com/fr/logiciel-affiliation/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/648508.jpg",
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
        entryUrl: "https://affilae.com/fr/logiciel-affiliation/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AffilaeCollector.CONFIG);
    }
}
