
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SnapdealCollector extends SketchCollector {

    static CONFIG = {
        id: "snapdeal",
        name: "Snapdeal",
        description: "i18n.collectors.snapdeal.description",
        version: "0",
        website: "https://www.snapdeal.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/6884.jpg",
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
        entryUrl: "https://www.snapdeal.com/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SnapdealCollector.CONFIG);
    }
}
