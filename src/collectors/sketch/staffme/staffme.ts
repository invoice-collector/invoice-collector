
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class StaffmeCollector extends SketchCollector {

    static CONFIG = {
        id: "staffme",
        name: "StaffMe",
        description: "i18n.collectors.staffme.description",
        version: "0",
        website: "https://account.staffme.fr/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/748594.jpg",
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
        entryUrl: "https://account.staffme.fr/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StaffmeCollector.CONFIG);
    }
}
