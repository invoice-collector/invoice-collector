
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ConnectsCollector extends SketchCollector {

    static CONFIG = {
        id: "connects",
        name: "Connects",
        description: "i18n.collectors.connects.description",
        version: "0",
        website: "https://cct.connects.ch/partner",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/158367.jpg",
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
        entryUrl: "https://cct.connects.ch/partner",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ConnectsCollector.CONFIG);
    }
}
