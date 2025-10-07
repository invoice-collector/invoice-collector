
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EnbwSmartImmoCollector extends SketchCollector {

    static CONFIG = {
        id: "enbw_smart_immo",
        name: "EnBW Smart immo+",
        description: "i18n.collectors.enbw_smart_immo.description",
        version: "0",
        website: "https://smartenergysuite.enbw.com/smartimmo/home/rechnungen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4334994.jpg",
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
        entryUrl: "https://smartenergysuite.enbw.com/smartimmo/home/rechnungen",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EnbwSmartImmoCollector.CONFIG);
    }
}
