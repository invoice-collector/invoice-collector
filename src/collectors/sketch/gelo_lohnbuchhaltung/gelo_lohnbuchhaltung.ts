
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GeloLohnbuchhaltungCollector extends SketchCollector {

    static CONFIG = {
        id: "gelo_lohnbuchhaltung",
        name: "Gelo Lohnbuchhaltung",
        description: "i18n.collectors.gelo_lohnbuchhaltung.description",
        version: "0",
        website: "https://gelo.portal-bereich.de/html/#documentsharing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1490694.jpg",
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
        entryUrl: "https://gelo.portal-bereich.de/html/#documentsharing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GeloLohnbuchhaltungCollector.CONFIG);
    }
}
