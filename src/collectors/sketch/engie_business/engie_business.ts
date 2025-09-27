
import { SketchCollector } from '../../sketchCollector';

export class EngieBusinessCollector extends SketchCollector {

    static CONFIG = {
        id: "engie_business",
        name: "engie Business",
        description: "i18n.collectors.engie_business.description",
        version: "0",
        website: "https://myaccount-business.engie.co.uk/s/login/?ec=302&startURL=%2Fs%2F",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/692768.jpg",
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
        entryUrl: "https://myaccount-business.engie.co.uk/s/login/?ec=302&startURL=%2Fs%2F",
    }

    constructor() {
        super(EngieBusinessCollector.CONFIG);
    }
}
