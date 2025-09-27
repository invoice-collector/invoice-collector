
import { SketchCollector } from '../../sketchCollector';

export class MijnwebwinkelCollector extends SketchCollector {

    static CONFIG = {
        id: "mijnwebwinkel",
        name: "mijnwebwinkel",
        description: "i18n.collectors.mijnwebwinkel.description",
        version: "0",
        website: "https://account.mijnwebwinkel.nl/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/20474.jpg",
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
        entryUrl: "https://account.mijnwebwinkel.nl/login",
    }

    constructor() {
        super(MijnwebwinkelCollector.CONFIG);
    }
}
