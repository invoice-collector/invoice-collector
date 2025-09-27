
import { SketchCollector } from '../../sketchCollector';

export class Grossiste3dCollector extends SketchCollector {

    static CONFIG = {
        id: "grossiste_3d",
        name: "GROSSISTE 3D",
        description: "i18n.collectors.grossiste_3d.description",
        version: "0",
        website: "https://www.grossiste3d.com/connexion?back=my-account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/832510.jpg",
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
        entryUrl: "https://www.grossiste3d.com/connexion?back=my-account",
    }

    constructor() {
        super(Grossiste3dCollector.CONFIG);
    }
}
