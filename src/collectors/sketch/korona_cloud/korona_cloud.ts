
import { SketchCollector } from '../../sketchCollector';

export class KoronaCloudCollector extends SketchCollector {

    static CONFIG = {
        id: "korona_cloud",
        name: "korona.cloud",
        description: "i18n.collectors.korona_cloud.description",
        version: "0",
        website: "https://koronacloud.com/web/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/187231.jpg",
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
        entryUrl: "https://koronacloud.com/web/",
    }

    constructor() {
        super(KoronaCloudCollector.CONFIG);
    }
}
