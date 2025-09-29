import { SketchCollector } from '../../sketchCollector';

export class SanefCollector extends SketchCollector {

    static CONFIG = {
        id: "sanef",
        name: "Sanef",
        description: "i18n.collectors.sanef.description",
        version: "0",
        website: "https://sanef.com",
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/37/Logo_Sanef_Abertis_-_2009.svg",
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
        }
    }

    constructor() {
        super(SanefCollector.CONFIG);
    }
}
