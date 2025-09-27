
import { SketchCollector } from '../../sketchCollector';

export class IpgeolocationCollector extends SketchCollector {

    static CONFIG = {
        id: "ipgeolocation",
        name: "ipgeolocation",
        description: "i18n.collectors.ipgeolocation.description",
        version: "0",
        website: "https://app.ipgeolocation.io/#",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2120102.jpg",
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
        entryUrl: "https://app.ipgeolocation.io/#",
    }

    constructor() {
        super(IpgeolocationCollector.CONFIG);
    }
}
