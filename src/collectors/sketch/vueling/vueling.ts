
import { SketchCollector } from '../../sketchCollector';

export class VuelingCollector extends SketchCollector {

    static CONFIG = {
        id: "vueling",
        name: "Vueling",
        description: "i18n.collectors.vueling.description",
        version: "0",
        website: "http://www.vueling.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1203.jpg",
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
        entryUrl: "http://www.vueling.com",
    }

    constructor() {
        super(VuelingCollector.CONFIG);
    }
}
