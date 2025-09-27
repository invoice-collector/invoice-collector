
import { SketchCollector } from '../../sketchCollector';

export class HostedNlCollector extends SketchCollector {

    static CONFIG = {
        id: "hosted_nl",
        name: "Hosted.nl",
        description: "i18n.collectors.hosted_nl.description",
        version: "0",
        website: "http://www.hosted.nl",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32748.jpg",
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
        entryUrl: "http://www.hosted.nl",
    }

    constructor() {
        super(HostedNlCollector.CONFIG);
    }
}
