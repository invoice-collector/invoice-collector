
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class NeustadtwerkeDeCollector extends SketchCollector {

    static CONFIG = {
        id: "neustadtwerke_de",
        name: "Neustadtwerke.de",
        description: "i18n.collectors.neustadtwerke_de.description",
        version: "0",
        website: "https://portal.neustadtwerke.de/powercommerce/ivu/fo/portal/home",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1120294.jpg",
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
        entryUrl: "https://portal.neustadtwerke.de/powercommerce/ivu/fo/portal/home",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(NeustadtwerkeDeCollector.CONFIG);
    }
}
