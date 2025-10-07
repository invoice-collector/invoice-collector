
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TelenecCollector extends SketchCollector {

    static CONFIG = {
        id: "telenec",
        name: "Telenec",
        description: "i18n.collectors.telenec.description",
        version: "0",
        website: "http://portal.telenec.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9180.jpg",
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
        entryUrl: "http://portal.telenec.de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TelenecCollector.CONFIG);
    }
}
