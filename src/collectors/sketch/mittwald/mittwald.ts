
import { SketchCollector } from '../../sketchCollector';

export class MittwaldCollector extends SketchCollector {

    static CONFIG = {
        id: "mittwald",
        name: "Mittwald",
        description: "i18n.collectors.mittwald.description",
        version: "0",
        website: "https://login.mittwald.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3126.jpg",
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
        entryUrl: "https://login.mittwald.de/",
    }

    constructor() {
        super(MittwaldCollector.CONFIG);
    }
}
