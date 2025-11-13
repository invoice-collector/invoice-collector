import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CdSudCollector extends SketchCollector {

    static CONFIG = {
        id: "cdsud",
        name: "Cd sud",
        description: "i18n.collectors.cdsud.description",
        version: "0",
        website: "https://www.cd-sud.com",
        logo: "https://www.cd-sud.com/static/version1759948245/frontend/CDSud/default/fr_FR/images/logo.svg",
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
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CdSudCollector.CONFIG);
    }
}
