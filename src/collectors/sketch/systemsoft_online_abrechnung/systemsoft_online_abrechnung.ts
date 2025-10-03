
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SystemsoftOnlineAbrechnungCollector extends SketchCollector {

    static CONFIG = {
        id: "systemsoft_online_abrechnung",
        name: "Systemsoft Online Abrechnung",
        description: "i18n.collectors.systemsoft_online_abrechnung.description",
        version: "0",
        website: "https://www.systemsoft-gmbh.de/online-invoice/index.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/534316.jpg",
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
        entryUrl: "https://www.systemsoft-gmbh.de/online-invoice/index.php",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SystemsoftOnlineAbrechnungCollector.CONFIG);
    }
}
