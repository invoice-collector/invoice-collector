
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ElovadePartnerportalCollector extends SketchCollector {

    static CONFIG = {
        id: "elovade_partnerportal",
        name: "Elovade - Partnerportal",
        description: "i18n.collectors.elovade_partnerportal.description",
        version: "0",
        website: "https://partnerportal.elovade.com/index.cfm?content=rechnungen/rechnungen.cfm",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4388655.jpg",
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
        entryUrl: "https://partnerportal.elovade.com/index.cfm?content=rechnungen/rechnungen.cfm",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ElovadePartnerportalCollector.CONFIG);
    }
}
