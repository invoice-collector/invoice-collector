
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ShirteeCloudCollector extends SketchCollector {

    static CONFIG = {
        id: "shirtee_cloud",
        name: "Shirtee.Cloud",
        description: "i18n.collectors.shirtee_cloud.description",
        version: "0",
        website: "https://dashboard.shirtee.cloud/wallet",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/549043.jpg",
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
        entryUrl: "https://dashboard.shirtee.cloud/wallet",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ShirteeCloudCollector.CONFIG);
    }
}
