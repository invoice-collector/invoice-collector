
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GlasfaserHengersbergCollector extends SketchCollector {

    static CONFIG = {
        id: "glasfaser_hengersberg",
        name: "Glasfaser Hengersberg",
        description: "i18n.collectors.glasfaser_hengersberg.description",
        version: "0",
        website: "https://kundenportal.glasfaser-hengersberg.de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1093684.jpg",
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
        entryUrl: "https://kundenportal.glasfaser-hengersberg.de/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GlasfaserHengersbergCollector.CONFIG);
    }
}
