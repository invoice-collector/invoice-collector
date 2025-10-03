
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TmdHostingCollector extends SketchCollector {

    static CONFIG = {
        id: "tmd_hosting",
        name: "TMD Hosting",
        description: "i18n.collectors.tmd_hosting.description",
        version: "0",
        website: "https://my.tmdhosting.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32803.jpg",
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
        entryUrl: "https://my.tmdhosting.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TmdHostingCollector.CONFIG);
    }
}
