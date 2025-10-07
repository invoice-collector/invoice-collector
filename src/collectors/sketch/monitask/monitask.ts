
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MonitaskCollector extends SketchCollector {

    static CONFIG = {
        id: "monitask",
        name: "Monitask",
        description: "i18n.collectors.monitask.description",
        version: "0",
        website: "https://www.monitask.com/en/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2131407.jpg",
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
        entryUrl: "https://www.monitask.com/en/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MonitaskCollector.CONFIG);
    }
}
