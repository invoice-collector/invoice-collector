
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ZeopEnterpriseCollector extends SketchCollector {

    static CONFIG = {
        id: "zeop_enterprise",
        name: "Zeop - Enterprise",
        description: "i18n.collectors.zeop_enterprise.description",
        version: "0",
        website: "https://monportailentreprise.zeop.re/gestion-factures",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4438924.jpg",
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
        entryUrl: "https://monportailentreprise.zeop.re/gestion-factures",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ZeopEnterpriseCollector.CONFIG);
    }
}
