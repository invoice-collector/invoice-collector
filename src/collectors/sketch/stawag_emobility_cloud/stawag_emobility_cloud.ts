
import { SketchCollector } from '../../sketchCollector';

export class StawagEmobilityCloudCollector extends SketchCollector {

    static CONFIG = {
        id: "stawag_emobility_cloud",
        name: "STAWAG Emobility Cloud",
        description: "i18n.collectors.stawag_emobility_cloud.description",
        version: "0",
        website: "https://stawag.emobilitycloud.com/de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1061813.jpg",
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
        entryUrl: "https://stawag.emobilitycloud.com/de/login",
    }

    constructor() {
        super(StawagEmobilityCloudCollector.CONFIG);
    }
}
