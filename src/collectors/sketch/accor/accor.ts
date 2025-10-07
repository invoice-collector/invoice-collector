
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AccorCollector extends SketchCollector {

    static CONFIG = {
        id: "accor",
        name: "Accor",
        description: "i18n.collectors.accor.description",
        version: "0",
        website: "https://all.accor.com/account/index.en.shtml#/my-bookings",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1371803.jpg",
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
        entryUrl: "https://all.accor.com/account/index.en.shtml#/my-bookings",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AccorCollector.CONFIG);
    }
}
