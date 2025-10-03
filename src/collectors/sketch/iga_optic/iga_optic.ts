
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class IgaOpticCollector extends SketchCollector {

    static CONFIG = {
        id: "iga_optic",
        name: "Iga Optic",
        description: "i18n.collectors.iga_optic.description",
        version: "0",
        website: "https://10934.gwsshop.de/de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1468240.jpg",
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
        entryUrl: "https://10934.gwsshop.de/de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(IgaOpticCollector.CONFIG);
    }
}
