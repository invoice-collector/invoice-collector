
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EwgCollector extends SketchCollector {

    static CONFIG = {
        id: "ewg",
        name: "EWG",
        description: "i18n.collectors.ewg.description",
        version: "0",
        website: "http://www.ewgmedianet.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9329.jpg",
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
        entryUrl: "http://www.ewgmedianet.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EwgCollector.CONFIG);
    }
}
