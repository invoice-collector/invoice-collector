
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ManatecCollector extends SketchCollector {

    static CONFIG = {
        id: "manatec",
        name: "manatec",
        description: "i18n.collectors.manatec.description",
        version: "0",
        website: "https://erp.manatec.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/770583.jpg",
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
        entryUrl: "https://erp.manatec.de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ManatecCollector.CONFIG);
    }
}
