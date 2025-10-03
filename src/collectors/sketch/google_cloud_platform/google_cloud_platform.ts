
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GoogleCloudPlatformCollector extends SketchCollector {

    static CONFIG = {
        id: "google_cloud_platform",
        name: "Google Cloud Platform",
        description: "i18n.collectors.google_cloud_platform.description",
        version: "0",
        website: "http://console.cloud.google.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/18546.jpg",
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
        entryUrl: "http://console.cloud.google.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GoogleCloudPlatformCollector.CONFIG);
    }
}
