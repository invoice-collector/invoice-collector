
import { SketchCollector } from '../../sketchCollector';

export class PrismicCollector extends SketchCollector {

    static CONFIG = {
        id: "prismic",
        name: "Prismic",
        description: "i18n.collectors.prismic.description",
        version: "0",
        website: "https://prismic.io/dashboard/login?redirectUri=/dashboard",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778661.jpg",
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
        entryUrl: "https://prismic.io/dashboard/login?redirectUri=/dashboard",
    }

    constructor() {
        super(PrismicCollector.CONFIG);
    }
}
