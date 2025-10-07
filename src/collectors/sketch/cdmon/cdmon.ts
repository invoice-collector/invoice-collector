
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CdmonCollector extends SketchCollector {

    static CONFIG = {
        id: "cdmon",
        name: "cdmon",
        description: "i18n.collectors.cdmon.description",
        version: "0",
        website: "https://admin.cdmon.com/ca/facturacio/llistat-factures",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/109855.jpg",
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
        entryUrl: "https://admin.cdmon.com/ca/facturacio/llistat-factures",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CdmonCollector.CONFIG);
    }
}
