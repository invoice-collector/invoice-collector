
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class UberBoxCollector extends SketchCollector {

    static CONFIG = {
        id: "uber_box",
        name: "Uber Box",
        description: "i18n.collectors.uber_box.description",
        version: "0",
        website: "https://uber.app.box.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4449993.jpg",
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
        entryUrl: "https://uber.app.box.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(UberBoxCollector.CONFIG);
    }
}
