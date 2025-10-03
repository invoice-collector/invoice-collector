
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class UnitedcallCollector extends SketchCollector {

    static CONFIG = {
        id: "unitedcall",
        name: "UnitedCall",
        description: "i18n.collectors.unitedcall.description",
        version: "0",
        website: "https://app.unitedcall.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32954.jpg",
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
        entryUrl: "https://app.unitedcall.de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(UnitedcallCollector.CONFIG);
    }
}
