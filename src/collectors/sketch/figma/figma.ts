
import { SketchCollector } from '../../sketchCollector';

export class FigmaCollector extends SketchCollector {

    static CONFIG = {
        id: "figma",
        name: "Figma",
        description: "i18n.collectors.figma.description",
        version: "0",
        website: "https://www.figma.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/77708.jpg",
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
        entryUrl: "https://www.figma.com",
    }

    constructor() {
        super(FigmaCollector.CONFIG);
    }
}
