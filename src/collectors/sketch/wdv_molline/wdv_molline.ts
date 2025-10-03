
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WdvMollineCollector extends SketchCollector {

    static CONFIG = {
        id: "wdv_molline",
        name: "WDV Molline",
        description: "i18n.collectors.wdv_molline.description",
        version: "0",
        website: "https://www.molline.de/informationen/kundenbereich/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/426740.jpg",
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
        entryUrl: "https://www.molline.de/informationen/kundenbereich/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WdvMollineCollector.CONFIG);
    }
}
