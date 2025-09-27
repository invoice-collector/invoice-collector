
import { SketchCollector } from '../../sketchCollector';

export class OrangeCaraibeClientSpaceCollector extends SketchCollector {

    static CONFIG = {
        id: "orange_caraibe_client_space",
        name: "Orange Caraibe Client Space",
        description: "i18n.collectors.orange_caraibe_client_space.description",
        version: "0",
        website: "https://espaceclient.orangecaraibe.com/fel/loginOut#",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3125110.jpg",
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
        entryUrl: "https://espaceclient.orangecaraibe.com/fel/loginOut#",
    }

    constructor() {
        super(OrangeCaraibeClientSpaceCollector.CONFIG);
    }
}
