
import { SketchCollector } from '../../sketchCollector';

export class MuralCollector extends SketchCollector {

    static CONFIG = {
        id: "mural",
        name: "Mural",
        description: "i18n.collectors.mural.description",
        version: "0",
        website: "https://app.mural.co/signin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1333273.jpg",
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
        entryUrl: "https://app.mural.co/signin",
    }

    constructor() {
        super(MuralCollector.CONFIG);
    }
}
