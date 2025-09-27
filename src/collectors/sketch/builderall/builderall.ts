
import { SketchCollector } from '../../sketchCollector';

export class BuilderallCollector extends SketchCollector {

    static CONFIG = {
        id: "builderall",
        name: "Builderall",
        description: "i18n.collectors.builderall.description",
        version: "0",
        website: "http://www.builderall.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/57871.jpg",
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
        entryUrl: "http://www.builderall.com",
    }

    constructor() {
        super(BuilderallCollector.CONFIG);
    }
}
