
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DirectusCloudCollector extends SketchCollector {

    static CONFIG = {
        id: "directus_cloud",
        name: "Directus Cloud",
        description: "i18n.collectors.directus_cloud.description",
        version: "0",
        website: "https://directus.cloud/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1132301.jpg",
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
        entryUrl: "https://directus.cloud/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DirectusCloudCollector.CONFIG);
    }
}
