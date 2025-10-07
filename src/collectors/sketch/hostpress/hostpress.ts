
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HostpressCollector extends SketchCollector {

    static CONFIG = {
        id: "hostpress",
        name: "HostPress",
        description: "i18n.collectors.hostpress.description",
        version: "0",
        website: "https://my.hostpress.de/clientarea.php?action=invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/77257.jpg",
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
        entryUrl: "https://my.hostpress.de/clientarea.php?action=invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HostpressCollector.CONFIG);
    }
}
