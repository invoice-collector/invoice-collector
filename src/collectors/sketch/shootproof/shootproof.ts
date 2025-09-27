
import { SketchCollector } from '../../sketchCollector';

export class ShootproofCollector extends SketchCollector {

    static CONFIG = {
        id: "shootproof",
        name: "Shootproof",
        description: "i18n.collectors.shootproof.description",
        version: "0",
        website: "https://studio.shootproof.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/87682.jpg",
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
        entryUrl: "https://studio.shootproof.com/",
    }

    constructor() {
        super(ShootproofCollector.CONFIG);
    }
}
