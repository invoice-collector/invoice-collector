
import { SketchCollector } from '../../sketchCollector';

export class TescoBroadbandCollector extends SketchCollector {

    static CONFIG = {
        id: "tesco_broadband",
        name: "Tesco Broadband",
        description: "i18n.collectors.tesco_broadband.description",
        version: "0",
        website: "http://www.tescobroadband.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8621.jpg",
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
        entryUrl: "http://www.tescobroadband.com",
    }

    constructor() {
        super(TescoBroadbandCollector.CONFIG);
    }
}
