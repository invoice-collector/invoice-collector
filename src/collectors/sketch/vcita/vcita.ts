
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class VcitaCollector extends SketchCollector {

    static CONFIG = {
        id: "vcita",
        name: "vCita",
        description: "i18n.collectors.vcita.description",
        version: "0",
        website: "https://www.vcita.com/login?o=top_menu",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8562.jpg",
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
        entryUrl: "https://www.vcita.com/login?o=top_menu",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VcitaCollector.CONFIG);
    }
}
