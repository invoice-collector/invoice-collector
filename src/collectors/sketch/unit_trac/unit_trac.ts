
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class UnitTracCollector extends SketchCollector {

    static CONFIG = {
        id: "unit_trac",
        name: "Unit Trac",
        description: "i18n.collectors.unit_trac.description",
        version: "0",
        website: "https://www.unittrac.com/Secure/Settings/UTBilling",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4565112.jpg",
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
        entryUrl: "https://www.unittrac.com/Secure/Settings/UTBilling",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(UnitTracCollector.CONFIG);
    }
}
