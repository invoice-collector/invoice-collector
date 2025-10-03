
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class RolandCloudCollector extends SketchCollector {

    static CONFIG = {
        id: "roland_cloud",
        name: "Roland Cloud",
        description: "i18n.collectors.roland_cloud.description",
        version: "0",
        website: "https://www.rolandcloud.com/roland-account/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/976600.jpg",
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
        entryUrl: "https://www.rolandcloud.com/roland-account/login/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RolandCloudCollector.CONFIG);
    }
}
