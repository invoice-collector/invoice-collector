
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class Immobilienscout24Collector extends SketchCollector {

    static CONFIG = {
        id: "immobilienscout24",
        name: "ImmobilienScout24",
        description: "i18n.collectors.immobilienscout24.description",
        version: "0",
        website: "https://www.immobilienscout24.de/rechnungsuebersicht/uebersicht.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9657.jpg",
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
        entryUrl: "https://www.immobilienscout24.de/rechnungsuebersicht/uebersicht.html",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(Immobilienscout24Collector.CONFIG);
    }
}
