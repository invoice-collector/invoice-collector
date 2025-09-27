
import { SketchCollector } from '../../sketchCollector';

export class VisualpingCollector extends SketchCollector {

    static CONFIG = {
        id: "visualping",
        name: "Visualping",
        description: "i18n.collectors.visualping.description",
        version: "0",
        website: "https://visualping.io/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/55587.jpg",
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
        entryUrl: "https://visualping.io/login",
    }

    constructor() {
        super(VisualpingCollector.CONFIG);
    }
}
