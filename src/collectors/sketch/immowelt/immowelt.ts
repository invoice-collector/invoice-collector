
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ImmoweltCollector extends SketchCollector {

    static CONFIG = {
        id: "immowelt",
        name: "Immowelt",
        description: "i18n.collectors.immowelt.description",
        version: "0",
        website: "https://meine.immowelt.de/0-558/meineimmowelt/index.aspx?returnurl=%2f0-558%2fmeineimmowelt%2fverwaltung%2faccountoverview.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9655.jpg",
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
        entryUrl: "https://meine.immowelt.de/0-558/meineimmowelt/index.aspx?returnurl=%2f0-558%2fmeineimmowelt%2fverwaltung%2faccountoverview.aspx",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ImmoweltCollector.CONFIG);
    }
}
