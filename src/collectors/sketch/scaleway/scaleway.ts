
import { SketchCollector } from '../../sketchCollector';

export class ScalewayCollector extends SketchCollector {

    static CONFIG = {
        id: "scaleway",
        name: "Scaleway",
        description: "i18n.collectors.scaleway.description",
        version: "0",
        website: "https://cloud.scaleway.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9915.jpg",
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
        entryUrl: "https://cloud.scaleway.com",
    }

    constructor() {
        super(ScalewayCollector.CONFIG);
    }
}
