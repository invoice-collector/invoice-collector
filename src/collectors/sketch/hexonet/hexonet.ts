
import { SketchCollector } from '../../sketchCollector';

export class HexonetCollector extends SketchCollector {

    static CONFIG = {
        id: "hexonet",
        name: "Hexonet",
        description: "i18n.collectors.hexonet.description",
        version: "0",
        website: "https://www.hexonet.net/sign-up",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/39121.jpg",
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
        entryUrl: "https://www.hexonet.net/sign-up",
    }

    constructor() {
        super(HexonetCollector.CONFIG);
    }
}
