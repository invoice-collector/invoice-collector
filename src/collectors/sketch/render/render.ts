
import { SketchCollector } from '../../sketchCollector';

export class RenderCollector extends SketchCollector {

    static CONFIG = {
        id: "render",
        name: "render",
        description: "i18n.collectors.render.description",
        version: "0",
        website: "https://dashboard.render.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/798215.jpg",
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
        entryUrl: "https://dashboard.render.com/",
    }

    constructor() {
        super(RenderCollector.CONFIG);
    }
}
