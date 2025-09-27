
import { SketchCollector } from '../../sketchCollector';

export class E3dCollector extends SketchCollector {

    static CONFIG = {
        id: "e3d",
        name: "E3D",
        description: "i18n.collectors.e3d.description",
        version: "0",
        website: "https://e3d-online.com/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2011883.jpg",
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
        entryUrl: "https://e3d-online.com/account",
    }

    constructor() {
        super(E3dCollector.CONFIG);
    }
}
