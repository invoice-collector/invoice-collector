
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WistiaCollector extends SketchCollector {

    static CONFIG = {
        id: "wistia",
        name: "Wistia",
        description: "i18n.collectors.wistia.description",
        version: "0",
        website: "https://secure.wistia.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8546.jpg",
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
        entryUrl: "https://secure.wistia.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WistiaCollector.CONFIG);
    }
}
