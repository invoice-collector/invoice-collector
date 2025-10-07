
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ElisWismarCollector extends SketchCollector {

    static CONFIG = {
        id: "elis_wismar",
        name: "Elis Wismar",
        description: "i18n.collectors.elis_wismar.description",
        version: "0",
        website: "http://bestellung.waescherei-wismar.de/Webportal/rechnungen/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2519923.jpg",
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
        entryUrl: "http://bestellung.waescherei-wismar.de/Webportal/rechnungen/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ElisWismarCollector.CONFIG);
    }
}
