
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PrismicCollector extends SketchCollector {

    static CONFIG = {
        id: "prismic",
        name: "Prismic",
        description: "i18n.collectors.prismic.description",
        version: "0",
        website: "https://prismic.io/dashboard/login?redirectUri=/dashboard",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778661.jpg",
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
        entryUrl: "https://prismic.io/dashboard/login?redirectUri=/dashboard",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PrismicCollector.CONFIG);
    }
}
