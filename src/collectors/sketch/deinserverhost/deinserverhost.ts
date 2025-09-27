
import { SketchCollector } from '../../sketchCollector';

export class DeinserverhostCollector extends SketchCollector {

    static CONFIG = {
        id: "deinserverhost",
        name: "deinserverhost",
        description: "i18n.collectors.deinserverhost.description",
        version: "0",
        website: "https://deinserverhost.de/store/clientarea.php?action=invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1371834.jpg",
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
        entryUrl: "https://deinserverhost.de/store/clientarea.php?action=invoices",
    }

    constructor() {
        super(DeinserverhostCollector.CONFIG);
    }
}
