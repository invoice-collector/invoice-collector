
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CentralstationCrmCollector extends SketchCollector {

    static CONFIG = {
        id: "centralstation_crm",
        name: "CentralStation CRM",
        description: "i18n.collectors.centralstation_crm.description",
        version: "0",
        website: "https://centralstationcrm.net",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/12068.jpg",
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
        entryUrl: "https://centralstationcrm.net",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CentralstationCrmCollector.CONFIG);
    }
}
