
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ConnoxCollector extends SketchCollector {

    static CONFIG = {
        id: "connox",
        name: "connox",
        description: "i18n.collectors.connox.description",
        version: "0",
        website: "https://www.connox.de/kundenkonto/ihre-bestellungen/rechnungen.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32595.jpg",
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
        entryUrl: "https://www.connox.de/kundenkonto/ihre-bestellungen/rechnungen.html",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ConnoxCollector.CONFIG);
    }
}
