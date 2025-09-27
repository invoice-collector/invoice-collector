
import { SketchCollector } from '../../sketchCollector';

export class M2mMobilCollector extends SketchCollector {

    static CONFIG = {
        id: "m2m_mobil",
        name: "m2m mobil",
        description: "i18n.collectors.m2m_mobil.description",
        version: "0",
        website: "https://service.m2m-mobil.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/777411.jpg",
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
        entryUrl: "https://service.m2m-mobil.de/",
    }

    constructor() {
        super(M2mMobilCollector.CONFIG);
    }
}
